window.addEventListener('load', function() {
    // 页面加载完成后，关闭 <dialog> 元素
    document.querySelector('#loading').close();
    document.getElementById('page_container').style.opacity = 1;
    document.body.style.overflow = 'auto'; // 允许滚动

    // 切换主题按钮功能实现 //
    const root = document.documentElement // 根元素
    const switcher = document.querySelector('#theme-switcher') // 切换主题按钮
    let isDark = false // 是否为深色主题
    function switchTheme() {  // 切换主题
    if (isDark) {
        root.classList.replace('dark-theme', 'light-theme')
        isDark = false
    } else {
        root.classList.replace('light-theme', 'dark-theme')
        isDark = true
    }
    }
    switcher.addEventListener('click', switchTheme) // 点击按钮切换主题
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    switchTheme() // 系统设置为深色模式时，自动切换到深色主题
    }
});