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

## Callbacks

```js
function echo(msg, callback) { 
    setTimeout(()=>{
        callback(msg)
    },2000)
}

function render1(msg){     console.log('CompA',msg) }

echo(1, render1)
echo(2, data => {
     console.log('comp2 ',data)   
})

// console.log(2) 
// VM3643:22 2
// undefined
// VM3643:7 CompA 1
// VM3643:11 comp2  2

```
## Callback hell, callback pyramid 

```js
echo('Ala', res => {
    echo(res + ' ma ', res => {
        echo(res + 'kota', res =>{
            console.log('Comp3 ',res) 
        })
    })
})
// 6sec..
// VM3643:17 Comp3  Ala ma kota
```