/**
 * @fileoverview 前端代码
 * @version 0.1.0
 * @license GPL-3.0
 * @author LeafYeeXYZ
 */

(async () => {
  // 获取当前脚本
  const script = document.currentScript

  // 确定是否在 12 小时内访问过
  let unique // 是否唯一访问
  const thisTime = new Date().getTime() // 当前时间
  const lastTime = localStorage.getItem('lastVisitTime') // 上次访问时间

  // 处理本地存储
  if (lastTime) {
    if (thisTime - lastTime < 12 * 60 * 60 * 1000) {
      unique = false
    } else {
      unique = true
      localStorage.setItem('lastVisitTime', thisTime)
    }
  } else {
    unique = true
    localStorage.setItem('lastVisitTime', thisTime)
  }

  // 要发送的数据
  const data = {
    hostname: location.hostname,
    path: location.pathname,
    time: thisTime,
    unique: unique
  }

  // 定义请求链接
  const url = script.dataset.db + '/api?' + new URLSearchParams(data).toString()

  // 发送请求
  const res = await fetch(url).then(res => res.json())

  // 写入页面数据
  const SV = document.querySelector('#SV')
  SV && (SV.innerText = res.SV || '🤔')
  const SUV = document.querySelector('#SUV')
  SUV && (SUV.innerText = res.SUV || '🤔')
  const PV = document.querySelector('#PV')
  PV && (PV.innerText = res.PV || '🤔')
  const PUV = document.querySelector('#PUV')
  PUV && (PUV.innerText = res.PUV || '🤔')
})()
