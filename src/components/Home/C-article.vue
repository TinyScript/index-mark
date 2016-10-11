<script type="text/javascript">
	import { isClick, noneAlert } from '../../vuex/actions';
	export default {
		props: ['article'],
		vuex: {
			actions: {
				isClick,
				noneAlert
			}
		}
	}
</script>

<template>
	<div class="home__processWrap">
		<a v-link="{path: '/article'}" 
		   class="home__processLink"
		   @click="isClick">
			<span class="home__processTitle size28" v-text="article.linkName"></span>
		</a>
	</div>
</template>