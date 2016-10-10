<script type="text/javascript">
	import GkvHeader from './GkvHeader.vue';
	import GkvContent from './GkvContent.vue';
	import Menu from '../Menu.vue';
	export default {
		name: 'Home',
		route: {
			activate: function (transition) {
		      console.log('hook-example activated!')
		      console.log(transition)
		      transition.next()
		    },
		},
		data() {
			return {
				menuShow: false
			}
		},
		vuex: {
			getters: {
				stack: ({router}) => router.stack
			}
		},
		components: {
			'gkv-header': GkvHeader,
			'gkv-content': GkvContent,
			'gkv-menu': Menu
		},
		events: {
			showMenu() {
				this.menuShow == false? (this.menuShow = true) : (this.menuShow = false)
			}
		}
	}
</script>

<template>
	<div id="gkvBox" :transition="stack.pageDir">
		<gkv-header></gkv-header>
		<gkv-content></gkv-content>
		<gkv-menu></gkv-menu>
	</div>
</template>

<style lang="sass" type="text/sass">
	@import "../../sass/common";
	@import "../../sass/homePage";
</style>