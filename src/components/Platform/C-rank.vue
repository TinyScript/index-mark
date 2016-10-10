<script type="text/javascript">
	export default {
		vuex: {
			getters: {
				platform: ({platform}) => platform
			}
		}
	}
</script>

<template>
	<div class="pf__infoHead clearfix">
		<div class="info__infoRank1 bgblue3">
			<div class="info1__title size30">
				<font class="info1__infoName">{{ platform.rankTop.name }}</font>
				<font class="info1__proNum">{{ platform.rankTop.count }}</font>
			</div>
			<div class="info1__totalMoneyBox">
				<font class="info1__totalMoney size80">{{ platform.rankTop.money }}</font> 
				<font class="info1__unit size30">{{ platform.rankTop.unit }}</font>
			</div>
		</div>
		<div class="info__infoRank2Box bgblue2 clearfix">
			<div v-for="item in platform.rank" class="info__infoRank2 fl">
				<div class="info2__infoName size24">{{ item.name }}</div>
				<div class="info2__proNum size20">{{ item.count }}</div>
				<div class="info2__totalMoneyBox">
					<font class="info2__totalMoney size36">{{ item.money }}</font> 
					<font class="info2__unit size24">{{ item.unit }}</font>
				</div>
			</div>
		</div>
	</div>
</template>