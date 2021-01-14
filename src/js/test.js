var num = 100
console.log(num)
for (var i = 0; i < 10; i++) {
  console.log(i)
}

// 一段 es6 的语法
let str = 'hello world'

if (true) {
  let str = '你好 世界'
  console.log(str)
}

console.log(str)

const aaa = 100

const fn = () => {
  console.log(this)
}
