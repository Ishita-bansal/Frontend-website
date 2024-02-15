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
        desc:"see more",
        button:"Add to cart"
    },
    {
        label:"Health & Personal Care",
        image:"box2_image.jpg",
        desc:"see more",
        button:"Add to cart"
    },
    {
        label:"Furniture",
        image:"box3_image.jpg",
        desc:"see more",
        button:"Add to cart"
    },
    {
        label:"Mobiles",
        image:"box4_image.jpg",
        desc:"see more",
        button:"Add to cart"
    },
    {
        label:"Beauty Products",
        image:"box5_image.jpg",
        desc:"see more",
        button:"Add to cart"
    },
    {
        label:"Pet Care",
        image:"box6_image.jpg",
        desc:"see more",
        button:"Add to cart"
    },
    {
        label:"New Arrivals in Toys",
        image:"box7_image.jpg",
        desc:"see more",
        button:"Add to cart"
    },
    {
        label:"Discover Fashion Trends",
        image:"box8_image.jpg",
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
                
                <a href="${productPage}" style="text-decoration:none;"> ${data.desc}</a>
                 <button class="btn" onclick="add('${data}')">${data.button}</button>
           </div>
       `
       uprdiv.innerHTML += arr;
      console.log(data);
});

function add(val){
    document.getElementById("c").innerText = x;
    x++;
    document.getElementById("c").innerText = x;
    cartData.push(val);
    updateModalContent();
    modal.style.display = "block"; 
}

function updateModalContent() {
    let modalContent = ""; 
    cartData.forEach((item) => {
        modalContent += `
            <div>
                <h3>${item.label}</h3>
                <img src="${item.image}">
            </div>
        `;
    });
    modal.innerHTML = modalContent;
}

closebtn.onclick = function(){
    modal.style.display = "none";
}

