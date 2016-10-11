<script type="text/javascript">
	import { isShowMenu, noneAlert } from '../vuex/actions'
	export default {
		vuex: {
			actions: {
				isShowMenu,
				noneAlert
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
	<!-- v-link="{path:'center'}"-->
	<a @click="noneAlert" class="pnc__main pnc__mainLink fr">
		<i class="icon iconfont"></i>
	</a>
</template>


