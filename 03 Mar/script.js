let inputtag = document.querySelector("#input")
let box = document.querySelector(".box");
function onChangeValue(){
    let str = inputtag.value
    let length = str.length
    for(let i = 0; i < length; i++){
        console.log(str[i])
        var a = document.createElement("p")
        a.textContent = `${str[i]}`
        box.appendChild(a)
    }
}
