<script type="text/javascript">
	import Header from './Header.vue';
	import List from './List.vue';
	import Footer from '../Footer.vue';
	export default {
		name: 'search',
		vuex: {
			getters: {
				stack: ({router}) => router.stack,
				search: ({search}) => search
			}
		},
		components: {
			's-header': Header,
			's-list': List,
			's-footer': Footer
		}
	}
</script>

<template>
	<div id="gkvBox" :transition="stack.pageDir">
		<div id="gkvSearch" class="searchPage">
			<s-header :search="search"></s-header>
			<s-list :search="search"></s-list>
			<s-footer></s-footer>
		</div>
	</div>
</template>