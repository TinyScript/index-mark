<script type="text/javascript">
	import { isShowMenuMore } from '../vuex/actions';
	export default {
		vuex: {
			getters: {
				menu: ({index}) => index.menu
			},
			actions: {
				isShowMenuMore
			}
		}
	}
</script>

<template>
	<div class="gkvMaskAllBox" transition="gkvMenu" v-show="menu.isShowMore">
		<div class="mask__allPfTitle">
			<i class="icon iconfont mask__allReturn size36" @click="isShowMenuMore"></i><span class="size36">全部平台</span>
		</div>
		<ul class="mask__allPfBox container">
			<li class="mask__links mask__website fl bg3" data-id="3"><a href="##" class="mask__linkTxt searchVal">Kickstarter</a></li>
			<li class="mask__links mask__website fl bg4" data-id="4"><a href="##" class="mask__linkTxt searchVal">Indiegogo</a></li>
			<li class="mask__links mask__website fl bg2" data-id="2"><a href="##" class="mask__linkTxt searchVal">京东众筹</a></li>
			<li class="mask__links mask__website fl bg1" data-id="1"><a href="##" class="mask__linkTxt searchVal">淘宝众筹</a></li>
			<li class="mask__links mask__website fl bg5" data-id="5"><a href="##" class="mask__linkTxt searchVal">众筹网</a></li>
			<li class="mask__links mask__website fl bg6" data-id="6"><a href="##" class="mask__linkTxt searchVal">点名时间</a></li>
			<li class="mask__links mask__website fl bg7" data-id="7"><a href="##" class="mask__linkTxt searchVal">苏宁众筹</a></li>
			<li class="mask__links mask__website fl bg8" data-id="8"><a href="##" class="mask__linkTxt searchVal">追梦网</a></li>
			<li class="mask__links mask__website fl bg10" data-id="9"><a href="##" class="mask__linkTxt searchVal">凤凰众筹</a></li>
			<li class="mask__links mask__website fl bg9" data-id="10"><a href="##" class="mask__linkTxt searchVal">青橘众筹</a></li>
			<li class="mask__links mask__website fl bg11" data-id="11"><a href="##" class="mask__linkTxt searchVal">创客星球</a></li>
			<li class="mask__links mask__website fl bg12" data-id="12"><a href="##" class="mask__linkTxt searchVal">九九众筹</a></li>
			<li class="mask__links mask__website fl bg13" data-id="13"><a href="##" class="mask__linkTxt searchVal">平安众筹</a></li>
		</ul>
		<div class="mask__allCateTitle container">
			<span class="size36">全部行业</span>
		</div>
		<ul class="mask__allCateBox container">
			<li class="mask__links mask__website fl bgcolor1" data-id=""><a href="##" class="mask__linkTxt searchVal">全部</a></li>
			<li class="mask__links mask__cate fl" data-id="1"><a href="##" class="mask__linkTxt searchVal">VR/AR</a></li>
			<li class="mask__links mask__cate fl" data-id="2"><a href="##" class="mask__linkTxt searchVal">无人机</a></li>
			<li class="mask__links mask__cate fl" data-id="3"><a href="##" class="mask__linkTxt searchVal">机器人</a></li>
			<li class="mask__links mask__cate fl" data-id="4"><a href="##" class="mask__linkTxt searchVal">智能穿戴</a></li>
			<li class="mask__links mask__cate fl" data-id="5"><a href="##" class="mask__linkTxt searchVal">智能出行</a></li>
			<li class="mask__links mask__cate fl" data-id="6"><a href="##" class="mask__linkTxt searchVal">医疗与保健</a></li>
			<li class="mask__links mask__cate fl" data-id="7"><a href="##" class="mask__linkTxt searchVal">智能母婴</a></li>
			<li class="mask__links mask__cate fl" data-id="8"><a href="##" class="mask__linkTxt searchVal">手机与周边</a></li>
			<li class="mask__links mask__cate fl" data-id="9"><a href="##" class="mask__linkTxt searchVal">环保与净化</a></li>
			<li class="mask__links mask__cate fl" data-id="10"><a href="##" class="mask__linkTxt searchVal">办公增强</a></li>
			<li class="mask__links mask__cate fl" data-id="11"><a href="##" class="mask__linkTxt searchVal">家居与安防</a></li>
			<li class="mask__links mask__cate fl" data-id="14"><a href="##" class="mask__linkTxt searchVal">数码与周边</a></li>
			<li class="mask__links mask__cate fl" data-id="12"><a href="##" class="mask__linkTxt searchVal">创意设计</a></li>
		</ul>
	</div>
</template>