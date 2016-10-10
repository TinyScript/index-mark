<script type="text/javascript">
	import Header from './Header.vue';
	import Content from './Content.vue';
	import Menu from '../Menu.vue';

	export default {
		vuex: {
			getters: {
				stack: ({router}) => router.stack
			}
		},
		components: {
			'l-header': Header,
			'l-content': Content,
			'gkv-menu': Menu
		}
	}

</script>

<template>
	<div id="gkvBox" :transition="stack.pageDir">
		<gkv-menu></gkv-menu>
		<l-header></l-header>
		<l-content></l-content>
	</div>
</template>
