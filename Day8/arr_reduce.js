
// let arr1 = [2,3,4,6,8];

// let newArr1 = arr1.reduce( (accumalator, curElem, index, array) => {
//     return accumalator += curElem;
// })

// console.log(newArr1);


// flatten 3d 2d to 1d
let arr2 = [  ['zone1','zone1'],
              ['zone1','zone1'],
              ['zone1','zone1']  ];

              let newArr2 = arr2.reduce( (accumalator, curElem, index, array) => {
                return accumalator.concat(curElem);
            })

            console.log(arr2);