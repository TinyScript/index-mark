<script type="text/javascript">
	import { isClick } from '../../vuex/actions'
	export default {
		props: ['category'],
		vuex: {
			actions: {
				isClick
			}
		}
	}
</script>

<template>
	<div class="home__compareWrap clearfix">
		<a v-link="{path: '/category'}" 
		   class="home__compareTitle"
		   @click="isClick">
			{{ category.title }}
			<i class="icon iconfont fr"></i>
		</a>
		<div v-for="item in category.list" class="home__idyCompareList fl mask__cate" :data-id="item.dataId">
			<div class="home__idyName searchVal">{{ item.name }}</div>
			<div class="home__idyMoney">{{ item.title }}</div>
			<div class="home__idyMoney">{{ item.money }} <span class="unit">{{ item.unit }}</span></div>
		</div>
	</div>
</template>