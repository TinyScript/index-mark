<script type="text/javascript">
	import Platform from './C-platform.vue';
	import Category from './C-category.vue';
	import Funding from './C-funding.vue';
	import Article from './C-article.vue';
	export default {
		vuex: {
			getters: {
				content: ({index}) => index.content
			}
		},
		components: {
			'c-platform': Platform,
			'c-category': Category,
			'c-funding': Funding,
			'c-article': Article
		}
	}
</script>

<template>
	<div id="gkvContent">
		<!-- platform block start -->
		<c-platform :platform="content.platform"></c-platform>
		<!-- platform block end -->
		<!-- process block start -->
		<c-article :article="content.article"></c-article>
		<!-- process block end -->
		<!-- category block start -->
		<c-category :category="content.category"></c-category>
		<!-- category block end -->
		<!-- funding block start -->
		<c-funding :funding="content.funding"></c-funding>
		<!-- funding block end -->
	</div>
</template>