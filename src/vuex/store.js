import Vue from 'vue';
import Vuex from 'vuex';
import index from './modules/index';
import router from './modules/router';
import platform from './modules/platform';
import category from './modules/category';
import article from './modules/article';
import list from './modules/list';
import product from './modules/product';
import search from './modules/search';
Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		index,
		router,
		platform,
		category,
		article,
		list,
		product,
		search
	}
})
