<script type="text/javascript">
	import { isShowMenu, isClick } from '../../vuex/actions';
	export default {
		vuex: {
			getters: {
				list: ({list}) => list
			},
			actions: {
				isShowMenu,
				isClick
			}
		}
	}
</script>

<template>
	<div id="gkvHeader" class="clearfix">
		<div class="nav clearfix">
			<div class="nav__menuBox fl clearfix" @click="isShowMenu">
				<div class="nav__menuIcon fl">
					<i class="icon iconfont"></i>
				</div>
				<div class="nav__menuTitle fl">
					{{ list.activeTitle }}
				</div>
			</div>
			<div class="nav__searchBox fr"
				 @click="isClick"
				 v-link="{path: '/search'}">
				<form action="" method="post">
					<i class="icon iconfont"></i>
					<input class="nav__search" name="keyword" placeholder="搜索">
				</form>
			</div>
		</div>
	</div>
</template>