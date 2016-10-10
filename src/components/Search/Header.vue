<script type="text/javascript">
	export default {
		props: ['search'],
		methods: {
			goBack() {
				window.history.go(-1)
			}
		}
	}
</script>

<template>
	<div class="searchBox clearfix">
		<a class="search__return sReturn__btn fl" @click="goBack">
			<i class="icon iconfont"></i>
		</a>
		<a class="search__search fr">搜索</a>
		<div class="search__InptBox fr">
			<i class="icon iconfont searchIcon"></i>
			<input class="search__Inpt" type="text" :value="search.searchVal" placeholder="搜索">
		</div>
	</div>
</template>