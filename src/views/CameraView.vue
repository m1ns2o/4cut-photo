<template>
	<div>
		<video ref="videoElement" autoplay></video>
		<button @click="captureScreen">화면 캡쳐</button>
		<canvas ref="canvasElement" style="display: none"></canvas>
	</div>
</template>

<script>
export default {
	mounted() {
		this.startWebcam();
	},
	methods: {
		async startWebcam() {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					video: {
						width: { ideal: 4096 },
						height: { ideal: 2160 },
					},
					audio: false,
				});
				this.$refs.videoElement.srcObject = stream;
			} catch (error) {
				console.error("웹캠을 시작할 수 없습니다:", error);
			}
		},
		captureScreen() {
			const video = this.$refs.videoElement;
			const canvas = this.$refs.canvasElement;

			// 비디오 화면을 캔버스에 그립니다.
			canvas.width = video.videoWidth;
			canvas.height = video.videoHeight;
			canvas
				.getContext("2d")
				.drawImage(video, 0, 0, canvas.width, canvas.height);

			// 이미지 데이터를 가져옵니다.
			const imageData = canvas.toDataURL("image/png");
			const link = document.createElement("a");
			console.log("캡쳐된 이미지 데이터:", imageData);
			link.href = imageData;
			link.download = "image.png";

			// 가상 링크를 클릭하여 이미지 다운로드
			link.click();
		},
	},
};
</script>

<!-- <template>
	<div id="contents">
		<div class="camera">
			<video class="video" ref="video" @canplay="playVideo"></video>
			<button id="takephoto" @click="takePhoto">take Photo</button>
		</div>

		<canvas id="canvas" ref="canvas"></canvas>

		<div class="output">
			<img
				class="video"
				id="photo"
				:src="photoSrc"
				alt="The screen capture will appear in this box."
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: "start-video-practice",
	data() {
		return {
			video: null,
			canvas: null,
			photoSrc: null,
			streaming: false,
			height: 1920,
			width: 1080,
			img_aarray: [],
		};
	},
	mounted() {
		this.video = this.$refs.video;
		this.canvas = this.$refs.canvas;
		this.getMediaStream();
		this.clearPhoto();
	},
	methods: {
		getMediaStream() {
			navigator.mediaDevices
				.getUserMedia({
					video: {
						width: { ideal: 4096 },
						height: { ideal: 2160 },
					},
					audio: false,
				})
				.then((stream) => {
					this.video.srcObject = stream;
					this.video.play();
				})
				.catch((err) => {
					console.error(`error occurred : ${err}`);
				});
		},
		playVideo() {
			if (!this.streaming) {
				this.streaming = true;
				this.height =
					(this.video.videoHeight / this.video.videoWidth) * this.width;
				console.log(this.video.height);
				console.log(this.video.width);
				this.video.height = this.height;
				this.video.width = this.width;
				this.canvas.height = this.height;
				this.canvas.width = this.width;
			}
		},
		takePhoto() {
			const context = this.canvas.getContext("2d");
			context.drawImage(this.video, 0, 0, this.width, this.height);

			this.photoSrc = this.canvas.toDataURL("image/png");
			console.log(this.photoSrc);
			this.img_aarray.push(this.photoSrc);
			console.log(this.img_aarray);
			// 이미지 다운로드를 위한 가상 링크 생성
			const link = document.createElement("a");
			link.href = this.photoSrc;
			link.download = "image.png";

			// 가상 링크를 클릭하여 이미지 다운로드
			link.click();
		},
		clearPhoto() {
			const context = this.canvas.getContext("2d");
			context.fillStyle = "#AAA";
			context.fillRect(0, 0, this.width, this.height);

			this.photoSrc = this.canvas.toDataURL("image/png");
		},
		downloadImage() {
			const canvas = this.$refs.canvasElement;
			const imageData = canvas.toDataURL("image/png");

			// 이미지 다운로드를 위한 가상 링크 생성
			const link = document.createElement("a");
			link.href = imageData;
			link.download = "image.png";

			// 가상 링크를 클릭하여 이미지 다운로드
			link.click();
		},
	},
};
</script>

<style scoped>
#video {
	border: 1px solid black;
	box-shadow: 2px 2px 3px black;
	width: 1080px;
	height: 480px;
}

#photo {
	border: 1px solid black;
	box-shadow: 2px 2px 3px black;
	width: 320px;
	height: 240px;
}

#canvas {
	display: none;
}

.camera {
	width: 1080px;
	display: inline-block;
}
</style> -->
