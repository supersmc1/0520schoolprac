const arr = ['a','b','c']
//console.log(arr)
//arr.shift("b")
//arr.splice(1,2,"c","a")
//console.log(arr)

//arr.splice(-1,2,"c","b")
//console.log(arr)

//arr.shift("b")
//arr.splice(1,2,"a","c")
//console.log(arr)
//----------------------------------------------
/*let temp;
temp = arr[0];
console.log(temp)
arr.shift()
console.log(arr)
arr.push(temp)
console.log(arr)*/
//-------------------------------
//3 혹은 b,a,c 로 바꿀수있을까
let temp
temp = arr[1]
console.log(temp)
arr.shift()
console.log(arr)
//arr.splice(0,3,'b','a','c')
//arr.splice(0,2,'a','c')
arr.splice(0,2,"a","c")
arr.unshift(temp)
console.log(arr)

