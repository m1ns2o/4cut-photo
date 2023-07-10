<template>
	<!-- <v-img
		:width="600"
		aspect-ratio="16/9"
		cover
		src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
	></v-img> -->
	<div class="frame-2">
		<div class="photolayer-2"></div>
		<div class="photolayer-2"></div>
		<div class="photolayer-2"></div>
		<div class="photolayer-2"></div>
	</div>
	<div id="space">--------------------</div>
	<div class="frame-4">
		<div class="floor">
			<div class="photolayer-4"></div>
			<div class="photolayer-4"></div>
		</div>
		<div class="floor">
			<div class="photolayer-4"></div>
			<div class="photolayer-4"></div>
		</div>
	</div>
	<div id="space">--------------------</div>
	<div class="frame-3">
		<div class="photolayer-3"></div>
		<div class="photolayer-3"></div>
		<div class="photolayer-3"></div>
		<div class="photolayer-3"></div>
	</div>
</template>

<style scoped>
.frame-2 {
	background-color: wheat;
	height: 600px;
	width: 200px;
	padding-top: 20px;
	/* display: flex; */
}

.photolayer-2:first-child {
	padding-top: 20px;
}
.photolayer-2 {
	background-color: white;
	width: 180px;
	height: 110px;
	padding-top: 50px;
	margin-bottom: 20px;
	margin-right: 10px;
	margin-left: 10px;
}
#space {
	height: 300px;
}

.frame-4 {
	background-color: wheat;
	height: 600px;
	width: 400px;
	padding-top: 20px;
	/* display: flex; */
}
.floor {
	display: flex;
}

.photolayer-4:first-child {
	padding-top: 20px;
}
.photolayer-4 {
	background-color: white;
	width: 180px;
	height: 250px;
	padding-top: 50px;
	margin-bottom: 20px;
	margin-right: 10px;
	margin-left: 10px;
}

.frame-3 {
	background-color: wheat;
	height: 600px;
	width: 200px;
	padding-top: 20px;
	/* transform: translate(50px, 50%); */
	transform: rotate(-30deg);
	/* display: flex; */
}

.photolayer-3:first-child {
	padding-top: 20px;
}
.photolayer-3 {
	background-color: white;
	width: 180px;
	height: 110px;
	padding-top: 50px;
	margin-bottom: 20px;
	margin-right: 10px;
	margin-left: 10px;
}

/* span {
	background-color: wheat;
	width: 180px;
	height: 100px;
} */
</style>

<script></script>
