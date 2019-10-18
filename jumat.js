//----------------- TUGAS 1 perbandingan angka
/*
function bandingkanAngka(angka1, angka2) {
    if (angka1 < angka2 ) {
        return "true"
    } else if (angka1 == angka2) {
        return "-1"
    } else {
        return "false"
    }
  }
  
  console.log(bandingkanAngka(5, 8)); // true
  console.log(bandingkanAngka(5, 3)); // false
  console.log(bandingkanAngka(4, 4)); // -1
  console.log(bandingkanAngka(3, 3)); // -1
  console.log(bandingkanAngka(17, 2)); // false

*/

//------------- TUGAS 2 balik kata
/*
function balikKata(kata) {
    var penampung = ''
    for (var i = kata.length - 1 ; i >= 0 ; i-- ) {
        penampung += kata[i]
    }
    return penampung
  }
  
 
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS
  */

  //----------- TUGAS 3 konversi menit
  /*
  function konversiMenit(menit) {

    let jam = 0;

    jam = menit / 60;
    jam = Math.floor(jam);
    menit = menit % 60;
    if (menit.toString().length === 1) {
    menit = "0" + menit;
    }

    return `${jam}:${menit}`;
  }
  
  
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
*/

// ------------ TUGAS XO BANGSAT
/*
function xo(str) {
    let x = 0;
    let o = 0;
    
    for (i = str.length - 1; i >= 0; i-- ){
        if (str[i] === "x") {
            x += 1
        } else {
            o += 1
        }
    }

    let hasil = true;
    if (x === o) {
        hasil;
    } else {
        hasil = false;
    }

    return hasil;
  }
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
  */