<script type="text/javascript">
	import { protTabs } from '../../vuex/actions';
	export default {
		props: ['args'],
		vuex: {
			actions: {
				protTabs
			}
		},
		methods: {
			percent(_arg1, _arg2) {
				return (_arg1/_arg2*100).toFixed(3)+'%';
			},
			fourDigit(_num,unit) {
				var strNum = (_num+'').split('.')[0];
				var numLen = strNum.length;
				var subNum = Math.floor(numLen/4);
				var subLen = numLen%4==0?subNum-1:subNum;
				var arrNum = strNum.split('');
				arrNum.length = numLen-subLen*4;
				var endNum = this.formatNum(arrNum.join(''));
				if(unit==true) {
					_num>=10000&&_num<100000000&&(endNum+='万');
					_num>=100000000&&(endNum+='亿');
				}
				return endNum;
			},
			formatNum(_num,unit) {
				var temp = (_num+'').split('').reverse();
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
				}
				return endNum;
			}
		}
	}
</script>

<template>
	<div class="desc__info">
		<ul class="desc__funding container clearfix">
			<li class="desc__fdList fl" v-if="args.currencyId==1">
				<div class="fd__title fd__font">已筹</div>
					<div class="fd__orgMoney size36 fred2 fd__font">{{formatNum(args.currMoney)}} <span class="fred2 money__type">{{args.currencyNick}}</span></div>
			</li>
			<li class="desc__fdList fl" v-else>
				<div class="fd__title fd__font">已筹</div>
					<div class="fd__curMoney size36 fred2 fd__font">{{formatNum(args.currMoneyOrg)}} <span class="fred2 money__type">{{args.currencyNick}}</span></div><br>
					<div class="fd__orgMoney fd__font">{{formatNum(args.currMoney)}} <span class="money__type">CNY</span></div>
			</li>
			<li class="desc__fdList fl" v-if="args.currencyId==1">
				<div class="fd__title fd__font">目标</div>
					<div class="fd__orgMoney size36 fblue2 fd__font">{{formatNum(args.targetMoney)}} <span class="fblue2 money__type">{{args.currencyNick}}</span></div>
			</li>
			<li class="desc__fdList fl" v-else>
				<div class="fd__title fd__font">目标</div>
					<div class="fd__tarMoney size36 fblue2 fd__font">{{args.targetMoneyOrg}} <span class="fblue2 money__type">{{args.currencyNick}}</span></div><br>
					<div class="fd__orgMoney fd__font">{{args.targetMoney}} <span class="money__type">CNY</span></div>
			</li>
		</ul>
		<div class="desc__sponsorBox container">
			<h2 class="desc__sponsor">
				项目发起人：{{ args.personName }}
			</h2>
			<div class="desc__sponsorCxt">
				{{ args.personDesc }}
			</div>
		</div>
	
	
		<div class="desc__compareBox">
			<ul class="desc__compareTabs clearfix">
				<li v-for="item in args.infoTabs" 
					class="desc__compareTabsList size28 fl"
					:class="{on: item == args.activeInfoTab}"
					@click="protTabs(item)">
					{{ item }}
					<div class="desc__cpListBottom green2"></div>
				</li>
			</ul>				
			<div class="desc__compare"
				 :class="{hide:args.activeInfoTab!=='竞争关系'}">
				<ul class="cptRspBox container">
					<li class="cptRsp__list clearfix">
						<div class="cptRsp__title">已筹金额</div>
						<ul class="cptRsp__descBox fl">
							<li class="cptRsp__desclist size28 clearfix">
								<div class="cptRsp__flag f11 fl">
									<i class="icon iconfont size24"></i>
								</div>
								<div class="cptRsp__descInfo fl">本项目筹资</div>
								<div class="cptRsp__descMoneyBox fr">
									<font class="size28">{{fourDigit(args.currMoney,true)}}</font>
									<font class="size24"> CNY</font>
								</div>
							</li>
							<li class="cptRsp__desclist size28 clearfix">
								<div class="cptRsp__flag f12 fl">
									<i class="icon iconfont size24"></i>
								</div>
								<div class="cptRsp__descInfo fl">竞争者平均</div>
								<div class="cptRsp__descMoneyBox fr">
									<font class="size28">{{fourDigit(args.moneyAvg,true)}}</font>
									<font class="size24"> CNY</font>
								</div>
							</li>
							<li class="cptRsp__desclist size28 clearfix">
								<div class="cptRsp__flag f13 fl">
									<i class="icon iconfont size24"></i>
								</div>
								<div class="cptRsp__descInfo fl">竞争者最高</div>
								<div class="cptRsp__descMoneyBox fr">
									<font class="size28">{{fourDigit(args.moneyMax,true)}}</font>
									<font class="size24"> CNY</font>
								</div>
							</li>
						</ul>
						<div class="cptRsp__barPanel fr clearfix">
							<div class="cptRsp__barBox fl">
								<div class="cptRsp__bar bg11" 
									 :style="{height: percent(args.currMoney,args.moneyMax)}"></div>
							</div>
							<div class="cptRsp__barBox fl">
								<div class="cptRsp__bar bg12"
									 :style="{height: percent(args.moneyAvg,args.moneyMax)}"></div>
							</div>
							<div class="cptRsp__barBox fl">
								<div class="cptRsp__bar bg13"></div>
							</div>
						</div>
					</li>
					<li class="cptRsp__list clearfix">
						<div class="cptRsp__title">项目完成率</div>
						<ul class="cptRsp__descBox fl">
							<li class="cptRsp__desclist size28 clearfix">
								<div class="cptRsp__flag f21 fl">
									<i class="icon iconfont size24"></i>
								</div>
								<div class="cptRsp__descInfo fl">本项目完成率</div>
								<div class="cptRsp__descMoneyBox fr">
									<font class="size28">{{formatNum(args.finishPer)}}%</font>
									<!-- <font class="size24"> RMB</font> -->
								</div>
							</li>
							<li class="cptRsp__desclist size28 clearfix">
								<div class="cptRsp__flag f22 fl">
									<i class="icon iconfont size24"></i>
								</div>
								<div class="cptRsp__descInfo fl">竞争者平均</div>
								<div class="cptRsp__descMoneyBox fr">
									<font class="size28">{{formatNum(args.finishAvg)}}%</font>
									<!-- <font class="size24"> RMB</font> -->
								</div>
							</li>
							<li class="cptRsp__desclist size28 clearfix">
								<div class="cptRsp__flag f23 fl">
									<i class="icon iconfont size24"></i>
								</div>
								<div class="cptRsp__descInfo fl">竞争者最高</div>
								<div class="cptRsp__descMoneyBox fr">
									<font class="size28">{{formatNum(args.finishMax)}}%</font>
									<!-- <font class="size24"> RMB</font> -->
								</div>
							</li>
						</ul>
						<div class="cptRsp__barPanel fr clearfix">
							<div class="cptRsp__barBox fl">
								<div class="cptRsp__bar bg21"
									 :style="{height: percent(args.finishPer,args.finishMax)}"></div>
							</div>
							<div class="cptRsp__barBox fl">
								<div class="cptRsp__bar bg22"
									 :style="{height: percent(args.finishAvg,args.finishMax)}"></div>
							</div>
							<div class="cptRsp__barBox fl">
								<div class="cptRsp__bar bg23"></div>
							</div>
						</div>
					</li>
					<li class="cptRsp__list clearfix">
						<div class="cptRsp__title">支持者</div>
						<ul class="cptRsp__descBox fl">
							<li class="cptRsp__desclist size28 clearfix">
								<div class="cptRsp__flag f31 fl">
									<i class="icon iconfont size24"></i>
								</div>
								<div class="cptRsp__descInfo fl">本项目支持人数</div>
								<div class="cptRsp__descMoneyBox fr">
									<font class="size28">{{fourDigit(args.supportPerson,true)}}</font>
								</div>
							</li>
							<li class="cptRsp__desclist size28 clearfix">
								<div class="cptRsp__flag f32 fl">
									<i class="icon iconfont size24"></i>
								</div>
								<div class="cptRsp__descInfo fl">竞争者平均</div>
								<div class="cptRsp__descMoneyBox fr">
									<font class="size28">{{fourDigit(args.supportAvg,true)}}</font>
								</div>
							</li>
							<li class="cptRsp__desclist size28 clearfix">
								<div class="cptRsp__flag f33 fl">
									<i class="icon iconfont size24"></i>
								</div>
								<div class="cptRsp__descInfo fl">竞争者最高</div>
								<div class="cptRsp__descMoneyBox fr">
									<font class="size28">{{fourDigit(args.supportMax,true)}}</font>
								</div>
							</li>
						</ul>
						<div class="cptRsp__barPanel fr clearfix">
							<div class="cptRsp__barBox fl">
								<div class="cptRsp__bar bg31"
									 :style="{height: percent(args.supportPerson,args.supportMax)}"></div>
							</div>
							<div class="cptRsp__barBox fl">
								<div class="cptRsp__bar bg32"
									 :style="{height: percent(args.supportAvg,args.supportMax)}"></div>
							</div>
							<div class="cptRsp__barBox fl">
								<div class="cptRsp__bar bg33"></div>
							</div>
						</div>
					</li>
					<li class="cptRsp__list clearfix">
						<div class="cptRsp__title">人均支持</div>
						<ul class="cptRsp__descBox fl">
							<li class="cptRsp__desclist size28 clearfix">
								<div class="cptRsp__flag f41 fl">
									<i class="icon iconfont size24"></i>
								</div>
								<div class="cptRsp__descInfo fl">本项目人均支持</div>
								<div class="cptRsp__descMoneyBox fr">
									<font class="size28">{{fourDigit(args.averageMoney,true)}}</font>
									<font class="size24"> CNY</font>
								</div>
							</li>
							<li class="cptRsp__desclist size28 clearfix">
								<div class="cptRsp__flag f42 fl">
									<i class="icon iconfont size24"></i>
								</div>
								<div class="cptRsp__descInfo fl">竞争者平均</div>
								<div class="cptRsp__descMoneyBox fr">
									<font class="size28">{{fourDigit(args.averageAvg,true)}}</font>
									<font class="size24"> CNY</font>
								</div>
							</li>
							<li class="cptRsp__desclist size28 clearfix">
								<div class="cptRsp__flag f43 fl">
									<i class="icon iconfont size24"></i>
								</div>
								<div class="cptRsp__descInfo fl">竞争者最高</div>
								<div class="cptRsp__descMoneyBox fr">
									<font class="size28">{{fourDigit(args.averageMax,true)}}</font>
									<font class="size24"> CNY</font>
								</div>
							</li>
						</ul>
						<div class="cptRsp__barPanel fr clearfix">
							<div class="cptRsp__barBox fl">
								<div class="cptRsp__bar bg41"
									 :style="{height: percent(args.averageMoney,args.averageMax)}"></div>
							</div>
							<div class="cptRsp__barBox fl">
								<div class="cptRsp__bar bg42"
									 :style="{height: percent(args.averageAvg,args.averageMax)}"></div>
							</div>
							<div class="cptRsp__barBox fl">
								<div class="cptRsp__bar bg43"></div>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="desc__compare hide"
				 :class="{hide:args.activeInfoTab!=='竞争者'}">
				<ul class="desc__competitorBox">
					<template v-for="item in args.compList">
						<li class="desc__competitorMore size24" 
							v-if="args.order>10&&$index>=9">
								•<br>•<br>•
						</li>
						<li class="desc__competitorList container clearfix"
							:class="{cpt__self: args.order==$index+1||args.order>10}">
							<div class="cpt__No size28 fl">
								<template v-if="$index<9||args.order<=10">{{$index+1}}</template>
								<template v-else>{{args.order}}</template>
							</div>
							<div class="cpt__infoBox fl">
								<div class="cpt__proName size28">
									{{ item.productName }}
								</div>
								<div class="cpt__statusBox clearfix">
									<div class="cpt__status fl clearfix">
										<font class="cpt__statusCnt fl size24">
												{{ item.productStatus }}
										</font>
										<font class="cpt__statusCnt fr size24">
											{{ fourDigit(item.currMoney,true) }}
										</font>
									</div>
									<div class="cpt__ptName fr"
										 :class="'color'+item.website">
										<font class="size24">{{ item.websiteName }}</font>
									</div>
								</div>
							</div>
						</li>
					</template>
				</ul>
			</div>
			<div class="desc__compare hide" 
				 :class="{hide:args.activeInfoTab!=='行业比较'}">
				<a href="##" class="desc__idyTitle container">
					在 <span class="desc__titleLight">{{args.category.categoryName}}</span> 行业中
				</a>
				<ul class="desc__comparePanel">
					<li class="desc__compareList container">
						<div class="desc__compareTitle">
							已筹金额
						</div>
						<div class="desc__compareBarBox">
							<div class="compareBar__common blue1 compareBar__max" style="width: 100%"></div>
							<div class="compareBar__common blue2 compareBar__mode" 
								 :style="{width:  percent(args.categoryStat.moneyMod,args.categoryStat.moneyMax)}"></div>
							<div class="compareBar__common fblue2 compareBar__self" 
								 :style="{width: percent(args.currMoney,args.categoryStat.moneyMax)}">
								<div class="compareBar__selfFlag">
									<i class="icon iconfont"></i>
								</div>
							</div>
						</div>
						<ul class="desc__barExplain">
							<li class="desc__barExplainList clearfix">
								<div class="explain__flag fl fblue2">
									<i class="icon iconfont"></i>
								</div>
								<div class="explain__title fl">本项目筹资</div>
								<div class="explain__data fr">
									{{ fourDigit(args.currMoney,true) }} <span class="explain__unit">CNY</span>
								</div>
							</li>
							<li class="desc__barExplainList clearfix">
								<div class="explain__flag fl fblue2">
									<i class="icon iconfont"></i>
								</div>
								<div class="explain__title fl">同行业一般水平</div>
								<div class="explain__data fr">
									{{ fourDigit(args.categoryStat.moneyMod,true) }} <span class="explain__unit">CNY</span>
								</div>
							</li>
							<li class="desc__barExplainList clearfix">
								<div class="explain__flag fl fblue1">
									<i class="icon iconfont"></i>
								</div>
								<div class="explain__title fl">同行业最高水平</div>
								<div class="explain__data fr">
									{{ fourDigit(args.categoryStat.moneyMax,true) }} <span class="explain__unit">CNY</span>
								</div>
							</li>
						</ul>
					</li>
					<li class="desc__compareList container">
						<div class="desc__compareTitle">
							项目完成率
						</div>
						<div class="desc__compareBarBox">
							<div class="compareBar__common red1 compareBar__max" style="width: 100%"></div>
							<div class="compareBar__common red2 compareBar__mode"
								 :style="{width:  percent(args.categoryStat.finishMod,args.categoryStat.finishMax)}"></div>
							<div class="compareBar__common fred2 compareBar__self"
								 :style="{width:  percent(args.finishPer,args.categoryStat.finishMax)}">
								<div class="compareBar__selfFlag">
									<i class="icon iconfont"></i>
								</div>
							</div>
						</div>
						<ul class="desc__barExplain">
							<li class="desc__barExplainList clearfix">
								<div class="explain__flag fl fred2">
									<i class="icon iconfont"></i>
								</div>
								<div class="explain__title fl">本项目完成率</div>
								<div class="explain__data fr">
									{{ formatNum(args.finishPer) }} <span class="explain__unit">%</span>
								</div>
							</li>
							<li class="desc__barExplainList clearfix">
								<div class="explain__flag fl fred2">
									<i class="icon iconfont"></i>
								</div>
								<div class="explain__title fl">同行业一般水平</div>
								<div class="explain__data fr">
									{{ formatNum(args.categoryStat.finishMod) }} <span class="explain__unit">%</span>
								</div>
							</li>
							<li class="desc__barExplainList clearfix">
								<div class="explain__flag fl fred1">
									<i class="icon iconfont"></i>
								</div>
								<div class="explain__title fl">同行业最高水平</div>
								<div class="explain__data fr">
									{{ formatNum(args.categoryStat.finishMax) }} <span class="explain__unit">%</span>
								</div>
							</li>
						</ul>
					</li>
					<li class="desc__compareList container">
						<div class="desc__compareTitle">
							支持者
						</div>
						<div class="desc__compareBarBox">
							<div class="compareBar__common green1 compareBar__max" style="width: 100%"></div>
							<div class="compareBar__common green2 compareBar__mode"
								 :style="{width:  percent(args.categoryStat.supportMod,args.categoryStat.supportMax)}"></div>
							<div class="compareBar__common fgreen2 compareBar__self"
								 :style="{width:  percent(args.supportPerson,args.categoryStat.supportMax)}">
								<div class="compareBar__selfFlag">
									<i class="icon iconfont"></i>
								</div>
							</div>
						</div>
						<ul class="desc__barExplain">
							<li class="desc__barExplainList clearfix">
								<div class="explain__flag fl fgreen2">
									<i class="icon iconfont"></i>
								</div>
								<div class="explain__title fl">本项目支持人数</div>
								<div class="explain__data fr">
									{{ fourDigit(args.supportPerson, true) }}
								</div>
							</li>
							<li class="desc__barExplainList clearfix">
								<div class="explain__flag fl fgreen2">
									<i class="icon iconfont"></i>
								</div>
								<div class="explain__title fl">同行业一般水平</div>
								<div class="explain__data fr">
									{{ fourDigit(args.categoryStat.supportMod, true) }}
								</div>
							</li>
							<li class="desc__barExplainList clearfix">
								<div class="explain__flag fl fgreen1">
									<i class="icon iconfont"></i>
								</div>
								<div class="explain__title fl">同行业最高水平</div>
								<div class="explain__data fr">
									{{ fourDigit(args.categoryStat.supportMax, true) }}
								</div>
							</li>
						</ul>
					</li>
					<li class="desc__compareList container">
						<div class="desc__compareTitle">
							人均支持
						</div>
						<div class="desc__compareBarBox">
							<div class="compareBar__common yellow1 compareBar__max" style="width: 100%"></div>
							<div class="compareBar__common yellow2 compareBar__mode"
								 :style="{width:  percent(args.categoryStat.capitaMod,args.categoryStat.capitaMax)}"></div>
							<div class="compareBar__common fyellow2 compareBar__self"
								 :style="{width:  percent(args.averageMoney,args.categoryStat.capitaMax)}">
								<div class="compareBar__selfFlag">
									<i class="icon iconfont"></i>
								</div>
							</div>
						</div>
						<ul class="desc__barExplain">
							<li class="desc__barExplainList clearfix">
								<div class="explain__flag fl fyellow2">
									<i class="icon iconfont"></i>
								</div>
								<div class="explain__title fl">本项目人均支持</div>
								<div class="explain__data fr">
									{{ fourDigit(args.averageMoney, true) }} <span class="explain__unit">CNY</span>
								</div>
							</li>
							<li class="desc__barExplainList clearfix">
								<div class="explain__flag fl fyellow2">
									<i class="icon iconfont"></i>
								</div>
								<div class="explain__title fl">同行业一般水平</div>
								<div class="explain__data fr">
									 {{ fourDigit(args.categoryStat.capitaMod, true) }} <span class="explain__unit">CNY</span>
								</div>
							</li>
							<li class="desc__barExplainList clearfix">
								<div class="explain__flag fl fyellow1">
									<i class="icon iconfont"></i>
								</div>
								<div class="explain__title fl">同行业最高水平</div>
								<div class="explain__data fr">
									 {{ fourDigit(args.categoryStat.capitaMax, true) }} <span class="explain__unit">CNY</span>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</div>					
		</div>
	</div>
</template>