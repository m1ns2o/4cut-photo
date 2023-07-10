<template>
	<router-link to="/camera">
		<div class="home">
			결제수단을 선택하세요
			<h2>name: {{ $route.query.count }}</h2>
		</div>
	</router-link>
	<!-- <div @click="selectㅏㅏ">sadfsadf</div> -->
</template>

<style>
.home {
	width: 100%;
	height: 100%;
	color: white;
	background-color: #6750a4;
}

h2 {
	color: white;
}
body {
	margin: 0;
}
</style>

<script>
//   // @ is an alias to /src
//   export default {
//     methods: {
//         select: function() {
//             // use bar...
//             navShow = false;
//             console.log(navShow); // returns 'foo'
//         }
//     }
// }
export default {
	name: "payCreditcard",
	mounted() {
		setTimeout(() => this.$router.push("/"), 1800000);
	},
};
</script>
