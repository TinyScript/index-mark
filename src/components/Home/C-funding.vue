<script type="text/javascript">
	import { isClick, noneAlert } from '../../vuex/actions';
	export default {
		props: ['funding'],
		vuex: {
			actions: {
				isClick,
				noneAlert
			}
		}
	}
</script>

<template>
	<div class="home__compareWrap clearfix">
		<a v-link="{path: '/list'}" class="home__compareTitle none_border" @click="isClick">
			{{ funding.title }}
			<i class="icon iconfont fr"></i>
		</a>
		<ul class="home__fundingProPanel">
			<li v-for="item in funding.list" class="home__fundingProList">
				<!-- :href="item.itemLink" -->
				<a @click="noneAlert" class="home__fundingLinks">
					<div class="home__fundingName container">
						{{ item.name }}
						<div class="home__logo h_bg2">{{ item.platform }}</div>
					</div>
					<div class="home__fundingImg" :style="'background-image: url('+item.imgSrc+')'">
						<div class="home__fundingStatus fStyle2">{{ item.status }}</div>
					</div>
					<div v-if="item.flag == '1'" class="home__fundingDescBox clearfix">
						<div class="home__fundingCate fl">{{ item.title }}</div>
						<div class="home__fundingMoney fl">{{ item.money }}</div><span class="home__unit">{{ item.unit }}</span>
					</div>
					<div v-else class="home__fundingDescBox home__fcMoneyBox clearfix">
						<div class="home__fundingCate fl">7日筹资</div>
						<div class="home__fcWrap fl">
							<div class="home__fcTop">
								<span class="moneyLight">{{ item.abroadMoney }}</span> {{ item.abroadUnit }}
							</div>
							<div class="home__fcDown">
								<span class="moneyLight">{{ item.money }}</span> {{ item.unit }}
							</div>
						</div>
					</div>
				</a>
			</li>
			<!-- <li class="home__fundingShowMore">
				<a href="/index/list" class="home__showMoreLink">更多项目</a>
			</li> -->
		</ul>
	</div>
</template>