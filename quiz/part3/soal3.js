// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

for (a = 0; a <= 100 ; a++) {
    if (a % 2 === 0) {
        console.log(`${a} : Genap`); // maka genap
      } else {
        console.log(`${a} : Ganjil`); // maka ganjil
      }
}