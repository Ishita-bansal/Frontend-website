let addbtn = document.querySelector(".btn");
let uprdiv = document.querySelector(".shop-section");
let x = 0 ; 
var cartData = [];

let modal = document.querySelector(".mymodal");
let btn = document.querySelector(".addtocartbtn");
let closebtn = document.querySelector(".close");
const array = [
    {
        label:"clothes",
        image:"box1_image.jpg",
        price: "₹800",
        desc:"see more",
        button:"Add to cart"
    },
    {
        label:"Health & Personal Care",
        image:"box2_image.jpg",
        price:"₹2000",
        desc:"see more",
        button:"Add to cart"
    },
    {
        label:"Furniture",
        image:"box3_image.jpg",
        price:"₹3000",
        desc:"see more",
        button:"Add to cart"
    },
    {
        label:"Mobiles",
        image:"box4_image.jpg",
        price:"₹50000",
        desc:"see more",
        button:"Add to cart"
    },
    {
        label:"Beauty Products",
        image:"box5_image.jpg",
        price:"₹1000",
        desc:"see more",
        button:"Add to cart"
    },
    {
        label:"Pet Care",
        image:"box6_image.jpg",
        price:"₹1000",
        desc:"see more",
        button:"Add to cart"
    },
    {
        label:"New Arrivals in Toys",
        image:"box7_image.jpg",
        price:"₹500",
        desc:"see more",
        button:"Add to cart"
    },
    {
        label:"Discover Fashion Trends",
        image:"box8_image.jpg",
        price:"₹700",
        desc:"see more",
        button:"Add to cart"
    }
];

   array.forEach((data)=>{
    let productPage = "";
    switch(data.label){
           case "clothes" :
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
            default :
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
                 <button class="btn" onclick="add('${array.indexOf(data)}')">${data.button}</button>
           </div>
       `
       uprdiv.innerHTML += arr;
});

function add(index){
    let item = array[index];
    document.getElementById("c").innerText = x;
    x++;
    document.getElementById("c").innerText = x;
    cartData.push(item);
    modal.style.display = "block"; 

    let modalContent = ""; 
    cartData.forEach((item,i) => {
        modalContent += `
            <div class="cart-item">
               <div class="heading"> 
                <h3>${item.label}</h3>
                </div>
                <div class=img>
                <img src="${item.image}">
                </div>
                <button onclick="remove(${i})" class="removebtn">Remove</button>
            </div>
        `;
    });
    modal.innerHTML = modalContent;
}

function remove(index) {
    cartData.splice(index, 1);
    modal.innerHTML = ''; 
    let modalContent = "";
    cartData.forEach((item, i) => {
        modalContent += `
            <div class="cart-item">
                <div class="heading"> 
                    <h3>${item.label}</h3>
                </div>
                <div class="img">
                    <img src="${item.image}">
                </div>
                <button onclick="remove(${i})">Remove</button>
            </div>
        `;
    });
    modal.innerHTML = modalContent;
    document.getElementById("c").innerText = --x;
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}

closebtn.addEventListener("click", function() {
    modal.style.display = "none";
});

function scrolltotop(){
    window.scrollTo(0, 0);
}