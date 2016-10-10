<script type="text/javascript">
	import Header from '../Header.vue';
	import Search from './Search.vue';

	export default {
		components: {
			'g-header': Header,
			'g-search': Search
		},
		data() {
			return {

			}
		}
	}
</script>

<template>
	<div id="gkvHeader-home">
		<div class="nav-home clearfix">
			<g-header></g-header>
			<div class="nav__titleBox">
				<div class="nav__title">
					<img src="https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/homePage/indexLogo.svg" class="titleLogo">
				</div>
				<div class="nav__desc size28">
					已收录 <span class="size30">18,854</span> 项目
				</div>
			</div>
			<g-search></g-search>
		</div>
	</div>

</template>
