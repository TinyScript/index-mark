<script type="text/javascript">
	import { isShowMenu, isClick } from '../../vuex/actions';
	export default {
		vuex: {
			actions: {
				isShowMenu,
				isClick
			}
		}
	}
</script>

<template>
	<div id="gkvHeader">
		<div class="nav clearfix">
			<div class="nav__menuBox fl clearfix" @click="isShowMenu">
				<div class="nav__menuIcon fl">
					<i class="icon iconfont"></i>
				</div>
				<div class="nav__menuTitle fl">
					众筹百科
				</div>
			</div>
			<div class="nav__searchBox fr"
				 @click="isClick"
				 v-link="{path: '/search'}">
				<i class="icon iconfont"></i>
				<input class="nav__search" name="keyword" placeholder="搜索">
			</div>
		</div>
	</div>
</template>