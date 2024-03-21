
// Question 1
function rowGenerator(){
    let table = document.getElementById("table");

    for (let i = 1; i <= 10; i++) {
      let row = document.createElement("tr");
      let className = (i % 2 === 0) ? "even row" : "odd row";
      row.className = className;
      
      let cell = document.createElement("td");
      cell.textContent = "Row " + i;
      row.appendChild(cell);

      table.appendChild(row);
    }
}



// Question 2
document.getElementById("dots").addEventListener("click" , ()=>{
    let moreText =  document.getElementById("more")
    let lessbtn = document.getElementById("less-dots")
    lessbtn.style.display = "inline"
    dots.style.display = "none";
    moreText.style.display = "inline";
})
document.getElementById("less-dots").addEventListener("click" , ()=>{
    let moreText =  document.getElementById("more")
    let lessbtn = document.getElementById("less-dots")
    lessbtn.style.display = "none"
    dots.style.display = "inline";
    moreText.style.display = "none";
})