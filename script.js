function stringSplosion(str){
let newStr = ""
for (let i = 0; i < str.length; i++){
    for (let c = 0; c <= i; c++){ //Addig számol amíg el nem ér az indexig, s ismétli a folyamatot.
        newStr += str[c]
    }
}
console.log(newStr)
  }

stringSplosion("Code")