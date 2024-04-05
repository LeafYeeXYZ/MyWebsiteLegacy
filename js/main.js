// 有动画的返回顶部 //

// 缓动曲线函数
const cubic = (value) => Math.pow(value, 2)
const easeInOutCubic = (value) => value < 0.5 ?
  cubic(value * 2) / 2 :
  1 - cubic((1 - value) * 2) / 2
function handleClick() {
  // 记录开始时间
  const beginTime = Date.now()
  // 初始位置
  const beginValue = document.documentElement.scrollTop;
  const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16))
  const frameFunc = () => {
    // 进度，xxx ms 内将页面滚动到顶部
    const progress = (Date.now() - beginTime) / 300
    if (progress < 1) {
      // 根据进度修改 scrollTop 的值
      document.documentElement.scrollTop = beginValue * (1 - easeInOutCubic(progress))
      rAF(frameFunc)
    } else {
      document.documentElement.scrollTop = 0
    }
  }
  rAF(frameFunc)
}
document.getElementById('gototop1').addEventListener('click', function(event) {
  event.preventDefault(); // 阻止超链接的默认行为
  handleClick();
});
document.getElementById('gototop2').addEventListener('click', function(event) {
  event.preventDefault(); // 阻止超链接的默认行为
  handleClick();
});

// -------------------------------------------------- //

// 导航栏随滑动改变透明度 //

const element = document.querySelector('#header_navbar');
function changeOpacity() {
  let vh = window.innerHeight;
  let scroll = document.documentElement.scrollTop;
  let percent = scroll / vh;
  let opacity = 0 + (1 * percent);
  opacity = Math.min(Math.max(opacity, 0), 1);
  element.style.opacity = opacity;
}
changeOpacity();
window.addEventListener('scroll', changeOpacity);
// 当鼠标移动到元素上时，设置opacity为1
element.addEventListener('mouseover', function() {
  element.style.opacity = 1;
});
// 当鼠标移出元素时，根据页面滚动的距离设置opacity
element.addEventListener('mouseout', changeOpacity);

// -------------------------------------------------- //

// 阻止右键、F12、选择文本 //

// 阻止右键点击
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
// 阻止 F12
document.addEventListener('keydown', function(e) {
  if(e.key === 'F12') {
      e.preventDefault();
  }
});
// 阻止选择文本
document.addEventListener('selectstart', function(e) {
  e.preventDefault();
});

// -------------------------------------------------- //

// 打字机效果设置 //

const typed = new Typed('#element', {
  strings: ['莫听穿林打叶声，何妨吟啸且徐行', '知善知恶是良知，为善去恶是格物'],
  typeSpeed: 70,
  backSpeed: 35,
  smartBackspace: true,
  loop: true,
  loopCount: Infinity,
  backDelay: 5000, 
  contentType: 'html',
  showCursor: false,
});
const typed2 = new Typed('#element_intro', {
  strings: ['一个心理学专业的大学生<br>一个社会自由主义者<br>喜欢漫画 / 动漫 / BJD<br>喜欢水彩 / 板绘 / 设计<br>喜欢草莓 / 鱿鱼 / 抹茶 / 无骨鸡爪<br>对网络技术 / 编程感兴趣<br>主要使用 JavaScript，自学 Rust 中<br>喜欢可爱的人事物<br>致力于成为优秀的心理咨询师'],
  typeSpeed: 70,
  backSpeed: 35,
  smartBackspace: true,
  loop: false,
  contentType: 'html',
  showCursor: false,
  startDelay: 2000,
});

// -------------------------------------------------- //
