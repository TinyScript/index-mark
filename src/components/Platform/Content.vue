<script type="text/javascript">
	import Rank from './C-rank.vue';
	import ChartTabs from './C-chart.vue';
	import Rules from './C-rules.vue';
	import Project from './C-project.vue';
	export default {
		components: {
			'p-rank': Rank,
			'p-tabs': ChartTabs,
			'p-rules': Rules,
			'p-project': Project
		}
	}
</script>

<template>
	<div id="gkvPlatform">
		<!-- head -->
		<p-rank></p-rank>
		<!-- head -->
		<!-- chart tabs -->
		<p-tabs></p-tabs>
		<!-- chart tabs -->
		<!-- rules -->
		<p-rules></p-rules>
		<!-- rules -->
		<!-- project -->
		<p-project></p-project>
		<!-- project -->
	</div>
</template>