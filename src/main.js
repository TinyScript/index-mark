import Vue from 'vue';
import VueRouter from 'vue-router';
import ConfigRouter from './router';
import App from './App.vue';
// import common from './sass/common.scss';


Vue.use(VueRouter);

const router = new VueRouter();

ConfigRouter(router);

router.redirect({
	'*': '/' 
});

router.start(App, '#root');