
var nama = "terkoiz"
var peran = "penyihir"

var log1 = ""
var log2 = ""
var ksatria = ""
var tabib = ""
var penyihir = ""


log1 += "Selamat datang di Dunia Proxytia, " + nama
log2 += "halo " + nama + " pilih peranmu untuk memulai game"
ksatria += "Halo ksatria " + nama + ", kamu dapat menyerang dengan senjatamu"
tabib += "Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka"
penyihir += "Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!"


if(nama == "" ) { 
    console.log("nama harus di isi");
}
else if(nama = null ,peran == "") { 
    console.log(log2);
}  

else if(peran == "ksatria") { 
  console.log(log1);
  console.log(ksatria);
}
else if(peran == "tabib") {
    console.log(log1);
    console.log(tabib);
}
else if (peran == "penyihir"){
  console.log(log1);
  console.log(penyihir);
}
else { 
    console.log("hanya ada peran ksatria , tabib , dan penyihir");
}  