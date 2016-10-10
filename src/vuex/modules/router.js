// 页面存储池
import { JUDGE_PATH, IS_CLICK, CLOSE_CLICK } from '../mutation-types';
import index from './index'

const state = {
	stack: {
		page: ['/index'],
		pageDir: 'next'
	},
	pageClick: false
}

const mutations = {
	// 堆栈形式控制前进和后退
	// [JUDGE_PATH] (state, path) {
	// 	path==='/'&&(path='/index');
	// 	var isPath = state.stack.page.lastIndexOf(path)
	// 	if(isPath !== -1) { 
	// 		state.stack.page.length = isPath+1;
	// 		// 设置回退动画的样式
	// 		state.stack.pageDir!='prev'&&(state.stack.pageDir = 'prev');
	// 	} else {
	// 		state.stack.page.push(path);
	// 		// 设置前进的样式
	// 		state.stack.pageDir!='next'&&(state.stack.pageDir = 'next');
	// 	}
	// },
	// 判断是前进还是后退
	[JUDGE_PATH] (state, flag) {
		if(flag === 'next'&&state.pageClick==true) {
			state.stack.pageDir = 'next'
		} else {
			state.stack.pageDir = 'prev'
		}
	},
	// 是否在页面中点击跳转
	[IS_CLICK] (state) {
		index.state.menu.isShow = false;
		state.pageClick = true;
	},
	[CLOSE_CLICK] (state) {
		state.pageClick = false;
	}
}

export default {
	state,
	mutations
}