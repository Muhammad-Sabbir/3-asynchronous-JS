////Examples1:
// const fs = require('fs');
// const superagent = require('superagent');

// const readFilePro = (file) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) console.log('I could not find any file 😢');
//       resolve(data);
//     });
//   });
// };
// const writeFilePro = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, data, (err) => {
//       if (err) console.log('Could not write file 😢');
//       resolve('success');
//     });
//   });
// };
// const getDogPic = async () => {
//   try {
//     const data = await readFilePro(`${__dirname}/dogg.txt`);
//     console.log(`Breed: ${data}`);
//     const res = await superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     );
//     console.log(res.body.message);
//     await writeFilePro('dog-img.txt', res.body.message);
//     console.log(`Random dog image saved to file`);
//   } catch (err) {
//     console.log(err.message);
//     throw err;
//   }
//   return '2: READY 😑';
// };
// console.log('1: Will get dog pics!');
// getDogPic()
//   .then((x) => {
//     console.log(x);
//     console.log('3: Done getting dog pics!');
//   })
//   .catch((err) => {
//     console.log('Error!!');
//   });

//Example 2
const fs = require('fs');
const superagent = require('superagent');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) console.log('I could not find any file 😢');
      resolve(data);
    });
  });
};
const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) console.log('Could not write file 😢');
      resolve('success');
    });
  });
};
const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);
    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);
    await writeFilePro('dog-img.txt', res.body.message);
    console.log(`Random dog image saved to file`);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
  return '2: READY 😑';
};
(async () => {
  try {
    console.log('1: Will get dog pics!');
    const x = await getDogPic();
    console.log(x);
    console.log('3: Done getting dog pics!');
  } catch (err) {
    console.log('Error!!');
  }
})();
