import {SEARCH_IN, SEARCH_OUT, IS_SHOW_MENU, IS_SHOW_MENU_MORE} from '../mutation-types';
const state = {
	menu: {
		isShow: false,
		isShowMore: false
	},
	// search modules
	search: {
		searchBox: '',
		search: '',
		searchBtn: ''
	},
	content: {
		platform: {
			title: '众筹平台',
			subTitle: '7日资金净增（RMB）',
			list: [
				{
					'dataId': 2,
					'imgSrc': 'https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/platformPage/2.png',
					'name': '京东众筹',
					'money': '2,013万'
				},
				{
					'dataId': 3,
					'imgSrc': 'https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/platformPage/3.png',
					'name': 'Kickstarter',
					'money': '1,390万'
				},
				{
					'dataId': 4,
					'imgSrc': 'https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/platformPage/4.png',
					'name': 'Indiegogo',
					'money': '1,381万'
				},
				{
					'dataId': 1,
					'imgSrc': 'https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/platformPage/1.png',
					'name': '淘宝众筹',
					'money': '1,235万'
				}
			],
			linkName: '平台比较',
		},
		article: {
			linkName: '众筹百科'
		},
		category: {
			title: '行业比较',
			list: [
				{
					dataId: '14',
					name: '数码与周边',
					title: '7日资金',
					money: '1,065万',
					unit: 'RMB'
				},
				{
					dataId: '5',
					name: '智能出行',
					title: '7日资金',
					money: '928万',
					unit: 'RMB'
				},
				{
					dataId: '9',
					name: '环保与净化',
					title: '7日资金',
					money: '451万',
					unit: 'RMB'
				}
			]
		},
		funding: {
			title: '热门项目',
			list: [
				{
					itemLink: '/index/product/22939',
					name: '硕基360°高清智能记录仪',
					platform: '京东众筹',
					imgSrc: '//img30.360buyimg.com/cf/jfs/t3184/269/884813611/64066/2a2621cb/57c1040dN33b53e1e.jpg',
					status: '众筹中',
					title: '7日筹资' ,
					money: '5,546,516',
					unit: 'RMB',
					flag: '1',
					abroadMoney: 0,
					abroadUnit: 'Null'
				},
				{
					itemLink: '/index/product/23205',
					name: 'Sphere - Precision Microphone Modeling System',
					platform: 'Indiegogo',
					imgSrc: 'http://image.suning.cn/uimg/cfs/project/147364318397706378.jpg',
					status: '众筹中',
					title: '7日筹资' ,
					money: '1,240,613',
					unit: 'RMB',
					flag: '0',
					abroadMoney: '188,609',
					abroadUnit: 'USD'
				},
				{
					itemLink: '/index/product/22129',
					name: '霸迪维便携式空气净化器',
					platform: '苏宁众筹',
					imgSrc: '//img30.360buyimg.com/cf/jfs/t3289/109/1029718065/211921/a94c8ef4/57c40d83N139866dc.jpg',
					status: '众筹中',
					title: '7日筹资' ,
					money: '3,926,655',
					unit: 'RMB',
					flag: '1',
					abroadMoney: 0,
					abroadUnit: 'Null'
				}
			]
		}
	}
}

const mutations = {
	[IS_SHOW_MENU] (state) {
		state.menu.isShow == false ? (state.menu.isShow = true) : (state.menu.isShow = false); 
		if(state.menu.isShow) {

		} else {
			
		}
	},
	[IS_SHOW_MENU_MORE] (state) {
		state.menu.isShowMore == false ? (state.menu.isShowMore = true) : (state.menu.isShowMore = false); 
	},
	// search modules
	[SEARCH_IN] (state) {
		state.search.searchBox = 'searchBoxOn'
		state.search.search = 'searchOn'
		state.search.searchBtn = 'searchBtnOn'
	},
	[SEARCH_OUT] (state) {
		state.search.searchBox = 'searchBoxOut'
		state.search.search = 'searchOut'
		state.search.searchBtn = 'searchBtnOut'
	}
}

export default {
	state,
	mutations
}