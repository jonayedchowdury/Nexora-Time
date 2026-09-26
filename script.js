
const WA_NUMBER = "8801XXXXXXXXX"; // Replace with the store's WhatsApp number, e.g. 8801XXXXXXXXX

document.querySelectorAll(".mobile-toggle").forEach(btn=>{
  btn.addEventListener("click",()=>document.querySelector(".menu")?.classList.toggle("open"));
});

document.querySelectorAll("[data-wa]").forEach(el=>{
  const msg = el.dataset.wa || "Hello Nexora Time, I would like to know more about your products.";
  el.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
});

const filterButtons = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".product-card");
filterButtons.forEach(btn=>{
  btn.addEventListener("click",()=>{
    filterButtons.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const cat = btn.dataset.filter;
    cards.forEach(card=>{
      card.style.display = (cat==="All" || card.dataset.category===cat) ? "" : "none";
    });
  });
});

document.getElementById("contactForm")?.addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const subject=document.getElementById("subject").value.trim();
  const message=document.getElementById("message").value.trim();
  const text=`Hello Nexora Time,\n\nName: ${name}\nProduct/Subject: ${subject}\nMessage: ${message}`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`,"_blank");
});
