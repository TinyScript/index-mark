<script type="text/javascript">
	export default {
		vuex: {
			getters: {
				rules: ({platform}) => platform.rules
			}
		}
	}
</script>

<template>
	<div class="pf__rulesBox">
		<div class="rules__title container size36">{{ rules.title }}</div>
		<ul class="rules__headBox container size28 clearfix bgblue4">
			<li v-for="item in rules.tableHeader" 
				:class="'rules__items'+$index"
				class="fl">{{ item }}</li>
		</ul>
		<ul class="rules__itemListBox container size28 clearfix">
			<li v-for="item in rules.tableDesc" class="rules__itemList size26">
				<ul class="rules__itemBox">
					<li class="rules__items0 fl">{{item.name}}</li>
					<li class="rules__items1 gray1 fl">{{item.target}}</li>
					<li :class="'lineHeight'+item.charge.line" class="rules__items2 gray1 fl">
						<template v-for="ratio in item.charge.ratio">
							{{ ratio }} <br v-if="$index!=item.charge.ratio.length-1" />
						</template>
					</li>
					<li :class="'lineHeight'+item.payment.line" class="rules__items3 gray1 fl">
						<template v-for="mode in item.payment.mode">
							{{ mode }} <br v-if="$index!=item.payment.mode.length-1"/>
						</template>
					</li>
					<li class="rules__items4 gray1 fl">
						境内
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>