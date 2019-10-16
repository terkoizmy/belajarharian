
//--------- TUGAS 1
/*
var flag = 0

console.log('LOOPING PERTAMA')
while(flag <= 20 ){  
    console.log(flag + ' - I Love Coding' );
    flag += 2;
}

console.log('LOOPING KEDUA')
while(flag > 0) {
    flag -= 2;
    console.log(flag + ' - I Will Become A Fullstak Devoloper');
}

*/

//-------- TUGAS 2
/*
console.log('LOOP PERTAMA')
for(var i = 1 ; i <= 20 ; i++ )
    {
    console.log(i + ' - I Love Coding')
    }
console.log('LOOP KEDUA')
for(var j = 20 ; j >= 1 ; j--){
    console.log(j + ' - I Will Become Fullstak Devoloper')
}
*/

//-------- TUGAS 3
for(var deret = 1; deret <= 100; deret++) {

    if (deret % 2 ){
        console.log(deret + ' Ganjil')
    }else {
        console.log(deret + ' Genap')
    }

}

for(var deret = 0; deret <= 100; deret += 2) {
    if (deret % 3 ){
        console.log('')
    }else {
        console.log(deret + ' kelipatan 3')
    }

}

for(var deret = 0; deret <= 100; deret += 5) {
    if (deret % 6 ){
        console.log('')
    }else {
        console.log(deret + ' kelipatan 6')
    }

}

for(var deret = 0; deret <= 100; deret += 9) {
    if (deret % 10 ){
        console.log('')
    }else {
        console.log(deret + ' kelipatan 10')
    }

}