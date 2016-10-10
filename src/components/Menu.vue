<script type="text/javascript">
	import { isShowMenu, isClick, isShowMenuMore } from '../vuex/actions';
	import menuMore from './MenuMore.vue';
	export default {
		name: 'menu',
		vuex: {
			getters: {
				menu: ({index}) => index.menu
			},
			actions: {
				isShowMenu,
				isClick,
				isShowMenuMore
			}
		},
		components: {
			'more-menu': menuMore
		}
	}
</script>

<template>
	<more-menu></more-menu>
	<div id="gkvMaskBox" transition="gkvMenu" v-show="menu.isShow">
		<dl class="maskWrap">
			<dt class="mask__opt">
				<a class="mask__btn mask__cancel fl" @click="isShowMenu">取消</a>
				<a v-link="{path: '/index'}" class="mask__btn mask__goIndex fr" @click="isClick">首页<i class="icon iconfont"></i></a>
			</dt>
			<dd class="mask__panel">
				<ul class="mask__linksBox clearfix">
					<li class="mask__links mask__firstRow mask__website fl bg3" data-id="3">
						<a href="##" class="mask__linkTxt searchVal">Kickstarter</a>
					</li>
					<li class="mask__links mask__firstRow mask__website fl bg4" data-id="4">
						<a href="##" class="mask__linkTxt searchVal">Indiegogo</a>
					</li>
					<li class="mask__links mask__firstRow mask__website fl bg2" data-id="2">
						<a href="##" class="mask__linkTxt searchVal">京东众筹</a>
					</li>
					<li class="mask__links mask__firstRow mask__website fl bg1" data-id="1">
						<a href="##" class="mask__linkTxt searchVal">淘宝众筹</a>
					</li>
					<li class="mask__links mask__firstRow mask__more fl bg0" 
						data-id=""
						@click="isShowMenuMore">
						<a class="mask__linkTxt searchVal">更多</a>
					</li>
					<li class="mask__links mask__website fl bgcolor1" data-id="">
						<a href="##" class="mask__linkTxt searchVal">全部</a>
					</li>
					<li class="mask__links mask__cate fl" data-id="1">
						<a href="##" class="mask__linkTxt searchVal">VR/AR</a>
					</li>
					<li class="mask__links mask__cate fl" data-id="2">
						<a href="##" class="mask__linkTxt searchVal">无人机</a>
					</li>
					<li class="mask__links mask__cate fl" data-id="3">
						<a href="##" class="mask__linkTxt searchVal">机器人</a>
					</li>
					<li class="mask__links mask__cate fl" data-id="4">
						<a href="##" class="mask__linkTxt searchVal">智能穿戴</a>
					</li>
					<li class="mask__links mask__cate fl" data-id="5">
						<a href="##" class="mask__linkTxt searchVal">智能出行</a>
					</li>
					<li class="mask__links mask__cate fl" data-id="6">
						<a href="##" class="mask__linkTxt searchVal">医疗与保健</a>
					</li>
					<li class="mask__links mask__cate fl" data-id="7">
						<a href="##" class="mask__linkTxt searchVal">智能母婴</a>
					</li>
					<li class="mask__links mask__cate fl" data-id="8">
						<a href="##" class="mask__linkTxt searchVal">手机与周边</a>
					</li>
					<li class="mask__links mask__cate fl" data-id="9">
						<a href="##" class="mask__linkTxt searchVal">环保与净化</a>
					</li>
					<li class="mask__links mask__cate fl" data-id="10">
						<a href="##" class="mask__linkTxt searchVal">办公增强</a>
					</li>
					<li class="mask__links mask__cate fl" data-id="11">
						<a href="##" class="mask__linkTxt searchVal">家居与安防</a>
					</li>
					<li class="mask__links mask__cate fl" data-id="14">
						<a href="##" class="mask__linkTxt searchVal">数码与周边</a>
					</li>
					<li class="mask__links mask__cate fl" data-id="12">
						<a href="##" class="mask__linkTxt searchVal">创意设计</a>
					</li>
				</ul>
			</dd>
		</dl>
	</div>
</template>