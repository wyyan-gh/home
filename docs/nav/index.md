---
layout: doc
layoutClass: m-nav-layout
sidebar: false
prev: false
next: false
outline: [2,3]
---
<style src="/.vitepress/theme/style/nav.css"></style>

<script setup>
import { NAV_DATA } from '/.vitepress/theme/untils/data'
</script>


# 我的导航
### <Badge type="tip" text="更新时间：2025/03/08" />
<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>