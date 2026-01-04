<script>
import AboutMe from '@/components/about/AboutMe';
import AboutCounter from '@/components/about/AboutCounter';
import Certificates from '@/components/about/Certificates';
import GitContributes from '@/components/about/GitContributes.vue';
import OurCustomer from '@/components/about/OurCustomer.vue';
import feather from 'feather-icons';

export default {
	name: 'About',
	components: {
		AboutMe,
		AboutCounter,
		Certificates,
		GitContributes,
		OurCustomer,
	},
	data: () => {
		return {};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div>
		<!-- About me -->
		<div class="container mx-auto">
			<AboutMe />
		</div>

		<!-- About counter -->
		<div class="container mx-auto">
			<GitContributes />
		</div>

		<!-- About counter -->
		<AboutCounter />

		<!-- Git attribute -->
		<div class="container mx-auto">
			<Certificates />
		</div>

		<!-- Our customer -->
		<div class="container mx-auto">
			<OurCustomer />
		</div>
	</div>
</template>

<style scoped></style>
