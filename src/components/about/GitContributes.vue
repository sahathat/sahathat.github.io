<script>
import axios from "axios";

export default {
    name: "GitContributes",
    data() {
        return {
            username: "sahathat",
            selectedYear: new Date().getFullYear(),
            contributions: [],
            loading: false,
            totalContribute: 0,
            error: null,
            tooltip: {
                visible: false,
                x: 0,
                y: 0,
                text: "",
            },
        };
    },
    computed: {
        weeks() {
            const weeks = [];
            for (let i = 0; i < this.contributions.length; i += 7) {
                weeks.push(this.contributions.slice(i, i + 7));
            }
            return weeks;
        },
        monthLabels() {
            const months = [];
            let lastMonth = null;

            this.weeks.forEach((week, index) => {
                const firstDay = week[0];
                if (!firstDay) return;

                const month = new Date(firstDay.date).getMonth();
                if (month !== lastMonth) {
                    months.push({ index, label: new Date(firstDay.date).toLocaleString("en", { month: "short" }) });
                    lastMonth = month;
                }
            });

            return months;
        },
        yearOptions() {
            const currentYear = new Date().getFullYear();
            return Array.from({ length: 5 }, (_, i) => currentYear - i);
        }
    },
    methods: {
        async fetchContributions() {
            this.loading = true;
            this.error = null;

            const from = `${this.selectedYear}-01-01T00:00:00Z`;
            const to = `${this.selectedYear}-12-31T23:59:59Z`;

            try {
                const query = `
                query {
                    user(login: "${this.username}") {
                    contributionsCollection(from: "${from}", to: "${to}") {
                        totalCommitContributions
                        contributionCalendar {
                            weeks {
                                contributionDays {
                                    date
                                    contributionCount
                                }
                            }
                        }
                    }
                    }
                }
                `;

                const res = await axios.post(
                    "https://api.github.com/graphql",
                    { query },
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.VUE_APP_GITHUB_TOKEN}`
                        },
                    }
                );

                const weeks =
                    res.data.data.user.contributionsCollection
                        .contributionCalendar.weeks;

                this.totalContribute = res.data.data.user.contributionsCollection
                .totalCommitContributions;

                this.contributions = weeks.flatMap(w => w.contributionDays);
            } catch {
                this.error = "Failed to load GitHub contributions.";
            } finally {
                this.loading = false;
            }
        },
        contributionClass(count) {
            if (count === 0) return "bg-gray-200 dark:bg-gray-700";
            if (count < 5) return "bg-green-200";
            if (count < 10) return "bg-green-400";
            if (count < 20) return "bg-green-600";
            return "bg-green-800";
        },
        showTooltip(event, day) {
            if (!day) return;

            const rect = event.target.getBoundingClientRect();
            const tooltipWidth = 180;
            const tooltipHeight = 32;

            let left = rect.left + rect.width / 2 - tooltipWidth / 2;
            let top = rect.top - tooltipHeight - 8;

            // Clamp horizontally
            left = Math.max(8, Math.min(left, window.innerWidth - tooltipWidth - 8));

            // If tooltip goes above viewport, place below
            if (top < 8) {
                top = rect.bottom + 8;
            }

            const date = new Date(day.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
            });

            this.tooltip.text = `${day.contributionCount} contributions on ${date}`;
            this.tooltip.x = left;
            this.tooltip.y = top;
            this.tooltip.visible = true;
        },
        hideTooltip() {
            this.tooltip.visible = false;
        },
    },
    mounted() {
        this.fetchContributions();
    },
    watch: {
        selectedYear() {
            this.fetchContributions();
        },
    },
};
</script>


<template>
    
    <div class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark dark:text-white p-6 rounded shadow">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold">
                GitHub Contributions ({{ totalContribute }} for {{ selectedYear }})
            </h2>

            <div class="relative">
                <select v-model="selectedYear" class="appearance-none border rounded px-3 py-1 pr-8 text-sm
                        dark:bg-gray-800 dark:border-gray-600">
                    <option v-for="year in yearOptions" :key="year" :value="year">
                        {{ year }}
                    </option>
                </select>

                <!-- Arrow -->
                <span class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
                </span>
            </div>
        </div>


        <div v-if="loading">Loading contributions...</div>
        <div v-if="error" class="text-red-500">{{ error }}</div>

        <div v-if="!loading && !error" class="overflow-x-auto">
            <div class="inline-block">
                <!-- Month Labels Row -->
                <div class="relative mb-2" style="width: 848px; height: 16px">
                    <div v-for="month in monthLabels" :key="month.index" class="absolute text-xs text-gray-500"
                        :style="{ left: month.index * 16 + 'px' }">
                        {{ month.label }}
                    </div>
                </div>

                <!-- Grid Row -->
                <div class="flex gap-1" style="width: 848px">
                    <div v-for="(week, wIndex) in weeks" :key="wIndex" class="flex flex-col gap-1">
                        <div v-for="day in week" :key="day?.date ?? wIndex" class="w-3 h-3 rounded"
                            :class="contributionClass(day?.contributionCount ?? 0)"
                            @mouseenter="showTooltip($event, day)"
                            @mouseleave="hideTooltip"
                            ></div>
                    </div>
                </div>

                <div
                    v-if="tooltip.visible"
                    class="fixed z-50 pointer-events-none
                            bg-gray-900 text-white text-xs px-2 py-1 rounded shadow"
                    :style="{ left: tooltip.x + 'px', top: tooltip.y + 'px' }"
                    >
                    {{ tooltip.text }}
                </div>
            </div>
        </div>

        <!-- Legend -->
        <div class="flex gap-2 items-center mt-4 text-sm">
            <span>Less</span>
            <div class="w-3 h-3 bg-gray-200"></div>
            <div class="w-3 h-3 bg-green-200"></div>
            <div class="w-3 h-3 bg-green-400"></div>
            <div class="w-3 h-3 bg-green-600"></div>
            <div class="w-3 h-3 bg-green-800"></div>
            <span>More</span>
        </div>
    </div>
</template>