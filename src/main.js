import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import Camera from "simple-vue-camera";

loadFonts();

createApp(App)
	.use(router)
	.use(vuetify)
	.component("camera", Camera)
	.mount("#app");
