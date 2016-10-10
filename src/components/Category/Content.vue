<script type="text/javascript">
	export default {
		vuex: {
			getters: {
				category: ({category}) => category.list
			}
		},
		methods: {
			addNum(num1, num2) {
				var sq1,sq2,m;
				try { sq1 = num1.toString().split(".")[1].length; } 
				catch (e) { sq1 = 0; }
				try { sq2 = num2.toString().split(".")[1].length; } 
				catch (e) { sq2 = 0; }
				m = Math.pow(10,Math.max(sq1, sq2));
				return (num1 * m + num2 * m) / m;
			},
			formatRank(rank) {
				return 'No.'+rank;
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
			},
			fourDigit(_num,unit) {
				var strNum = _num+'';
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
			fourDigitPoint(_num,unit) {
				var strNum = _num+'';
				var numLen = strNum.length;
				var subNum = Math.floor(numLen/4);
				var subLen = numLen%4==0 ? subNum-1 : subNum;
				var arrNum = strNum.split('');
				arrNum.length = numLen - subLen*4;
				var newArrMoney = strNum.split('').slice(arrNum.length,4);
				var pointVal = newArrMoney=='' ? '0' : newArrMoney.length > 2 ? Math.round(newArrMoney.join('')/10)+'':newArrMoney.join('');
				var newPointVal = (+pointVal) / (Math.pow(10,pointVal.length));
				var endNum = this.addNum(+arrNum.join(''), +newPointVal);
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
	<div id="gkvIndustry">
		<ul class="industryBox">
			<li v-for="item in category"
				class="industry__list"> 
				<div class="insdustry__positive mask__cate clearfix" data-id="14">
					<div class="idy__imgBox fl">
						<div class="idy__imgMask searchVal">{{ item.title }}</div>
						<img class="idy__img" :src="item.titleImg">
					</div>
					<div class="idy__descBox fl">
						<div class="idy__titleBox clearfix">
							<div class="idy__title fl">{{ item.descTitle }}</div>
							<div class="idy__No bgcolor1 fl">{{ formatRank(item.topRank) }}</div>
							<i class="icon iconfont fcolor1"></i>
						</div>
						<div class="idy__money">
							<span class="moneyLight">{{ fourDigit(item.topMoney,true) }}</span> <font class="idy__moneyUnit">RMB</font>
						</div>
						<ul class="idy__cxtLeftBox fl">
							<li v-for="subItem in item.subList" class="idy__cxtList">{{ subItem.title }}</li>
						</ul>
						<ul class="idy__cxtMiddleBox fl">
							<li v-for="subItem in item.subList" class="idy__cxtList">	{{ fourDigitPoint(subItem.desc,true) }} <font v-if="$index==0" class="idy__moneyUnit">RMB</font>
							</li>
						</ul>
						<ul class="idy__cxtRightBox fl">
							<li v-for="subItem in item.subList" class="idy__cxtList">
								<div class="idy__No bgcolor1">{{ formatRank(subItem.rank) }}</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="insdustry__mask">
					<div class="insdustry__opposite">
						{{ item.tips }}
					</div>
				</div>
			</li>
			<li class="industry__list"> 
				<div class="insdustry__positive mask__cate clearfix" data-id="14">
					<div class="idy__imgBox fl">
						<div class="idy__imgMask searchVal">数码与周边</div>
						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/14.jpg">
					</div>
					<div class="idy__descBox fl">
						<div class="idy__titleBox clearfix">
							<div class="idy__title fl">七日资金</div>
							<div class="idy__No bgcolor1 fl">No.1</div>
							<i class="icon iconfont fcolor1"></i>
						</div>
						<div class="idy__money">
							<span class="moneyLight">2,720万</span> <font class="idy__moneyUnit">RMB</font>
						</div>
						<ul class="idy__cxtLeftBox fl">
							<li class="idy__cxtList">累计金额</li>
							<li class="idy__cxtList">项目数</li>
							<li class="idy__cxtList">人气</li>
						</ul>
						<ul class="idy__cxtMiddleBox fl">
							<li class="idy__cxtList">11.44亿 <font class="idy__moneyUnit">RMB</font></li>
							<li class="idy__cxtList">2,058</li>
							<li class="idy__cxtList">467万</li>
						</ul>
						<ul class="idy__cxtRightBox fl">
							<li class="idy__cxtList">
								<div class="idy__No bgcolor1">No.1</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor1">No.1</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor1">No.1</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="insdustry__mask">
					<div class="insdustry__opposite">
						电脑/音响/摄影/平板/游戏机/3C设备相关
					</div>
				</div>
			</li>
			<li class="industry__list"> 
				<div class="insdustry__positive mask__cate clearfix" data-id="11">
					<div class="idy__imgBox fl">
						<div class="idy__imgMask searchVal">家居与安防</div>
						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/11.jpg">
					</div>
					<div class="idy__descBox fl">
						<div class="idy__titleBox clearfix">
							<div class="idy__title fl">七日资金</div>
							<div class="idy__No bgcolor2 fl">No.2</div>
							<i class="icon iconfont fcolor1"></i>
						</div>
						<div class="idy__money">
							<span class="moneyLight">1,239万</span> <font class="idy__moneyUnit">RMB</font>
						</div>
						<ul class="idy__cxtLeftBox fl">
							<li class="idy__cxtList">累计金额</li>
							<li class="idy__cxtList">项目数</li>
							<li class="idy__cxtList">人气</li>
						</ul>
						<ul class="idy__cxtMiddleBox fl">
							<li class="idy__cxtList">7.42亿 <font class="idy__moneyUnit">RMB</font></li>
							<li class="idy__cxtList">1,469</li>
							<li class="idy__cxtList">416万</li>
						</ul>
						<ul class="idy__cxtRightBox fl">
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.4</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor3">No.3</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor2">No.2</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="insdustry__mask">
					<div class="insdustry__opposite">
						智能建造/家电/照明/厨卫/绿植/安防相关
					</div>
				</div>
			</li>
			<li class="industry__list"> 
				<div class="insdustry__positive mask__cate clearfix" data-id="5">
					<div class="idy__imgBox fl">
						<div class="idy__imgMask searchVal">智能出行</div>
						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/5.jpg">
					</div>
					<div class="idy__descBox fl">
						<div class="idy__titleBox clearfix">
							<div class="idy__title fl">七日资金</div>
							<div class="idy__No bgcolor3 fl">No.3</div>
							<i class="icon iconfont fcolor1"></i>
						</div>
						<div class="idy__money">
							<span class="moneyLight">671万</span> <font class="idy__moneyUnit">RMB</font>
						</div>
						<ul class="idy__cxtLeftBox fl">
							<li class="idy__cxtList">累计金额</li>
							<li class="idy__cxtList">项目数</li>
							<li class="idy__cxtList">人气</li>
						</ul>
						<ul class="idy__cxtMiddleBox fl">
							<li class="idy__cxtList">7.73亿 <font class="idy__moneyUnit">RMB</font></li>
							<li class="idy__cxtList">758</li>
							<li class="idy__cxtList">273万</li>
						</ul>
						<ul class="idy__cxtRightBox fl">
							<li class="idy__cxtList">
								<div class="idy__No bgcolor2">No.2</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.5</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.4</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="insdustry__mask">
					<div class="insdustry__opposite">
						车载/轮船/飞机/自行车/出行相关
					</div>
				</div>
			</li>
			<li class="industry__list"> 
				<div class="insdustry__positive mask__cate clearfix" data-id="9">
					<div class="idy__imgBox fl">
						<div class="idy__imgMask searchVal">环保与净化</div>
						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/9.jpg">
					</div>
					<div class="idy__descBox fl">
						<div class="idy__titleBox clearfix">
							<div class="idy__title fl">七日资金</div>
							<div class="idy__No bgcolor4 fl">No.4</div>
							<i class="icon iconfont fcolor1"></i>
						</div>
						<div class="idy__money">
							<span class="moneyLight">407万</span> <font class="idy__moneyUnit">RMB</font>
						</div>
						<ul class="idy__cxtLeftBox fl">
							<li class="idy__cxtList">累计金额</li>
							<li class="idy__cxtList">项目数</li>
							<li class="idy__cxtList">人气</li>
						</ul>
						<ul class="idy__cxtMiddleBox fl">
							<li class="idy__cxtList">3.06亿 <font class="idy__moneyUnit">RMB</font></li>
							<li class="idy__cxtList">440</li>
							<li class="idy__cxtList">61万</li>
						</ul>
						<ul class="idy__cxtRightBox fl">
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.6</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.7</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.8</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="insdustry__mask">
					<div class="insdustry__opposite">
						垃圾处理/节能环保/水、空气净化检测相关
					</div>
				</div>
			</li>
			<li class="industry__list"> 
				<div class="insdustry__positive mask__cate clearfix" data-id="8">
					<div class="idy__imgBox fl">
						<div class="idy__imgMask searchVal">手机与周边</div>
						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/8.jpg">
					</div>
					<div class="idy__descBox fl">
						<div class="idy__titleBox clearfix">
							<div class="idy__title fl">七日资金</div>
							<div class="idy__No bgcolor4 fl">No.5</div>
							<i class="icon iconfont fcolor1"></i>
						</div>
						<div class="idy__money">
							<span class="moneyLight">346万</span> <font class="idy__moneyUnit">RMB</font>
						</div>
						<ul class="idy__cxtLeftBox fl">
							<li class="idy__cxtList">累计金额</li>
							<li class="idy__cxtList">项目数</li>
							<li class="idy__cxtList">人气</li>
						</ul>
						<ul class="idy__cxtMiddleBox fl">
							<li class="idy__cxtList">7.61亿 <font class="idy__moneyUnit">RMB</font></li>
							<li class="idy__cxtList">1,648</li>
							<li class="idy__cxtList">314万</li>
						</ul>
						<ul class="idy__cxtRightBox fl">
							<li class="idy__cxtList">
								<div class="idy__No bgcolor3">No.3</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor2">No.2</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor3">No.3</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="insdustry__mask">
					<div class="insdustry__opposite">
						手机/配件周边
					</div>
				</div>
			</li>
			<li class="industry__list"> 
				<div class="insdustry__positive mask__cate clearfix" data-id="3">
					<div class="idy__imgBox fl">
						<div class="idy__imgMask searchVal">机器人</div>
						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/3.jpg">
					</div>
					<div class="idy__descBox fl">
						<div class="idy__titleBox clearfix">
							<div class="idy__title fl">七日资金</div>
							<div class="idy__No bgcolor4 fl">No.6</div>
							<i class="icon iconfont fcolor1"></i>
						</div>
						<div class="idy__money">
							<span class="moneyLight">220万</span> <font class="idy__moneyUnit">RMB</font>
						</div>
						<ul class="idy__cxtLeftBox fl">
							<li class="idy__cxtList">累计金额</li>
							<li class="idy__cxtList">项目数</li>
							<li class="idy__cxtList">人气</li>
						</ul>
						<ul class="idy__cxtMiddleBox fl">
							<li class="idy__cxtList">1.95亿 <font class="idy__moneyUnit">RMB</font></li>
							<li class="idy__cxtList">347</li>
							<li class="idy__cxtList">31万</li>
						</ul>
						<ul class="idy__cxtRightBox fl">
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.10</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.10</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.12</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="insdustry__mask">
					<div class="insdustry__opposite">
						家庭/工业用机器人
					</div>
				</div>
			</li>
			<li class="industry__list"> 
				<div class="insdustry__positive mask__cate clearfix" data-id="1">
					<div class="idy__imgBox fl">
						<div class="idy__imgMask searchVal">VR/AR</div>
						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/1.jpg">
					</div>
					<div class="idy__descBox fl">
						<div class="idy__titleBox clearfix">
							<div class="idy__title fl">七日资金</div>
							<div class="idy__No bgcolor4 fl">No.7</div>
							<i class="icon iconfont fcolor1"></i>
						</div>
						<div class="idy__money">
							<span class="moneyLight">142万</span> <font class="idy__moneyUnit">RMB</font>
						</div>
						<ul class="idy__cxtLeftBox fl">
							<li class="idy__cxtList">累计金额</li>
							<li class="idy__cxtList">项目数</li>
							<li class="idy__cxtList">人气</li>
						</ul>
						<ul class="idy__cxtMiddleBox fl">
							<li class="idy__cxtList">1.40亿 <font class="idy__moneyUnit">RMB</font></li>
							<li class="idy__cxtList">309</li>
							<li class="idy__cxtList">40万</li>
						</ul>
						<ul class="idy__cxtRightBox fl">
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.11</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.11</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.10</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="insdustry__mask">
					<div class="insdustry__opposite">
						虚拟现实/增强现实相关
					</div>
				</div>
			</li>
			<li class="industry__list"> 
				<div class="insdustry__positive mask__cate clearfix" data-id="4">
					<div class="idy__imgBox fl">
						<div class="idy__imgMask searchVal">智能穿戴</div>
						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/4.jpg">
					</div>
					<div class="idy__descBox fl">
						<div class="idy__titleBox clearfix">
							<div class="idy__title fl">七日资金</div>
							<div class="idy__No bgcolor4 fl">No.8</div>
							<i class="icon iconfont fcolor1"></i>
						</div>
						<div class="idy__money">
							<span class="moneyLight">127万</span> <font class="idy__moneyUnit">RMB</font>
						</div>
						<ul class="idy__cxtLeftBox fl">
							<li class="idy__cxtList">累计金额</li>
							<li class="idy__cxtList">项目数</li>
							<li class="idy__cxtList">人气</li>
						</ul>
						<ul class="idy__cxtMiddleBox fl">
							<li class="idy__cxtList">4.34亿 <font class="idy__moneyUnit">RMB</font></li>
							<li class="idy__cxtList">1,068</li>
							<li class="idy__cxtList">160万</li>
						</ul>
						<ul class="idy__cxtRightBox fl">
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.5</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.4</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.5</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="insdustry__mask">
					<div class="insdustry__opposite">
						手环/衣物/配饰/眼镜/头盔/鞋袜/穿戴相关
					</div>
				</div>
			</li>
			<li class="industry__list"> 
				<div class="insdustry__positive mask__cate clearfix" data-id="2">
					<div class="idy__imgBox fl">
						<div class="idy__imgMask searchVal">无人机</div>
						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/2.jpg">
					</div>
					<div class="idy__descBox fl">
						<div class="idy__titleBox clearfix">
							<div class="idy__title fl">七日资金</div>
							<div class="idy__No bgcolor4 fl">No.9</div>
							<i class="icon iconfont fcolor1"></i>
						</div>
						<div class="idy__money">
							<span class="moneyLight">56万</span> <font class="idy__moneyUnit">RMB</font>
						</div>
						<ul class="idy__cxtLeftBox fl">
							<li class="idy__cxtList">累计金额</li>
							<li class="idy__cxtList">项目数</li>
							<li class="idy__cxtList">人气</li>
						</ul>
						<ul class="idy__cxtMiddleBox fl">
							<li class="idy__cxtList">2.12亿 <font class="idy__moneyUnit">RMB</font></li>
							<li class="idy__cxtList">183</li>
							<li class="idy__cxtList">40万</li>
						</ul>
						<ul class="idy__cxtRightBox fl">
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.9</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.12</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.9</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="insdustry__mask">
					<div class="insdustry__opposite">
						无人机相关
					</div>
				</div>
			</li>
			<li class="industry__list"> 
				<div class="insdustry__positive mask__cate clearfix" data-id="10">
					<div class="idy__imgBox fl">
						<div class="idy__imgMask searchVal">办公增强</div>
						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/10.jpg">
					</div>
					<div class="idy__descBox fl">
						<div class="idy__titleBox clearfix">
							<div class="idy__title fl">七日资金</div>
							<div class="idy__No bgcolor4 fl">No.10</div>
							<i class="icon iconfont fcolor1"></i>
						</div>
						<div class="idy__money">
							<span class="moneyLight">34万</span> <font class="idy__moneyUnit">RMB</font>
						</div>
						<ul class="idy__cxtLeftBox fl">
							<li class="idy__cxtList">累计金额</li>
							<li class="idy__cxtList">项目数</li>
							<li class="idy__cxtList">人气</li>
						</ul>
						<ul class="idy__cxtMiddleBox fl">
							<li class="idy__cxtList">2.72亿 <font class="idy__moneyUnit">RMB</font></li>
							<li class="idy__cxtList">359</li>
							<li class="idy__cxtList">39万</li>
						</ul>
						<ul class="idy__cxtRightBox fl">
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.8</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.9</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.11</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="insdustry__mask">
					<div class="insdustry__opposite">
						3D打印/办公/开发板/元器件/智能工具相关
					</div>
				</div>
			</li>
			<li class="industry__list"> 
				<div class="insdustry__positive mask__cate clearfix" data-id="12">
					<div class="idy__imgBox fl">
						<div class="idy__imgMask searchVal">创意设计</div>
						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/12.jpg">
					</div>
					<div class="idy__descBox fl">
						<div class="idy__titleBox clearfix">
							<div class="idy__title fl">七日资金</div>
							<div class="idy__No bgcolor4 fl">No.11</div>
							<i class="icon iconfont fcolor1"></i>
						</div>
						<div class="idy__money">
							<span class="moneyLight">34万</span> <font class="idy__moneyUnit">RMB</font>
						</div>
						<ul class="idy__cxtLeftBox fl">
							<li class="idy__cxtList">累计金额</li>
							<li class="idy__cxtList">项目数</li>
							<li class="idy__cxtList">人气</li>
						</ul>
						<ul class="idy__cxtMiddleBox fl">
							<li class="idy__cxtList">1.33亿 <font class="idy__moneyUnit">RMB</font></li>
							<li class="idy__cxtList">389</li>
							<li class="idy__cxtList">79万</li>
						</ul>
						<ul class="idy__cxtRightBox fl">
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.12</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.8</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.7</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="insdustry__mask">
					<div class="insdustry__opposite">
						创意/设计相关
					</div>
				</div>
			</li>
			<li class="industry__list"> 
				<div class="insdustry__positive mask__cate clearfix" data-id="6">
					<div class="idy__imgBox fl">
						<div class="idy__imgMask searchVal">医疗与保健</div>
						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/6.jpg">
					</div>
					<div class="idy__descBox fl">
						<div class="idy__titleBox clearfix">
							<div class="idy__title fl">七日资金</div>
							<div class="idy__No bgcolor4 fl">No.12</div>
							<i class="icon iconfont fcolor1"></i>
						</div>
						<div class="idy__money">
							<span class="moneyLight">23万</span> <font class="idy__moneyUnit">RMB</font>
						</div>
						<ul class="idy__cxtLeftBox fl">
							<li class="idy__cxtList">累计金额</li>
							<li class="idy__cxtList">项目数</li>
							<li class="idy__cxtList">人气</li>
						</ul>
						<ul class="idy__cxtMiddleBox fl">
							<li class="idy__cxtList">2.98亿 <font class="idy__moneyUnit">RMB</font></li>
							<li class="idy__cxtList">556</li>
							<li class="idy__cxtList">104万</li>
						</ul>
						<ul class="idy__cxtRightBox fl">
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.7</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.6</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.6</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="insdustry__mask">
					<div class="insdustry__opposite">
						医疗/器械/个护/保健相关
					</div>
				</div>
			</li>
			<li class="industry__list"> 
				<div class="insdustry__positive mask__cate clearfix" data-id="7">
					<div class="idy__imgBox fl">
						<div class="idy__imgMask searchVal">智能母婴</div>
						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/7.jpg">
					</div>
					<div class="idy__descBox fl">
						<div class="idy__titleBox clearfix">
							<div class="idy__title fl">七日资金</div>
							<div class="idy__No bgcolor4 fl">No.13</div>
							<i class="icon iconfont fcolor1"></i>
						</div>
						<div class="idy__money">
							<span class="moneyLight">6万</span> <font class="idy__moneyUnit">RMB</font>
						</div>
						<ul class="idy__cxtLeftBox fl">
							<li class="idy__cxtList">累计金额</li>
							<li class="idy__cxtList">项目数</li>
							<li class="idy__cxtList">人气</li>
						</ul>
						<ul class="idy__cxtMiddleBox fl">
							<li class="idy__cxtList">5,322万 <font class="idy__moneyUnit">RMB</font></li>
							<li class="idy__cxtList">144</li>
							<li class="idy__cxtList">24万</li>
						</ul>
						<ul class="idy__cxtRightBox fl">
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.13</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.13</div>
							</li>
							<li class="idy__cxtList">
								<div class="idy__No bgcolor4">No.13</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="insdustry__mask">
					<div class="insdustry__opposite">
						智能玩具/儿童/母婴相关
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>