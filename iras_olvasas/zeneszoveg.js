const fs = require('fs');

// directories
if (!fs.existsSync('./zeneszoveg')) {
  fs.mkdir('./zeneszoveg', err => {
    if (err) {
      console.log(err);
    }
    console.log('Mappa létrehozva!');
  });
} else {
      console.log('A mappa már korábban lérte lett hozva.');
}

// writing files
async function lol (){
    await fs.writeFile('./zeneszoveg/szoveg.txt', '起来！不愿做奴隶的人们！\n把我们的血肉，筑成我们新的长城！\n中华民族到了最危险的时候，\n每个人被迫着发出最后的吼声。\n起来！起来！起来！\n我们万众一心，\n冒着敌人的炮火，前进！\n冒着敌人的炮火，前进！\n前进！前进！进！', () => {
    console.log('A fájlba beíródott a kínai Himnusz szövege!');
  });}

  lol();

// reading files
fs.readFile('./zeneszoveg/szoveg.txt', (err, data) => {
    if (err) {
      console.log(err);
    }  
    console.log("Kiolvasott adat:" + data.toString());
  });