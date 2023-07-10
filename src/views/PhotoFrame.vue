<template>
	<div class="main">
		<h1>프레임을 선택해주세요</h1>
		<div class="cardlayout">
			<div class="card" :class="{ active: frame1 }" @click="onclick_frame1">
				<h1 class="cut">4-CUT</h1>
				<!-- <h3>₩4000</h3> -->
                <!-- <div class="sizedbox"></div> -->
				<div class="frame-2" id="frame2-normal">
					<div class="photolayer-2"></div>
					<div class="photolayer-2"></div>
					<div class="photolayer-2"></div>
					<div class="photolayer-2"></div>
				</div>
				<div class="frame-2" id="frame2-transform">
					<div class="photolayer-2"></div>
					<div class="photolayer-2"></div>
					<div class="photolayer-2"></div>
					<div class="photolayer-2"></div>
				</div>
			</div>
			<div class="card" :class="{ active: frame2 }" @click="onclick_frame2">
				<h1 class="cut">6-CUT</h1>
				<div class="frame-4">
					<div class="floor">
						<div class="photolayer-4"></div>
						<div class="photolayer-4"></div>
					</div>
					<div class="floor">
						<div class="photolayer-4"></div>
						<div class="photolayer-4"></div>
					</div>
					<div class="floor">
						<div class="photolayer-4"></div>
						<div class="photolayer-4"></div>
					</div>
				</div>
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
#frame2-transform {
	transform: rotate(-15deg);
	/* left: 10px; */
	position: absolute;
	/* top: 350px; */
	margin-top: 40px;
	margin-left: -20px;
	/* left: 650px; */
	z-index: 1;
	height: 280px;
}
#frame2-normal {
	transform: rotate(5deg);
	position: relative;
	/* margin-left: 10%; */
	z-index: 2;
	/* margin-top: 20px; */
	margin-left: 40px;
	margin-bottom: 20px;
}
.frame-2 {
	background-color: var(--primary);
	height: 300px;
	width: 100px;
	padding-top: 10px;

	/* top: 100px; */
	/* display: flex; */
}

.photolayer-2:first-child {
	padding-top: 10px;
}
.photolayer-2 {
	background-color: white;
	width: 90%;
	height: 55px;
	padding-top: 25px;
	margin-bottom: 10px;
	margin-right: 5%;
	margin-left: 5%;
}

.frame-4 {
	background-color: var(--primary);
	height: 270px;
	width: 180px;
	padding-top: 20px;
	/* display: flex; */
}
.floor {
	display: flex;
	gap: 5%;
	justify-content: space-around;
}

.photolayer-4:first-child {
	padding-top: 20px;
}
.photolayer-4 {
	background-color: white;
	width: 90%;
	height: 60px;
	padding-top: 50px;
	margin-bottom: 13px;
}

.photolayer-4:nth-child(odd) {
	margin-left: 5%;
}

.photolayer-4:nth-child(even) {
	margin-right: 5%;
}

.main {
	height: 85%;
	text-align: center;
}

.main > h1 {
	padding-top: 50px;

	font-size: 4em;
}

.cut {
    color: white;
    font-size: 3em;
	margin-bottom: 20px;
    /* padding-top: -20px; */
}

.cardlayout {
	height: 70%;
	padding-top: 5%;
	justify-content: center;
	align-items: center;
	display: flex;
	gap: 100px;
}
nav {
	background-color: var(--sub1);
	height: 15%;
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
	width: 480px;
	height: 480px;
	border-radius: 20px;
	background-color: var(--sub1);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	/* position: relative; */
	/* border: 4px; */
}

.card.active {
	border: 10px solid var(--sub2);
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
		setTimeout(() => {
			// this.$router.push("/");
			console.log("settimeout reset");
		}, 50000);
		// vuex 이용 clearTimeout으로 꼭 해제해줘야함 나중에 수정 필수!!!!!!!!
	},
	unmounted() {
		// clearTimeout(timer);
	},
	data() {
		return {
			frame1: false,
			frame2: false,
			count: 0,
		};
	},
	methods: {
		prev() {
			this.$router.go(-1);
		},
		next() {
			this.$router.push({
				path: "/photo",
				// query: { count: this.count },
			});
		},
		onclick_frame1() {
			this.frame1 = true;
			this.frame2 = false;
			this.count = 1;
		},
		onclick_frame2() {
			this.frame1 = false;
			this.frame2 = true;
			this.count = 2;
		},
	},
};
</script>
