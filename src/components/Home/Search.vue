<script type="text/javascript">
	// import { isClick } from '../../vuex/actions';
	import { searchIn, searchOut, isClick } from '../../vuex/actions'
	export default {
		vuex: {
			getters: {
				search: ({index}) => index.search
			},
			actions: {
				searchIn,
				searchOut,
				isClick
			}
		},
		methods: {
			goSearch() {
				this.isClick();
				this.$router.go({path: '/search'});
			}
		}
	}
</script>

<template>
	<div class="searchBox-home clearfix" :class="search.searchBox">
		<div class="search__InptBox-home fl">
			<i class="icon iconfont searchIcon-home"></i>
			<input class="search__Inpt-home" 
				   type="search" 
				   name="keyword" 
				   value="" 
				   placeholder="寻找最热硬件" 
				   @focus="searchIn" 
				   @blur="searchOut" 
				   @keyup.enter="goSearch"
				   :class="search.search">
		</div>
		<a v-link="{path: '/search'}" class="search__btn-home fr"
		   :class="search.searchBtn"
		   @click="isClick">搜索</a>
	</div>
</template>
