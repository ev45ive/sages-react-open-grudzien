https://www.youtube.com/watch?v=cCOL7MC4Pl0&ab_channel=JSConf

```ts
searchinput.onkeyup = e => console.log(e.target.value)

console.log(1)

setTimeout(()=>console.log(2), 0) 

Promise.resolve(3).then(console.log)

console.log(4)

start = Date.now()

while(start + 5_000 > Date.now()){}

console.log(5)


// 1
// 4
// 5
// 5 sec...  (while.. blocking)
// 3 // Promise

// a // keyup ...
// ala
// ala 
// ala ma 
// ala ma kot
// ala ma kota

// 2 // SetTimeout 0
```