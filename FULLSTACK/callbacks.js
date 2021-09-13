// const test = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('done'), 1000);
// });

// test.then(
//   result => alert(result),
//   error => alert(error)
// )


//---------------------
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve, ms);
  });
}


//--------------------------------------

// const isMomHappy = true;

// // Promise
// const willIGetNewPhone = new Promise((resolve, reject) => {
//         if (isMomHappy) {
//             const phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone); // fulfilled
//         } else {
//             const reason = new Error('mom is not happy');
//             reject(reason); // reject
//         }

//     }
// );

// // call our promise
// const askMom = () => {
//   willIGetNewPhone
//       .then(showOff)
//       .then((fulfilled) => {
//           // yay, you got a new phone
//           console.log(fulfilled);
//            // output: { brand: 'Samsung', color: 'black' }
//       })
//       .catch((error) => {
//           // oops, mom didn't buy it
//           console.log(error.message);
//            // output: 'mom is not happy'
//       });
// };

// askMom();

// const showOff = (phone) => {
//   const message = 'Hey friend, I have a new ' +
//               phone.color + ' ' + phone.brand + ' phone';
//   return Promise.resolve(message);
// };