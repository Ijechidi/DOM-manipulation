const btn = document.getElementById('btn');
const ph = document.getElementById('lest');
const input = document.getElementById('input');


ph.innerHTML = (localStorage.getItem("value") || "").replace(/\n/g, "<br>");


btn.addEventListener('click', () => {
  
    const newValue = (localStorage.getItem("value") || "") + input.value + "\n";

   
    localStorage.setItem("value", newValue);

    
    ph.innerHTML = newValue.replace(/\n/g, "<br>");

   
    input.value = "";
});
