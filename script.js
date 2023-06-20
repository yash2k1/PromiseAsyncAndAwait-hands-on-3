// //1 Write one example explaining how you can write a callback function.

// // function
// function greet(name, callback) {
//   console.log("Hi" + " " + name);
//   callback();
// }
// // callback function
// function callMe() {
//   console.log("I am callback function");
// }
// // passing function as an argument
// greet("yash", callMe);

//2 Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
let result2 = document.getElementById("result2");
function ques2() {
  result2.innerHTML = "<div>Numbers</div>";
  setTimeout(() => {
    result2.innerHTML += "<div>1</div>";
    setTimeout(() => {
      result2.innerHTML += "<div>2</div>";
      setTimeout(() => {
        result2.innerHTML += "<div>3</div>";
        setTimeout(() => {
          result2.innerHTML += "<div>4</div>";
          setTimeout(() => {
            result2.innerHTML += "<div>5</div>";
            setTimeout(() => {
              result2.innerHTML += "<div>6</div>";
              setTimeout(() => {
                result2.innerHTML += "<div>7</div>";
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

// //  3)
function ques3(){
  let result3=document.getElementById('result3');
  function myPromise(number, timeout) {
    return new Promise((res) => {
      setTimeout(() => {
        console.log(number);
        res("promise is resolved");
      }, timeout);
    });
  }
  myPromise(1,1000)
  .then(()=>myPromise(2,2000))
  .then(()=>myPromise(3,3000))
  .then(()=>myPromise(4,4000))
  .then(()=>myPromise(5,5000))
  .then(()=>myPromise(6,6000))
  .then(()=>myPromise(7,7000))
}


// 4)

function func4() {
  let inputAns4 = document.getElementById("inputAns4").value;
  let ans4 = document.getElementById("ans4");
  let p = "yes";
  function promiseFun(p) {
    return new Promise((res, rej) => {
      if (p === "yes") {
        res("Promise resolved...");
      } else {
        rej("Promise rejected...");
      }
    });
  }
  // handel the promise
  promiseFun(inputAns4)
    .then((item) => {
      ans4.style.color = "lightGreen";
      ans4.innerHTML = item;
    })
    .catch((err) => {
      ans4.style.color = "red";
      ans4.innerHTML = err;
    });
}
// 5)
function sum(a, b) {
  console.log(a + b);
}

function operation(val1, val2, callback) {
  callback(val1, val2);
}

operation(6, 5, sum);
// 6)To cook maggie, there are multiple steps taken one after another, namely:
// Implementing each of these steps in code:
// Get maggie
// add vegies
// boil water
// Cook maggie
// Serve maggie

// function getMaggie(){
//   console.log("get maggie from shop");
//   return  function addVegies(){
//     console.log("cut and add some vegies");

//   }
// }
function func6(){
  let result6=document.getElementById('result6');
  result6.style.color="red";
  setTimeout(() => {
    result6.innerHTML +="<div>get maggie from shop </div>";
    setTimeout(() => {
    result6.innerHTML +="<div>cut and add some vegies</div>";
      setTimeout(() => {
    result6.innerHTML +="<div>boil water </div>";
        setTimeout(() => {
    result6.innerHTML +="<div>cook maggie</div>";
          setTimeout(() => {
    result6.innerHTML +="<div>serve maggie</div>";
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

// // 7)
function func7(){
  let ans7 =document.getElementById('ans7');
  let input7 =document.getElementById('input7');
function promise(p){
  return new Promise((res,rej)=>{
if(p<5){
  res("promise is resolved...");
}else{
  rej("promise is rejected...");
}
})}
// handel the promise 
promise (input7.value)
.then((result)=>{
  ans7.innerHTML= result;
  ans7.style.color="lightGreen";
})
.catch((err)=>{
  console.log(err);
  ans7.innerHTML= err;
  ans7.style.color="red";

})
}

// 8)
// a promise
let promise = new Promise(function (resolve) {
  setTimeout(function () {
  resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {
  try {
      // wait until the promise resolves 
      let result = await promise; 

      console.log(result);
  }   
  catch(error) {
      console.log(error);
  }
}
// calling the async function
asyncFunc(); // Promise resolved

// // 9)
// const promise1 =new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve('promise 1');
//   },1000);
// })
// const promise2 =new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve('promise 2');
//   },4000);
// })
// const promise3 =new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve('promise 3');
//   },2000);
// })
// Promise.all([promise1,promise2,promise3])
// .then ((result)=>{
//   console.log("all promise are fullfiled",result);
// })