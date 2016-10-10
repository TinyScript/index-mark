<script type="text/javascript">
	import { artTabs } from '../../vuex/actions';
	export default {
		vuex: {
			getters: {
				category: ({article}) => article.category
			},
			actions: {
				artTabs
			}
		}
	}
</script>

<template>
	<div id="gkvAd" class="clearfix">
		<ul class="ad__tabsBox fl">
			<li v-for="item in category.tabs" 
				class="ad__tabsList"
				:class="{on: category.activeTabs == $index}"
				@click="artTabs($index)">
				<div class="ad__tabsImgBox ad__tabsImgBox1"></div>
				<div class="ad__tabsTextBox size30">
					<span class="ad__tabsText">{{ item }}</span>
				</div>
			</li>
		</ul>
		<ul class="ad__contentsBox fl size28">
			<li v-for="item in category.content"
				class="ad__contentsList"
				:class="{hide: category.activeTabs != $index}">
				<dl v-for="panel in item.list" class="ad__subList">
					<dt class="ad__subListTitle ad__typeId" type-id="0">
						{{panel.title}}
					</dt>
					<dd v-for="subItem in panel.article"
						class="ad__subListDesc" :data-id="subItem.pkId">
						<a :href="subItem.link"  class="ad__subListDescText">
							{{ subItem.listTitle }}
						</a>
					</dd>
				</dl>
			</li>
		</ul>
	</div>
</template>