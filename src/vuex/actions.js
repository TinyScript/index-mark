import { 
	IS_SHOW_MENU, 
	IS_SHOW_MENU_MORE,
	SEARCH_IN, 
	SEARCH_OUT, 
	JUDGE_PATH, 
	IS_CLICK, 
	CLOSE_CLICK, 
	CLICK_TABS,
	CLICK_PLATFORM,
	PROJECT_TABS,
	ARTICLE_TABS,
	LIST_TABS,
	PRODUCT_TABS,
	IS_FOCUS,
	IS_REPLY,
	NONE_ALERT 
} from './mutation-types';

/** common **/
export const isShowMenu = makeAction(IS_SHOW_MENU); // toggle菜单
export const isShowMenuMore = makeAction(IS_SHOW_MENU_MORE); // more菜单

/** home **/
export const searchIn = makeAction(SEARCH_IN); // 搜索框focus动画
export const searchOut = makeAction(SEARCH_OUT); // 搜索框blur动画
export const goPath = makeAction(JUDGE_PATH); // 判断页面是前进还是后退
export const isClick = makeAction(IS_CLICK); // 启动页面点击的flag
export const closeClick = makeAction(CLOSE_CLICK); // 关闭页面点击的flag

/** platform **/
export const clickTabs = makeAction(CLICK_TABS); // p-tabs组件的 点击标签
export const clickPlatform = makeAction(CLICK_PLATFORM); // p-tabs组件的点击平台
export const projectTabs = makeAction(PROJECT_TABS); // p-project模块的tabs

/** article **/
export const artTabs = makeAction(ARTICLE_TABS);

/** list **/
export const listTabs = makeAction(LIST_TABS);

/** product **/
export const protTabs = makeAction(PRODUCT_TABS);
export const isFocus = makeAction(IS_FOCUS);
export const isReply = makeAction(IS_REPLY);

/** NONE_ALERT **/
export const noneAlert = makeAction(NONE_ALERT);

function makeAction(type) {
	return ({dispatch}, ...args) => {dispatch(type, ...args)}
}