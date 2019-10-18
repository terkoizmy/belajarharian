//--------- TUGAS 1
function shoutOut(){
    var nama = "Hallo Function"
    return  nama
}
console.log(shoutOut())


//--------- TUGAS 2
function calculateMultiply (angkapertama, angkakedua){
    return angkapertama * angkakedua
}



var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);


//--------- TUGAS 3
function processSentence(kata1,kata2,kata3,kata4){
    return "nama saya " +kata1 +", umur saya "+ kata2 +", alamat saya "+ kata3 +", dan saya punya hoby yaitu "+ kata4
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 