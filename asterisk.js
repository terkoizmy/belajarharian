//--------- TUGAS 1
/*
var rows1 = 5
for (var i = 0 ; i <= rows1 ; i++ ){
    console.log('*')
}
*/

//--------- TUGAS 2
/*var rows1 = 5
var q = ''
for (var i = 0 ; i <= rows1 ; i++ ){
   
    for (var j = 1 ; j <= rows1 ; j++ ) {
         q += '*'}

    q += '\n'
}
console.log(q)*/

//--------- TUGAS 3
var rows1 = 5
var q = ''
for (var i = 0 ; i <= rows1 ; i++ ){
   
    for (var j = 0 ; j <= i ; j++ ) {
         q += '*'
        }

    q += '\n'
}
console.log(q)