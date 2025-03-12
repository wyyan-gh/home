<script setup lang="ts">
import confetti from 'canvas-confetti'
import { inBrowser } from 'vitepress';

if (inBrowser) {
var duration = 3 * 1000;
var animationEnd = Date.now() + duration;
var skew = 1;

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

// 动态生成随机十六进制颜色
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
}

(function frame() {
  var timeLeft = animationEnd - Date.now();
  var ticks = Math.max(200, 500 * (timeLeft / duration));
  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      y: (Math.random() * skew) - 0.2
    },
    colors: [getRandomColor()], // 每次生成独一无二的颜色
    shapes: ['circle'],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4)
  });

  if (timeLeft > 0) {
    requestAnimationFrame(frame);
  }
}());
}
</script>