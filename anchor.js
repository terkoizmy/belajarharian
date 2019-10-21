var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
var ttl = []
input.splice(1 , 1  ,'Roman Alamsyah elsharawy') 
input.splice(2 , 1 , 'Provinsi Bandar Lampung')
input.splice(3 , 0 , 'pria')
input.splice(5 , 1 , 'SMA Internasional Metro')

ttl = input[4].split('/')
switch(ttl[1]){
case '05':   { ttl.splice(1 , 1 , 'Mei'); break; }
}
ttl.sort()

input[1].slice(0 , 15)

console.log(ttl.join(" - "))
console.log(ttl)
console.log(input)





// ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"