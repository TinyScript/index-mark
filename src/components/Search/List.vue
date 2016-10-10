<script type="text/javascript">
	export default {
		props: ['search'],
		methods: {
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
	<div class="search__title search__searchTitle">
		共 <font class="light">{{search.total}}</font> 个结果
	</div>
	<div class="search__results">
		<ul class="itemBox">
			<li v-for="item in search.list" class="item__list item__listTop">
				<a href="/index/product/24832" class="item__links">
					<div class="item__title item__searchTitle">
						{{{ item.name }}}
						<div class="item__dailyMoneyBox item__searchDailyMoneyBox">
							筹集金额&nbsp;{{ formatNum(item.money) }}&nbsp;RMB
							<span class="fr">{{ item.status }}</span>
						</div>
					</div>
				</a>
			</li>
			<li class="item__showMore">
				<button class="item__searchShowBtn">显示更多</button>
			</li>
		</ul>
	</div>
</template>