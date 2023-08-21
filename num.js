function factor(n){
  let result = 1
  for(let i = 2; i<=n; i++) {
    result = result * i
  }
  return result

}

console.log(factor(0))
console.log(factor(1))
console.log(factor(5))