const product = [
    {
        id:0,
        Image: 'imagenes/terrariocatalina.jpeg',
        title: 'Terrario Tropical Catalina',
        price: 130,
    },
    {
        id: 1,
        image: 'imagenes/terrarioGeometric.jpg',
        title: 'Terrario Tropical Geometric Cube',
        price: 125,
    },
    {
        id: 2,
        image: 'imagenes/terrariolargo.jpeg',
        title: 'Terrario Tropical Andenes',
        price: 150,
    },
    {
        id: 3,
        image:'imagenes/terrarioabstracto.jpeg',
        title: 'Terrario Tropical Abstract Mediano',
        price: 160,
    },
    {
        id: 4,
        image:'imagenes/greenhouse.jpg',
        title: 'Terrario Tropical Greenhouse',
        price: 205,
    },
    {
        id: 5,
        image:'imagenes/terrariolucerna.jpeg',
        title: 'Terrario Tropical Lucerna',
        price: 120,
    },
];

const categories = [...new Set(product.map((item)=>
    {return item }))]
    
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>{
    var{image, title, price} = item;
    return(
        `<div class='box'> 
        <div class='img-box'>
        <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
        <p>${title}<p/>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById('total').innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>{
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>$ ${title}.</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclinck='delElement("+(j++) +")'></i></div>"
            );
        }).join('');
    }
}
