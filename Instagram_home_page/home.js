let horizontalBtn = document.getElementById("horizontalBtn");
let FeedContainer = document.getElementById("feedContainer")
let normalBtn = document.getElementById("normalBtn")
horizontalBtn.addEventListener("click" , ()=>{
    FeedContainer.classList.add("column")
})
normalBtn.addEventListener("click" , ()=>{
    FeedContainer.classList.remove("column")
})