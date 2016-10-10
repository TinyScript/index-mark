<script type="text/javascript">
	import store from './vuex/store';
	import { goPath, closeClick } from './vuex/actions';
	export default {
		name: 'App',
		store,
		ready() {
			var _self = this;
			window.addEventListener('popstate',function(e) {
				setTimeout(function() {
					var hash = window.location.hash.substring(2);
					// 执行检测方法
					console.log(hash);
					if(_self.router.pageClick) {
						_self.closeClick();
						_self.goPath('next')
					} else {
						_self.goPath('prev')
					}
					alert(1)
				},200)
				// console.log('改前：')
				// console.log(_self.test.ym)
				// // if(hash=='/index') {
				// 	++_self.test.sjs
				// 	if(_self.test.sjs%2 == 0) {
				// 		_self.test.ym = 'dsa'
				// 	} else {
				// 		_self.test.ym = 'asd'
				// 	}

				// // }
				// console.log('改后：')
				// console.log(_self.test.ym)
			}, false)
		},
		vuex: {
			getters: {
				router: ({router}) => router
			},
			actions: {
				goPath,
				closeClick
			}
		}
	}
</script>

<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

