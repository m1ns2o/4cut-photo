<template>
	<div class="main">
		<h1>수량을 선택해주세요</h1>
		<div class="cardlayout">
			<div class="card" :class="{ active: count2 }" @click="onclick_count2">
				<h1>2장</h1>
				<h3>8000원</h3>
			</div>
			<div class="card" :class="{ active: count4 }" @click="onclick_count4">
				<h1>4장</h1>
				<h3>16000원</h3>
			</div>
			<div class="card" :class="{ active: count6 }" @click="onclick_count6">
				<h1>6장</h1>
				<h3>24000원</h3>
			</div>
			<div class="card" :class="{ active: count8 }" @click="onclick_count8">
				<h1>8장</h1>
				<h3>32000원</h3>
			</div>
		</div>
	</div>
	<nav>
		<!-- <span> &lt; Prev</span>
		<span>Next > </span> -->
		<v-btn variant="outlined" @click="prev"> &lt; prev</v-btn>
		<v-btn variant="tonal" @click="next" :disabled="!count">Next > </v-btn>
	</nav>
</template>

<style scoped>
.main {
	height: 85%;
	text-align: center;
}

.main > h1 {
	padding-top: 50px;

	font-size: 4em;
}

.cardlayout {
	height: 70%;
	/* width: 900px; */
	justify-content: center;
	align-items: center;
	/* flex-wrap: wrap; */
	/* padding-top: 13%; */
	display: flex;
	gap: 40px;
}
nav {
	background-color: cornsilk;
	height: 15%;
	/* padding: 30px; */
	padding-left: 3%;
	padding-right: 3%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

a {
	all: unset;
	display: block;
}
a:hover {
	cursor: pointer;
}

.card {
	width: 300px;
	height: 300px;
	border-radius: 20px;
	background-color: antiquewhite;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	/* border: 4px; */
}

.card.active {
	border: 4px dotted green;
}

.v-btn {
	width: 200px;
	height: 70%;
	border-radius: 100px;
}
</style>

<script>
export default {
	mounted() {
		setTimeout(() => this.$router.push("/"), 1200000);
	},
	data() {
		return {
			count2: false,
			count4: false,
			count6: false,
			count8: false,
			count: 0,
		};
	},
	methods: {
		prev() {
			this.$router.go(-1);
		},
		next() {
			this.$router.push({
				path: "/pay",
				query: { count: this.count },
			});
		},
		onclick_count2() {
			this.count2 = true;
			this.count4 = false;
			this.count6 = false;
			this.count8 = false;
			this.count = 2;
		},
		onclick_count4() {
			this.count2 = false;
			this.count4 = true;
			this.count6 = false;
			this.count8 = false;
			this.count = 4;
		},
		onclick_count6() {
			this.count2 = false;
			this.count4 = false;
			this.count6 = true;
			this.count8 = false;
			this.count = 6;
		},
		onclick_count8() {
			this.count2 = false;
			this.count4 = false;
			this.count6 = false;
			this.count8 = true;
			this.count = 8;
		},
	},
};
</script>
