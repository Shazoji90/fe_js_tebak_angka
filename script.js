let maximum = parseInt(prompt("Masukkan nilai maksimal!"));
while (!maximum) {
  maximum = parseInt(prompt("Masukkan nilai maksimal!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Isi tebakan pertama kamu!"));
let attemps = 1;

while (guess !== targetNum) {
  attemps++;
  if (guess > targetNum) {
    guess = parseInt(prompt("Terlalu tinggi! Tebak lagi:"));
  } else {
    guess = parseInt(prompt("Terlalu rendah! Tebak lagi:"));
  }
}

alert(`Selamat Tebakan Anda benar! Dengan percobaan ${attemps} kali.`);
