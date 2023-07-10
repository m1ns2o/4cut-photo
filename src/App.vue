<template>
	<v-app>
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<style>
:root {
	--gray: #5f6061;
	--shadow: #d0d3d9;
	--primary: #9ac5f4;
	--accent: #a7ecee;
	--sub1: #b0daff;
	/* --sub1: #99dbf5; */
	--sub2: #ffeebb;
}
a {
	all: unset;
	display: block;
	height: 100%;
}
a:hover {
	cursor: pointer;
}
</style>

<script>
export default {
	name: "App",

	data: () => ({
		//
	}),
};
</script>
