<script type="text/javascript">
	import { clickTabs, clickPlatform } from '../../vuex/actions';
	export default {
		vuex: {
			getters: {
				tabs: ({platform}) => platform.tabs
			},
			actions: {
				clickTabs,
				clickPlatform
			}
		},
		ready() {
			var _self = this;
			setTimeout(function() {
				hcCharts({
					id: 'pf__charts',
					dataName: _self.tabs.chartDate,
					data: _self.tabs.activeData,
					tabName: '',
					xColor: '#999',
					xSize: '14px',
					yColor: '#999',
					x_vTop: 25,
					bgColor: 'transparent'
				})

				document.getElementById('pf__charts').className += ' on';
				
			},600)
		}
	}
</script>

<template>
	<ul class="pf__platformTabs clearfix">
		<li v-for="item in tabs.chartData" 
			class="pf__platformTabsList size28 fl on"
			@click="clickTabs($key)">
			{{ $key }}
			<div class="pf__tabsBottom bgblue2"
				 :class="{hide: $key != tabs.activeTab}">
			</div>
		</li>
	</ul>
	<ul class="pf__subPlatformTabs">
		<li v-for="($partKey, item) in tabs.chartData" 
			class="pf__subPlatformList" 
			:class="{hide: $partKey != tabs.activeTab}">
			<ul class="pf__chartsTabs clearfix">
				<li v-for="subItem in item" class="pf__chartsList fl">
					<div class="pf__chartsListBtn size28"
						 :class="{bgblue3: $partKey==tabs.activeTab&&$key==tabs.activePF}"
						 @click="clickPlatform($key)">
						 	{{ $key }}
					</div>
				</li>
			</ul>
		</li>
	</ul>
	<div class="pf__chartsBox clearfix">
		<div id="pf__charts" class="pf__charts fr">
		</div>
	</div>
</template>