<script>
export default {
    data: () => {
        return {
            clientsHeading: 'Our customer',
            clients: [
                {
                    id: 1,
                    title: 'GoSFi',
                    img: 'https://ik.imagekit.io/iytkpg49r/Portfolio/Icon/GoSFi.png',
                },
                {
                    id: 2,
                    title: 'ป.กุ้งเผา ปิ่นเกล้า',
                    img: 'https://ik.imagekit.io/iytkpg49r/Portfolio/Icon/Porpinklao.png',
                },
                {
                    id: 3,
                    title: 'PAT Technology Co ltd.',
                    img: 'https://ik.imagekit.io/iytkpg49r/Portfolio/Icon/PAT.png',
                },
                {
                    id: 4,
                    title: 'TOA Electronics (thailand) co. ltd',
                    img: 'https://ik.imagekit.io/iytkpg49r/Portfolio/Icon/TOA.png',
                },
                {
                    id: 5,
                    title: 'PTTLNG',
                    img: 'https://ik.imagekit.io/iytkpg49r/Portfolio/Icon/PTTLNG.png',
                },
            ],
            isDragging: false,
            startX: 0,
            scrollLeft: 0,
        };
    },
    mounted() {
        window.addEventListener("mousemove", this.onDrag);
        window.addEventListener("mouseup", this.stopDrag);
    },
    beforeUnmount() {
        window.removeEventListener("mousemove", this.onDrag);
        window.removeEventListener("mouseup", this.stopDrag);
    },
    methods: {
        startDrag(e) {
        if (!this.$refs.scrollContainer) return;

        this.isDragging = true;
        this.startX = e.pageX;
        this.startScrollLeft = this.$refs.scrollContainer.scrollLeft;
        },
        stopDrag() {
        this.isDragging = false;
        },
        onDrag(e) {
        if (!this.isDragging || !this.$refs.scrollContainer) return;

        e.preventDefault();
        const walk = (e.pageX - this.startX) * 1.5;
        this.$refs.scrollContainer.scrollLeft =
            this.startScrollLeft - walk;
        },
    },
};
</script>

<template>
    <div class="mt-10 sm:mt-20">
      <p
        class="font-general-medium text-2xl sm:text-3xl
               text-primary-dark dark:text-primary-light"
      >
        {{ clientsHeading }}
      </p>
  
      <!-- Draggable horizontal scroll -->
      <div
        ref="scrollContainer"
        class="mt-10 sm:mt-14
                flex gap-4
                justify-center
                overflow-x-auto
                no-scrollbar
                cursor-grab active:cursor-grabbing
                select-none"
        @mousedown="startDrag"
        @mouseleave="stopDrag"
      >
        <div
          v-for="client in clients"
          :key="client.id"
          class="flex-shrink-0"
        >
        <img
            :src="client.img"
            :alt="client.title"
            class="w-56 h-40 object-contain
                    rounded-lg border
                    dark:border-ternary-dark"
            draggable="false"
        />
        </div>
      </div>
    </div>
  </template>
  

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  scrollbar-width: none;
}

</style>