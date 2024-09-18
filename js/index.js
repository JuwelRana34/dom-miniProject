const parent = document.getElementById("parent");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const demotext = document.getElementById('demotext');
const clr = document.getElementById('clr')
btn.addEventListener("click", () => {
  const value = input.value;
  const li = document.createElement("li");
  li.setAttribute("class"," p-3 text-black bg-gray-100 rounded-md my-2 hover:bg-blue-200 transition-all hover:cursor-pointer flex flex-row justify-between")
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "delete";
  deleteBtn.setAttribute('class', 'py-2 px-5 bg-red-400 rounded-md text-white mx-2 hover:bg-red-400 hover:text-red-600 font-semibold font-lg ')

  deleteBtn.addEventListener("click", (e) => {
    // const child = e.target.parentElement;
    e.target.parentNode.parentNode.removeChild(e.target.parentElement);
  });
  li.innerText = value;
  if (value !== "") {
    parent.appendChild(li);
    li.appendChild(deleteBtn);
  }else{
    alert('please add some task')
  }

  input.value = "";

 
});

clr.addEventListener('click',()=>{
   
   console.log(parent.innerHTML = '');
})


// parent.addEventListener( 'click', (e) => {
//      e.target.parentNode.removeChild(e.target)
// } );


// *******************************************************
const list = document.getElementsByClassName('li')
const nodes = Array.from(list); // Use children instead of childNodes and convert to arrayconst nodes = list.childNodes; // Use children instead of childNodes and convert to array


// nodes.forEach((li) => {
//   li.addEventListener('click', (e) => {
//     nodes.forEach((i) => {
//       i.removeAttribute('id');
//       // console.log(i);
//     });
//     e.target.setAttribute('id', 'color');
//   });
// });


for(let li of nodes){
  li.addEventListener('click',function (e){
    for(let item of nodes){
      item.removeAttribute('id')
    }
    e.target.setAttribute('id', 'color')
 
  })
  
}


// ******************************************
const inputCoupon = document.getElementById('inputCoupon')
const show = document.getElementById('show')
let coupon ='50free'
inputCoupon.addEventListener("keyup", ()=>{

  if(inputCoupon.value == coupon){
    
    show.innerText = " 🥳 You have got successfully ✅50% discount"
  }else{
    show.innerText = ""
  }
  
})

// ****************************

const showRsult = document.getElementById('showRsult')
const add = document.getElementById('add')
const cancel = document.getElementById('cancel')
const parent1 = document.getElementById('parent1')

add.addEventListener('click',(e)=>{
  e.stopPropagation();
  let add = showRsult.innerText
  add++
  showRsult.innerText = add
  parent1.style.background ='transparent'
  if (showRsult.innerText > 0) {
    cancel.removeAttribute('disabled')
  }

})
cancel.addEventListener('click',(e)=>{
  e.stopPropagation();
  
  let decries = showRsult.innerText
  if (decries > 0) {
    decries--
   
  }else if(showRsult.innerText == 0){
    cancel.setAttribute("disabled",true)
  }else{
    alert(" please! incries your number")
    
  }
  
  showRsult.innerText = decries
})

parent1.addEventListener('click',()=>{
     add.setAttribute('disable',true)
     cancel.setAttribute('disable',true)
     console.log(add , cancel);
     parent1.style.background = 'red'
     
        
})

console.log(parent1);

// clg for shortly writting console.log(object);
