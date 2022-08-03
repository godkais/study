var i = 0;
while ( i < 10 ) {
  console.log(i)
  i++;
}
var i = 0;
while ( i < 10 ) {
    console.log(i)
    i++;
}
var arr = [1, 2, 3]
for (i of arr){
    console.log(i)
}
var k = {
    a:"abc",
    d:"def"
}

for (var key in k){
    console.log(`${key} : ${k[key]}`)
}