const arrowFuggveny = (txt) => txt.split("").reverse().join("");

document.getElementById("gomb").addEventListener("click", function(){
    let szov = document.getElementById("szoveg").value;
    const forditott = arrowFuggveny(szov);
    console.log("Megfordított szöveg: " + forditott);
});


