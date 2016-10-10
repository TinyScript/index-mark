<script type="text/javascript">
	import Banner from './Banner.vue';
	import Status from './Status.vue';
	import Info from './Info.vue';
	import Charts from './Charts.vue';
	import Reply from './Reply.vue';
	import Menu from '../Menu.vue';
	export default {
		vuex: {
			getters: {
				product: ({product}) => product,
				stack: ({router}) => router.stack
			}
		},
		computed: {
			info() {
				return this.product[this.$route.params.productId]
			}
		},
		methods: {

		},
		components: {
			'p-banner': Banner,
			'p-status': Status,
			'p-info': Info,
			'p-charts': Charts,
			'p-reply': Reply,
			'gkv-menu': Menu
		}
	}
</script>

<template>
	<div id="gkvBox" class="desc__gkvBox" :transition="stack.pageDir">
		<gkv-menu></gkv-menu>
		<p-banner :args="info"></p-banner>
		<p-status :args="info"></p-status>
		<p-info :args="info"></p-info>
		<!-- 图表区 start -->
		<p-charts :args="info"></p-charts>
		<!-- 图表区 end -->
		<!-- 评论区 start -->
		<p-reply :args="info"></p-reply>
		<!-- 评论区end -->
	</div>
</template>

<style lang="sass" type="text/css">
	@import "../../sass/descPage"
</style>