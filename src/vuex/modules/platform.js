import { CLICK_TABS, CLICK_PLATFORM, PROJECT_TABS } from '../mutation-types';
const state = {
	rankTop: {
		name: 'Kickstarter',
		count: '6,902项目',
		money: '23,43',
		unit: '亿RMB'
	},
	rank: [
		{
			name: '京东众筹',
			count: '2989项目',
			money: '20,58',
			unit: '亿RMB'
		},
		{
			name: '淘宝众筹',
			count: '1847项目',
			money: '14,35',
			unit: '亿RMB'
		},
		{
			name: 'Indiegogo',
			count: '4896项目',
			money: '11,42',
			unit: '亿RMB'
		}
	],
	tabs: {
		platform: {
			'资金变化': ['Kickstarter','京东众筹','淘宝众筹','Indiegogo'],
			'支持人数': ['Kickstarter','京东众筹','淘宝众筹','Indiegogo']
		},
		chartData: {
			'资金变化': {
				'Kickstarter': [742840.53,523144.39,609694.39,1011372.92,1417801.58,1309175.8,740204.62],
				'京东众筹': [1636035,1264181,1432917,4607516,2664416,2791836,2608706],
				'淘宝众筹': [1742101.56,1895752.21,2064079.23,2808343.22,2476338.68,1518558.62,4049866.02],
				'Indiegogo': [1914563.38,1625007.23,1714872.97,2124769.27,2326856.5,1598689.94,1681805.38]
			},
			'支持人数': {
				'Kickstarter': [1691,1061,1098,2061,2323,967,804],
				'京东众筹': [14240,15840,16623,21342,18168,19397,14953],
				'淘宝众筹': [18107,18244,23842,44735,17986,20807,23697],
				'Indiegogo': [1918,1506,1330,1732,2104,1521,1908]
			}
		},
		chartDate: ["08-23","08-24","08-25","08-26","08-27","08-28","08-29"],
		activeTab: '资金变化',
		activePF: 'Kickstarter',
		activeData: [742840.53,523144.39,609694.39,1011372.92,1417801.58,1309175.8,740204.62]
	},
	rules: {
		title: '平台规则',
		tableHeader: ['平台','未达目标','平台收费','支付方式','发起人'],
		tableDesc: [
			{
				name:'京东众筹',
				target:'失败',
				charge: {
					line: '1',
					ratio: ['3%']
				},
				payment: {
					line: '2',
					mode: ['网银','京东支付']
				},
				promoter:['境内']
			},
			{
				name:'淘宝众筹',
				target:'失败',
				charge: {
					line: '1',
					ratio: ['暂无费用']
				},
				payment: {
					line: '2',
					mode: ['网银','支付宝']
				},
				promoter:['境内']
			},
			{
				name:'Kickstarter',
				target:'失败',
				charge: {
					line: '2',
					ratio: ['5%+3%','-5%']
				},
				payment: {
					line: '3',
					mode: ['仅支持通过','Stripe的信用卡']
				},
				promoter:['不支持','中国']
			},
			{
				name:'Indiegogo',
				target:'仍可筹款',
				charge: {
					line: '4',
					ratio: ['5%+3','+25USD','(境外转账)','+30c']
				},
				payment: {
					line: '2',
					mode: ['支持Paypal','/信用卡']
				},
				promoter:['支持','中国']
			}
		]
	},
	project: {
		list: {
			'明星项目': [
				{
					currMoney: 2163184877.71,
					targetMoney: 1844131330.87,
					website:3,
					finishPer:117
				},
				{
					currMoney: 1741325310,
					targetMoney: 302968964,
					website:2,
					finishPer:574
				},
				{
					currMoney: 1170924336.4,
					targetMoney: 98515000,
					website:1,
					finishPer:1188
				},
				{
					currMoney: 1171167687.21,
					targetMoney: 402448829.83,
					website:4,
					finishPer:291
				}
			],
			'一般项目': [
				{
					currMoney: 198112822.09,
					targetMoney: 1193364579.29,
					website:3,
					finishPer:16
				},
				{
					currMoney: 374205562,
					targetMoney: 201916035,
					website:2,
					finishPer:185
				},
				{
					currMoney: 298843759.95,
					targetMoney: 124102775,
					website:1,
					finishPer:240
				},
				{
					currMoney: 5693911.2,
					targetMoney: 86302259814.12,
					website:4,
					finishPer:0
				}
			],
			'小微项目': [
				{
					currMoney: 36224.22,
					targetMoney: 1786330969.97,
					website:3,
					finishPer:0
				},
				{
					currMoney: 12570081,
					targetMoney: 47539230,
					website:2,
					finishPer:26
				},
				{
					currMoney: 14717836.48,
					targetMoney: 18099064,
					website:1,
					finishPer:81
				},
				{
					currMoney: 0,
					targetMoney: 11324893066.81,
					website:4,
					finishPer:0
				}
			]
		},
		standard: [
			'大项目的标准：平台众筹实际金额的前20%',
			'一般项目的标准：平台众筹实际金额中间的60%',
			'小微目的标准：平台众筹实际金额的后20%'
		],
		maxList: [1188,240,81],
		activeTab: '明星项目'
	}
}
const mutations = {
	// p-tabs  tabs页切换
	[CLICK_TABS] (state, _tabs) {
		var tabs = state.tabs;	
		tabs.activeTab = _tabs;
		tabs.activePF = state.rankTop.name;
		tabs.activeData = tabs.chartData[tabs.activeTab][tabs.activePF];
		$('#pf__charts').highcharts().series[0].setData(tabs.activeData)
	},
	// p-tabs  图表切换
	[CLICK_PLATFORM] (state, _platform) {
		var tabs = state.tabs;
		tabs.activePF = _platform;
		tabs.activeData = tabs.chartData[tabs.activeTab][tabs.activePF];
		$('#pf__charts').highcharts().series[0].setData(tabs.activeData)
	},
	// p-project  tabs页切换
	[PROJECT_TABS] (state, _tabs) {
		state.project.activeTab = _tabs;
	}
}

export default {
	state,
	mutations
}