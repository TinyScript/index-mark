<script type="text/javascript">
	import { isShowMenu } from '../vuex/actions'
	export default {
		vuex: {
			actions: {
				isShowMenu
			}
		}
	}
</script>

<template>
	<div class="nav__menuBox-home fl clearfix" @click="isShowMenu">
		<div class="nav__menuIcon-home fl">
			<i class="icon iconfont"></i>
		</div>
	</div>
	<a v-link="{path:'center'}" class="pnc__main pnc__mainLink fr">
		<i class="icon iconfont"></i>
	</a>
</template>


