<script type="text/javascript">
	import { projectTabs } from '../../vuex/actions';
	export default {
		vuex: {
			getters: {
				project: ({platform}) => platform.project
			},
			actions: {
				projectTabs
			}
		},
		methods: {
			formatMoney(money) {
				var temp = (money+'').split('').reverse();
				var newMoney = '',
					endMoney = '';
				while(temp.length > 3) {
					newMoney += temp.splice(0,3).join('')+','
				}
				newMoney += temp.join('');
				endMoney = newMoney.split('').reverse().join('');
				return endMoney;
			}
		}
	}
</script>

<template>
	<div class="pf__projectBox">
		<ul class="pj__tabsListBox clearfix">
			<li v-for="item in project.list"
				class="pj__tabsList size28 fl" 
				:class="{on: $key == project.activeTab}"
				@click="projectTabs($key)">
				{{ $key }}
				<div class="pj__tabsBottom bgblue2"></div>
			</li>
		</ul>
		<ul class="pj__itemsListBox">
			<li v-for="item in project.list"
				class="pj__itemsList"
				:class="{hide: $key != project.activeTab}">
				<ul class="pj__itemsBox container">
					<li v-for="pfDesc in item"
						class="pj__items clearfix">
						<div class="pj__logoBox fl">
							<img :src="'https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/platformPage/'+pfDesc.website+'.png'" alt="" class="pj__logo">
						</div>
						<div class="pj__completionBarBox fl">
							<div class="pj__completionBar">
								<font class="pj__completionCxt size26">
									完成率{{ formatMoney(pfDesc.finishPer) }}%
								</font>
								<div class="pj__currBar bgblue4" style="width:9.789%"></div>
							</div>
						</div>
					</li>
					<li class="pj__itemsFooter size28 gray1">
						{{ project.standard[$index] }}
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>