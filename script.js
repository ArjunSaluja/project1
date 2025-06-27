const wrapper= document.querySelector(".sliderWrapper");
const menuItems =document.querySelectorAll(".menuItem");

const availableShoes = ["Jordan", "Air Force", "Blazer", "Crater", "Chelsa"];

document.querySelector(".searchInput").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const matches = availableShoes.filter(shoe => shoe.toLowerCase().includes(value));
  if (value && matches.length) {
    alert("Available: " + matches.join(", "));
  }
});


function showOffer() {
    const popup = document.getElementById("offerPopup");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
  }
  
const products= [
{
    id:1,
    title:"Jordan",
    price:112,
    colors:[
      {  code:"red",
         img:"jordan50.png",
    },
    {
        code:"blue",
        img:"blue jordan.webp",
    },
    ],
},
{
    id:2,
    title:"Air force",
    price:114,
    colors:[
      {  code:"white",
         img:"airforce30.jpg",
    },
    {
        code:"black",
        img:"airforce2k.jpg",
    },
    ],
},

{
    id:3,
    title:"Blazer",
    price:116,
    colors:[
      {  code:"white",
         img:"blazer24.jpg",
    },
    {
        code:"darkblue",
        img:"blazer2k.jpg",
    },
    ],
},
{
    id:4,
    title:"Crater",
    price:118,
    colors:[
      {  code:"white",
         img:"crater50.jpg",
    },
    {
        code:"orange",
        img:"crater2k.webp",
    },
    ],
},
{
    id:5,
    title:"Chelsa",
    price:120,
    colors:[
      {  code:"black",
         img:"chelsa50.jpg",
    },
    {
        code:"brown",
        img:"chelsi2k.jpg",
    },
    ],
},

];

let choosenProduct = products[0]


const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSize = document.querySelectorAll(".size");


menuItems.forEach((item, index)=>{
 item.addEventListener("click" ,() =>{
    //change slide
 wrapper.style.transform =`translateX(${-100* index}vw)`;
 // change choosen product
 choosenProduct = products[index]
 //change text
 currentProductTitle.textContent= choosenProduct.title;
 currentProductPrice.textContent="$"+ choosenProduct.price;
 currentProductImg.src= choosenProduct.colors[0].img;

 currentProductColors.forEach((color , index)=>{
    color.style.backgroundColor = choosenProduct.colors[index].code;
 })

 

 });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src=choosenProduct.colors[index].img
    });
});

currentProductSize.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSize.forEach((size)=>{
        size.style.backgroundColor="white";
        size.style.color="black";
        });
        size.style.backgroundColor="black";
        size.style.color="white";
    });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})
function toggleChat() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';
  }
  
  function handleKey(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  }
  
  function sendMessage() {
    const input = document.getElementById('userInput');
    const text = input.value.trim();
    if (!text) return;
  
    appendMessage('user', text);
    input.value = "";
  
    // Simulate AI response
    setTimeout(() => {
      const response = getAIResponse(text);
      appendMessage('bot', response);
    }, 600);
  }
  
  function appendMessage(sender, text) {
    const chatBody = document.getElementById('chatBody');
    const message = document.createElement('div');
    message.className = 'chat-message ' + sender;
    message.textContent = text;
    chatBody.appendChild(message);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  
  function getAIResponse(userText) {
    const text = userText.toLowerCase();
  
    if (text.includes("hello") || text.includes("hi")) {
      return "Hello there! 👋 How can I assist you today?";
    } else if (text.includes("price")) {
      return "Our products range from $10 to $200 depending on the model. Let me know which one you're interested in!";
    } else if (text.includes("return")) {
      return "You can return any product within 30 days. Make sure it's in original condition with tags.";
    } else if (text.includes("shipping")) {
      return "We offer free standard shipping on all orders above $50. Express options are also available.";
    } else if (text.includes("available") || text.includes("stock")) {
      return "Yes, it's in stock! But they go fast—order soon to avoid missing out.";
    } else if (text.includes("support") || text.includes("help")) {
      return "Of course! I can help with orders, products, or any issue you’re facing. What do you need help with?";
    } else if (text.includes("discount") || text.includes("offer")) {
      return "We currently have a limited-time 10% off on selected items! Check our homepage for more.";
    } else if (text.includes("location") || text.includes("store")) {
      return "We're an online store only, but we ship worldwide! 🌍";
    } else if (text.includes("thank")) {
      return "You're welcome! Let me know if you need anything else.";
    } else if (text.includes("bye")) {
      return "Goodbye! 👋 Come back soon!";
    } else {
      return "Hmm... I’m not sure about that. Can you rephrase or give me more details?";
    }
  }
  
  
close.addEventListener("click", ()=>{
    payment.style.display="none";
});

document.querySelector(".payButton").addEventListener("click", () => {
    const name = document.querySelectorAll(".payInput")[0].value;
    const phone = document.querySelectorAll(".payInput")[1].value;
    const address = document.querySelectorAll(".payInput")[2].value;
    const product = document.querySelector(".productTitle").innerText;
    const sizeEl = document.querySelector(".size.selected");
    const size = sizeEl ? sizeEl.innerText : "Not selected";
    const price = document.querySelector(".productPrice").innerText;
  
    if (!name || !phone || !address) {
      alert("Please fill out all personal information.");
      return;
    }
  
    // Fill invoice
    document.getElementById("invName").innerText = name;
    document.getElementById("invPhone").innerText = phone;
    document.getElementById("invAddress").innerText = address;
    document.getElementById("invProduct").innerText = product;
    document.getElementById("invSize").innerText = size;
    document.getElementById("invPrice").innerText = price;
  
    // Show invoice
    document.getElementById("invoice").style.display = "flex";
  });
  
  function closeInvoice() {
    document.getElementById("invoice").style.display = "none";
  }
  
  function printInvoice() {
    const printContents = document.querySelector(".invoice-box").innerHTML;
    const printWindow = window.open('', '', 'width=600,height=600');
    printWindow.document.write('<html><head><title>Invoice</title></head><body>');
    printWindow.document.write(printContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  }
  