<script type="text/javascript">
	import Menu from '../Menu.vue';
	import Header from './Header.vue';
	import Content from './Content.vue';
	import { isShowMenu } from '../../vuex/actions';
	export default {
		vuex: {
			getters: {
				stack: ({router}) => router.stack
			},
			actions: {
				isShowMenu
			}
		},
		components: {
			'a-header': Header,
			'gkv-menu': Menu,
			'a-content': Content
		}
	}
</script>

<template>
	<div id="gkvBox" :transition="stack.pageDir">
		<gkv-menu></gkv-menu>
		<a-header></a-header>
		<a-content></a-content>
	</div>
</template>

<style lang="sass" type="text/sass">
	@import "../../sass/adPage";
</style>