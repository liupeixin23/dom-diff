/*
 * @Author: your name
 * @Date: 2021-07-04 22:30:44
 * @LastEditTime: 2022-03-30 17:57:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /dom-diff-master/src/index.js
 */
/**
 * 
 */
import {
  createElement,
  render,
  renderDOM
} from './element'

// import diff from './diff'

import patch from './patch'

let vertualDom1 = createElement('ul', { class: 'list' }, [
  createElement('li', { class: 'item' }, ['a1']),
  createElement('li', { class: 'item' }, ['b2']),
  createElement('li', { class: 'item' }, ['c3'])
])

let vertualDom2 = createElement('ul', { class: 'list' }, [
  createElement('li', { class: 'item' }, ['11']),
  createElement('li', { class: 'item-list' }, ['b']),
  createElement('div', { class: 'item' }, ['33'])
])

console.log(vertualDom2)
// 现在存在的问题：
// 如果平级元素互换会重新渲染
// 新增节点也不会被更新
// 可以通过index来实现换位置和移动

let el = render(vertualDom1)
// 将虚拟DOM转化成真实DOM，并渲染到页面上
renderDOM(el, window.root)
// let patches = diff(vertualDom1, vertualDom2)
let patches = vertualDom1
// console.log(patches)

// 给元素打补丁，重新渲染视图
patch(el, patches)

/*
DOM Diff 比较两个虚拟DOM的区别 即比较两个对象的区别
DOM Diff作用 根据两个虚拟对象创建出补丁对象（patch对象），描述改变的内容，
将这个补丁用来更新DOM，完成页面的重新渲染

DOM Diff三种优化策略
1.同级比较
2.整个删除移动
3.通过key的方式，可复用

算法层面的内容：
差异计算——
采用 先序深度优先遍历
有儿子就继续遍历

*/
