/**
 * Created by zuoqiang on 17-7-18.
 */
// var a = 1;
// var b = 2;
// [a,b] = [b,a];  // a=2  b=1
// [c,d] = [b,a]   // c=1  d=2
// console.log(a);
// console.log(b);
//
// console.log(c);
// console.log(d);

// function f() {
//   return [12,13,14];
// }
//
// [a,b] = f();
//
//
// var o = {a:24,b:23};
// // / console.log(a);
// // console.log(b);
// var {a:bar,b:foo} = o;
//
// obj = o;
//
// ({d= 14,e =45} = {d:19});
// console.log(d);
// console.log(e);

// function test(a,b=5) {
//   console.log(a+b);
// }
//
// test(3);
//
// console.log(test.length);
// const  foo = "outer";
// function bar(func = () => foo) {
//   let foo = 'inner';
//   console.log(func());
// }
//
// bar();

// function  add(...value) {
//   let sum = 0;
//   for(let val of value ) {
//     sum+=val;
//   }
//
//   console.log(sum);
// }


// add(2,3,4,5,6,7);



// const sortTest = (...numbers) => numbers.reverse();
// const arr= sortTest(1,2,3,4,5);
// console.log(arr);
// const f= (x,y) => ({x,y});
//
// const test = f(2,3);
// console.log(test);

// class Hello {
//
//   constructor(width,height) {
//     this.width = width;
//     this.height = height;
//   }
//
//
//   sayHi() {
//     return "Hi";
//   }
//
//   static sayHello() {
//     console.log("hello");
//   }
// }
//
//
// class HellloAgain extends Hello {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
//
//   sayName() {
//     console.log(super.sayHi()+this.name);
//   }
// }
//
// const p1 = new HellloAgain("izqcool");
// p1.sayName();


// class  super constructor  3者之间的关系？
// const id =10;

// const setTimer = () => {
//   console.log("this is" + this);
//   setTimeout(() =>{
//     console.log(this)
//   },1000);
// };

// setTimer();
// setTimer.id = 30;
// setTimer.call({id:20});

// function foo() {
//   console.log(this);
//   setTimeout(() => {
//     console.log(22);
//   }, 100);
// }
//
// var id = 21;
//
// foo.call({ id: 42 });
// foo();



// function Timer() {
//   this.s1 = 0;
//   this.s2 = 0;
//   setInterval(() => this.s1++,1000);
//   setInterval(function(){
//     this.s2++;
//   },1000)
//
// }

// const timer = new Timer();
// setTimeout(()=>{
//   console.log("s1:"+timer.s1);
// },3100);
//
// setTimeout(()=>{
//   console.log("s2:"+timer.s2);
// },3100);
//
// const preloadImage = function (path) {
//   return new Promise(function (resolve, reject) {
//     const image = new Image();
//     image.onload  = resolve;
//     image.onerror = reject;
//     image.src = path;
//   });
// };
// const getPic = preloadImage('data:image/jpeg;base64,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');
// getPic.then(
//   function(data){
//     console.log(data);
//   }
// );

// function timeout(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//     // setTimeout(reject,ms-10);
//   });
// }
//
// async function asyncPrint(value, ms) {
//   await timeout(ms);
//   console.log(value);
// }
//
// asyncPrint('hello world', 1000);

// const test = async (name) => name;
// test("izqcool").then((v)=>console.log(v));

// async function getTitle(url) {
//   let response = await fetch(url);
//   let html = await response.text();
//   return html.match(/<title>([\s\S]+)<\/title>/i)[1];
// }
// getTitle("http://www.izqcool.com");
const lists = [
  {text:1,choose:false},
  {text:2,choose:true},
  {text:3,choose:false},
  {text:4,choose:true},
  {text:5,choose:false},
  {text:6,choose:false}
];

const copyList = lists.map((ele) => {

  
  return [...ele].choose===false?[...ele]:![...ele.choose];
});

console.log(copyList);

