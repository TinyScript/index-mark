<script type="text/javascript">
	import { listTabs, isClick } from '../../vuex/actions';
	export default {
		vuex: {
			getters: {
				list: ({list}) => list
			},
			actions: {
				listTabs,
				isClick
			}
		},
		methods: {
			formatRank(rank) {
				return 'No.'+rank;
			},
			formatNum(_num,unit) {
				var isPoint = (_num+'').indexOf('.');
				var splitArr = (_num+'').split('.');
				var temp = (splitArr[0]+'').split('').reverse();
				var newNum = '',
					endNum = '';
				while(temp.length > 3) {
					newNum += temp.splice(0,3).join('')+','
				}
				newNum += temp.join('');
				endNum = newNum.split('').reverse().join('');
				if(unit==true) {
					_num>=10000&&_num<100000000&&(endNum+='万');
					_num>=100000000&&(endNum+='亿');
					return endNum;
				}
				if(isPoint!=-1) {
					endNum += '.'+splitArr[1];
				}
				return endNum;
			},
			online(time) {
				console.log(time)
				var createDate = new Date(time);
				var nowDate = new Date();
				var gapTime = nowDate.getTime() - time;
				var gapDate = Math.floor(gapTime/1000/60/60/24);
				if(gapDate==0) {
					return '今天上线';
				} else if(gapDate==1) {
					return '昨天上线';
				} else if(gapDate==2) {
					return '前天上线';
				} else {
					return (createDate.getMonth()+1)+'月'+createDate.getDate()+'日上线';
				}

			}
		}
	}
</script>

<template>
	<div id="gkvMainCxt">
		<ul class="navTab clearfix">
			<li v-for="item in list.tabs" 
				class="navTab__list fl"
				:class="{on: list.activeTabs == item}"
				@click="listTabs(item)">
					{{ item }}<span class="navTab__on"></span>
			</li>
		</ul>
		<ul class="itemBox">
			<li v-for="item in list.items[list.activeTitle][list.activeTabs]"
				class="item__list">
				<a v-link="{name:'product', params: {productId: 25638}}" 
				   class="item__links"
				   @click="isClick">
					<div class="item__title">
						{{ item.title }}
					</div>
					<div class="item__imgBox" :style="'background-image: url('+item.img+')'">
						<div class="item__status"
							 :class="'fStyle'+item.status">{{ item.statusTxt }}</div>
					</div>
					<!-- 国内今日已筹 -->
					<div class="item__dailyMoneyBox" v-if="item.currencyId==1">
						今日已筹&nbsp;&nbsp;&nbsp;&nbsp;<span class="size40 moneyLight">{{ formatNum(item.growthMoney) }} </span>&nbsp;&nbsp;{{ item.unit }}
							<div class="item__No fr"
								 :class="'bgcolor'+(item.rank>4?4:item.rank)"
								 v-if="list.activeTabs=='增速榜'">{{ formatRank(item.rank) }}</div>
							<div class="fr"
								 v-if="list.activeTabs=='新上'">{{ online(item.createDate) }}</div>
					</div>
					<!-- 国内今日已筹 -->
					<!-- 国外今日已筹 -->
					<div class="item__dailyMoneyBox item__fcMoneyBox clearfix" v-else>
						<div class="item__fundingStatus fl">今日已筹</div>
						<div class="item__fcWrap fl">
							<div class="item__fcTop"><span class="moneyLight">{{ formatNum(item.growthMoneyOrg) }}</span> {{ item.unit }}</div>
							<div class="item__fcDown"><span class="moneyLight">{{ formatNum(item.growthMoney) }}</span> RMB</div>
						</div>
						<div class="fr">
							<div class="item__No"
								 :class="'bgcolor'+(item.rank>4?4:item.rank)"
								 v-if="list.activeTabs=='增速榜'">{{ formatRank(item.rank) }}</div>
							<div class="fr"
								 v-if="list.activeTabs=='新上'">{{ online(item.createDate) }}</div>
						</div>
					</div>
					<!-- 国外今日已筹 -->
					<ul class="item__descBox clearfix">
						<!-- 项目进度 start -->
						<li class="item__descList fl"
							:class="{end: item.status != 2}"
							v-if="item.foreverStatus==0">
							<div class="item__descTitle">项目进度</div>
							<div class="item__descData">{{ item.finishPer }}%</div>
						</li>
						<!-- 项目进度 end -->
						<!-- 无限众筹 start -->
						<li class="item__descList forer end fl"
							v-if="item.foreverStatus==1">
							<div class="item__descTitle">已筹金额</div> 
							<div class="item__descDataWrap">
								<div class="item__fcTop">
									<div class="item__fcTopChild">
										<span class="size36">{{ formatNum(item.currMoneyOrg) }}</span> {{ item.unit }}
									</div>
								</div>
								<div class="item__fcDown"><span class="size30">{{ formatNum(item.currMoney) }}</span> RMB</div>
							</div>
						</li>
						<!-- 无限众筹 end -->
						<!-- 支持人数 start -->
						<li class="item__descList fl"
							:class="{end: item.status != 2,forer: item.foreverStatus==1}">
							<div class="item__descTitle">支持人数</div>
							<div class="item__descData">{{ formatNum(item.support) }}</div>
						</li>
						<!-- 支持人数 end -->
						<!-- 剩余天数 start -->
						<li class="item__descList fl"
							:class="{hide: item.status != 2}">
							<div class="item__descTitle">剩余天数</div>
							<div class="item__descData">{{ item.remainDay }}</div>
						</li>
						<!-- 支持人数 end -->
					</ul>
				</a>
			</li>
			<li class="item__showMore">
				<button class="item__showBtn">显示更多</button>
			</li>
		</ul>
	</div>
</template>