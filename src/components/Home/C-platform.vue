<script type="text/javascript">
	import { isClick, noneAlert } from '../../vuex/actions';
	export default {
		props: ['platform'],
		vuex: {
			actions: {
				isClick,
				noneAlert
			}
		}
	}
</script>

<template>
	<div class="home__compareWrap">
		<div class="home__compareTitle none_border">
			{{ platform.title }}<span class="home_compareSubTitle">{{ platform.subTitle }}</span>
		</div>
		<ul class="home__pfCompareBox clearfix">
			<li v-for="item in platform.list" 
				class="pfCompareList mask__website fl" 
				:data-id="item.dataId" 
				@click="noneAlert">
				<img :src="item.imgSrc" class="logoImg">
				<div class="home__pfName searchVal">{{ item.name }}</div>
				<div class="home__pfMoney">{{ item.money }}</div>
			</li>
		</ul>
		<a v-link="{path: '/platform'}" class="home__pfCompareLinks" v-text="platform.linkName" @click="isClick"></a>
	</div>
</template>