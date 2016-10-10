<script type="text/javascript">
	import { isFocus, isReply } from '../../vuex/actions';
	export default {
		props: ['args'],
		vuex: {
			getters: {
				reply: ({product}) => product.isReply,
				scrollTop: ({product}) => product.replyBoxTop
			},
			actions: {
				isFocus,
				isReply
			}
		},
		methods: {
			clickReply() {
				var replyBox = document.getElementsByClassName('pnc__replyMaskBox')[0];
				this.isReply();
				replyBox.addEventListener('animationend', function() {
					document.getElementsByClassName('pnc__replyTxt')[0].focus();
				})
			},
			setScroll() {
				document.getElementsByClassName('pnc__replyMask')[0].style.top = this.scrollTop + 'px';
				document.body.scrollTop = this.scrollTop;
			}
		},
		ready() {
		}
	}
</script>

<template>
	<div class="desc__replyBox">
		<div class="desc__replyTitle container">全部评论</div>
		<ul class="desc__replyListPanel">
			
		</ul>
		
		<div class="desc__replyBtnBox container clearfix">
			<div class="desc__replyBtn container fl"
				 @click="clickReply">
				<img src="https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/descPage/send_reply.png" class="desc__replyLogo1">
				写评论
			</div>
			<div class="desc__replyImg fl">
				<img src="https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/descPage/reply.png" class="desc__replyLogo2">
			</div>
			<div class="desc__markBox fl" @click="isFocus">
				<img src="https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/descPage/mark1.png" class="desc__mark" :class="{hide:args.isFocus}">
				<img src="https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/descPage/mark2.png" class="desc__mark" :class="{hide:!args.isFocus}">
			</div>
			
		</div>
	</div>
	<div class="pnc__replyMaskBox" transition="gkvMenu" v-show="reply">
		<div class="pnc__replyMask">
			<div class="pnc__replyOpt clearfix">
				<button class="pnc__replyCancel size28 fl" @click="isReply">取消</button>
				<button class="pnc__replyConfirm disabled size28 fl" disabled="disabled">确定</button>
			</div>
			<div class="pnc__replyCxt size28">
				<textarea @focus="setScroll" tabindex="0" name="reply" class="pnc__replyTxt" placeholder="在这里说几句吧"></textarea>
			</div>
		</div>
	</div>
</template>