<script type="text/javascript">
	export default {
		props: ['args'],
		ready() {
			var _self = this;
			setTimeout(function() {
				Highcharts.setOptions({
				    lang: {
						rangeSelectorZoom: ''
				    },
				    inputWidth: 120,
				    inputHeight: 80
				});
				doubleCharts({
					id: 'fundingCharts',
					buttons: [{
						type: 'week',
						count: 1.2,
						text: '7天'
					}, {
						type: 'all',
						text: '全部'
					}],
					color: ['#45b7af', '#f9aaae'],
					data: _self.args.moneyList,
					tabName: ['当日净额', '已筹金额']
				});
				doubleCharts({
					id: 'supportCharts',
					buttons: [{
						type: 'week',
						count: 1.2,
						text: '7天'
					}, {
						type: 'all',
						text: '全部'
					}],
					color: ['#45b7af', '#f9aaae'],
					data: _self.args.supportList,
					tabName: ['当日支持人数', '总支持人数']
				});
			},600)
		}
	}
</script>

<template>
	<div class="desc__chartsBox">
		<div id="fundingCharts" class="desc__charts" data-highcharts-chart="0"></div>
		<div id="supportCharts" class="desc__charts" data-highcharts-chart="1"></div>
	</div>
</template>