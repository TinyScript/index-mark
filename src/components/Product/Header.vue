<script type="text/javascript">
	import { isShowMenu, isClick, noneAlert } from '../../vuex/actions';
	export default {
		vuex: {
			actions: {
				isShowMenu,
				isClick,
				noneAlert
			}
		},
	}
</script>

<template>
	<div class="descBan__opt container">
		<div class="nav__pMenuBox fl clearfix" @click="isShowMenu">
			<div class="nav__pMenuIcon fl">
				<i class="icon iconfont"></i>
			</div>
		</div>
		<!-- href="/index/center" -->
		<a @click="noneAlert" class="pnc__main pnc__mainLink fr">
			<i class="icon iconfont"></i>
		</a>
		<div class="nav__pSearchBox nav__search fr" 
			 @click="isClick"
			 v-link="{path: '/search'}">
			<i class="icon iconfont"></i>
		</div>
	</div>
</template>