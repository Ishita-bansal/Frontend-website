let body = document.querySelector(".body");
//let cart = [];

let addbtn = document.querySelector(".btn");
let uprdiv = document.querySelector(".shop-section");
let cartitemsEl = document.querySelector(".cart-items");
let subtotalEl = document.querySelector(".subtotal");
let x = 0;
// var cartData = [];

let modal = document.querySelector(".mymodal");
let btn = document.querySelector(".addtocartbtn");
let closebtn = document.querySelector(".close");

let array = [{
        id: 0,
        label: "clothes",
        image: "box1_image.jpg",
        price: 800,
        instock:100,
        desc: "see more",
        button: "Add to cart",
    },
    {
        id: 1,
        label: "Health & Personal Care",
        image: "box2_image.jpg",
        price: 2000,
        instock: 43,
        desc: "see more",
        button: "Add to cart",
    },
    {
        id: 2,
        label: "Furniture",
        image: "box3_image.jpg",
        price: 3000,
        instock: 10,
        desc: "see more",
        button: "Add to cart",
    },
    {
        id: 3,
        label: "Mobiles",
        image: "box4_image.jpg",
        price: 50000,
        instock: 5,
        desc: "see more",
        button: "Add to cart",
    },
    {
        id: 4,
        label: "Beauty Products",
        image: "box5_image.jpg",
        price: 1000,
        instock: 4,
        desc: "see more",
        button: "Add to cart",
    },
    {
        id: 5,
        label: "Pet Care",
        image: "box6_image.jpg",
        price: 1000,
        instock: 40,
        desc: "see more",
        button: "Add to cart",
    },
    {
        id: 6,
        label: "New Arrivals in Toys",
        image: "box7_image.jpg",
        price: 500,
        instock: 5,
        desc: "see more",
        button: "Add to cart",
    },
    {
        id: 7,
        label: "Discover Fashion Trends",
        image: "box8_image.jpg",
        price: 700,
        instock: 5,
        desc: "see more",
        button: "Add to cart",
    },
];

array.forEach((data) => {
    let productPage = "";
    switch (data.label) {
        case "clothes":
            productPage = "#";
            break;
        case "Health & Personal Care":
            productPage = "#";
            break;
        case "Furniture":
            productPage = "#";
            break;
        case "Mobiles":
            productPage = "productpage.html";
            break;
        case "Beauty Products":
            productPage = "#";
            break;
        case "Pet Care":
            productPage = "#";
            break;
        case "New Arrivals in Toys":
            productPage = "#";
            break;
        default:
            productPage = "#";
            break;
    }

    let arr = `<div class="box">
           <div class="box-content">
                 <h2>${data.label}</h2>
                <div class="box-img">
                  <img src=${data.image} alt="">
                </div>
              <p>${data.price}</p>  
                <a href="${productPage}" style="text-decoration:none;"> ${data.desc}</a>
                 <button class="btn" onclick="add(${data.id})">${data.button}</button>
           </div>
       `;
    uprdiv.innerHTML += arr;
});

//     let arr = `<div class="box">
//            <div class="box-content">
//                  <h2>${data.label}</h2>
//                 <div class="box-img">
//                   <img src=${data.image} alt="">
//                 </div>
//               <p>${data.price}</p>
//                 <a href="${productPage}" style="text-decoration:none;"> ${data.desc}</a>
//                  <button class="btn" onclick="add('${array.indexOf(data)}')">${data.button}</button>
//            </div>
//        `
//        uprdiv.innerHTML += arr;
// });

let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

function add(id) {
    // check if product already exist in cart
    if (cart.some((item) => item.id === id)) {
       changeNumberOfUnits("plus",id);
    } else {
        const item = array.find((data) => data.id === id);
        modal.style.display = "block";
        cart.push({
            ...item,
            numberofunits: 1,
        });
    }
    updateCart();
}

function updateCart() {
    rendercartitems();
    renderSubtotal();

    // save cart to local storage
    localStorage.setItem("CART",JSON.stringify(cart));
}


function renderSubtotal(){
    let totalPrice=0 , 
    totalItems=0;
    cart.forEach((item)=>{
        totalPrice += item.price * item.numberofunits;
        totalItems += item.numberofunits;
    });
    subtotalEl.innerHTML = `
    Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}
    `;
    document.getElementById("c").innerText = totalItems;

}

function rendercartitems() {
    cartitemsEl.innerHTML = "";
    cart.forEach((item) => {
        cartitemsEl.innerHTML += `
    <div class="cart-item">
       <div class="item-info" onclick="removeitemfromcart(${item.id})">
           <img src="${item.image}" alt="${item.label}">
          
       </div>
       <div class="unit-price">
       <h4>${item.label}</h4>
        ₹ ${item.price}
       </div>
       <div class="units">
           <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
           <div class="number">${item.numberofunits}</div>
           <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
       </div>
   </div> 
       `;
    });
    // modal.innerHTML = cartitemsEl;
}

// change no of units
function changeNumberOfUnits(action , id){
   cart =  cart.map((item)=>{
      let numberofunits = item.numberofunits;
     if(item.id === id){
          if(action ==="minus" && numberofunits>1){
            numberofunits--;
          }
          else if(action === "plus" && numberofunits< item.instock){
            numberofunits++;
          }
     }
        return{
            ...item,
            numberofunits,
        };
     });
    
     updateCart();
}

function removeitemfromcart(id){
   cart =  cart.filter((item)=> item.id !== id)
   updateCart();
}
 
function displaymodal(){
    modal.style.display="block";
}
// funct ion add(index){
//     let item = array[index];
//     document.getElementById("c").innerText = x;
//     x++;
//     document.getElementById("c").innerText = x;
//     cartData.push(item);
//     modal.style.display = "block";

//     let modalContent = "";
//     cartData.forEach((item,i) => {
//         modalContent += `
//             <div class="cart-item">
//                <div class="heading">
//                 <h3>${item.label}</h3>
//                 </div>
//                 <div class=img>
//                 <img src="${item.image}">
//                 </div>
//                 <button onclick="remove(${i})" class="removebtn">Remove</button>
//             </div>
//         `;
//     });
//     modal.innerHTML = modalContent;
// }

// function remove(index) {
//     cartData.splice(index, 1);
//     modal.innerHTML = "";
//     let modalContent = "";
//     cartData.forEach((item, i) => {
//         modalContent += `
//             <div class="cart-item">
//                 <div class="heading"> 
//                     <h3>${item.label}</h3>
//                 </div>
//                 <div class="img">
//                     <img src="${item.image}">
//                 </div>
//                 <button onclick="remove(${i})">Remove</button>
//             </div>
//         `;
//     });
//     modal.innerHTML = modalContent;
//     document.getElementById("c").innerText = --x;
// }

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

closebtn.addEventListener("click", function () {
    modal.style.display = "none";
});

function scrolltotop() {
    window.scrollTo(0, 0);
}