<script type="text/javascript">
	import Menu from '../Menu.vue';
	import Header from './Header.vue';
	import Content from './Content.vue';
	import { closeClick } from '../../vuex/actions';
	export default {
		name: 'Platform',
		route: {
			activate: function (transition) {
			  this.closeClick();
			  alert('close success')
		      transition.next()
		    }
		},
		vuex: {
			getters: {
				stack: ({router}) => router.stack
			},
		    actions: {
		    	closeClick
		    }
		},
		components: {
			'p-header': Header,
			'p-content': Content,
			'gkv-menu': Menu
		}
	}
</script>

<template>
	<div id="gkvBox" :transition="stack.pageDir">
		<p-header></p-header>
		<p-content></p-content>
		<gkv-menu></gkv-menu>
	</div>
</template>

<style lang="sass" type="text/sass">
	@import "../../sass/productPage";
	@import "../../sass/platformPage";
</style>