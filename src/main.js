// html 就是放 HTML 的
// style 就是放 CSS 的
let html = document.querySelector('#html');  // 通过 css 选择器找到 #demo 元素
let style = document.querySelector('#style')
let string = `/* 你好，我叫TK
* 接下来我要演示我的前端功底
* 首先我要准备一个div
*/
#div1{
  border: 1px solid red;
  width: 200px;
  height: 200px; 
}
/* 接下来我把 div 变成一个八卦图
* 注意看好了
* 首先，把 div 变成一个圆
*/
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/* 八卦是阴阳形成的
* 一黑一白
*/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%,
  rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%,
  rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%; 
  background: radial-gradient(circle, rgba(255,255,255,1) 0%,
    rgba(255,255,255,1) 25%,
    rgba(0,0,0,1) 25%,
    rgba(0,0,0,1) 100%);
}
#div1::after{
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 50%; 
  background: radial-gradient(circle, rgba(0,0,0,1) 0%,
  rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%,
  rgba(255,255,255,1) 100%);
}

`;  // string 使用来保存要展示的结果的
let string2 = ""; // string2 使用来缓存要显示到屏幕上的结果的
console.log(string.length);
let n = 0; 

let step = () => {
  setTimeout(() => {
    // 如何是回车就显示回车，而不是显示多余的尖括号?
    if (string[n] === "\n"){
      // 如果是回车就不照搬
      string2 += "<br>"; // 在 HTML 里回车要表示成 "<br>"换行
    } else if (string[n] === " "){ 
      string2 += "&nbsp;" // 空格就将改成 ‘&nbsp’ 
    } else {
      // 如果不是回车就照搬
      string2 += string[n];
    }

    html.innerHTML = string2; // 得到的结果放到 innerHTML里面
    style.innerHTML = string.substring(0,n);
    window.scrollTo(0,99999);
    html.scrollTo(0,99999);
    if(n < string.length-1){
      // 如果 n 不是最后一个，就继续
      n += 1; 
      step();
    }
  },50);
};
step();