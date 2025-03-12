<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 存储随机一言的响应式变量
const randomSaying = ref('');

// 获取随机一言的函数
const getRandomSaying = async () => {
  try {
    // 使用一言 API 获取随机句子
    const response = await fetch('https://v1.hitokoto.cn');
    const data = await response.json();
    // 将获取到的句子赋值给 randomSaying
    randomSaying.value = data.hitokoto;
  } catch (error) {
    console.error('获取随机一言失败:', error);
    // 如果获取失败，显示默认提示
    randomSaying.value = '获取随机一言失败，请稍后重试。';
  }
};

// 组件挂载后调用获取随机一言的函数
onMounted(() => {
  getRandomSaying();
});
</script>

<template>
  <div class="panel">
    <div class="container">
      <section class="grid">
        <!-- 显示随机一言 -->
        <span class="text center-align">
          {{ randomSaying }}
        </span>
      </section>
    </div>
  </div>
</template>

<style scoped>
.panel {
  margin-top: 20px;
  margin-bottom: 10px;
}

.container {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  width: 100%;
  min-height: 40px;
  max-width: 1152px;
  margin-left: auto;
  margin-right: auto;
  /* 添加初始阴影效果，使用可爱的粉色系 */
  box-shadow: 0 4px 8px rgba(255, 192, 203, 0.5); 
  transition: box-shadow 0.3s ease; /* 添加过渡效果 */
}

.container:hover {
  /* 鼠标悬浮时阴影扩散 */
  box-shadow: 0 8px 16px rgba(255, 192, 203, 0.8); 
}

.grid {
  font-weight: 600;
  padding: 10px;
  display: flex;
  justify-content: center; /* 让子元素居中对齐 */
  align-items: center;
}

.text {
  font-size: .875rem;
  line-height: 1.25rem;
}

.center-align {
  text-align: center;
}
</style>