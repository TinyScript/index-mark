import Index from './components/Home/Index.vue';
import Search from './components/Search/Index.vue';
import List from './components/List/Index.vue';
import Platform from './components/Platform/Index.vue';
import Article from './components/Article/Index.vue';
import Category from './components/Category/Index.vue';
import Center from './components/Center/Center.vue';
import Product from './components/Product/Index.vue';

export default function(router) {
	router.map({
		'/': { component: Index },
		'/index': { component: Index },
		'/search': { component: Search },
		'/list': { component: List },
		'/platform': { component: Platform },
		'/article': { component: Article },
		'/category': { component: Category },
		'/center': { component: Center },
		'/product/:productId': { name:'product', component: Product }
	})
}