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
			'gkv-menu': Menu,
			'c-header': Header,
			'c-content': Content
		}
	}
</script>

<template>
	<div id="gkvBox" :transition="stack.pageDir">
		<gkv-menu></gkv-menu>
		<c-header></c-header>
		<c-content></c-content>
	</div>
</template>

<style lang="sass" type="text/sass">
	@import "../../sass/category";	
</style>