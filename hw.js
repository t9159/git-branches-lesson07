
const right = document.querySelector(".right")
const red = document.querySelector(".red")
const blue = document.querySelector(".blue")
const green = document.querySelector(".green")
red.addEventListener("click", ()=>{
    const newred = document.createElement("div")
    newred.style.backgroundColor="red"
    newred.style.width="100px"
    newred.style.height="100px"
    newred.style.margin = "10px"
    right.append(newred)
    newred.addEventListener("click", ()=>newred.remove())
})

blue.addEventListener("click", ()=>{
    const newblue = document.createElement("div")
    newblue.style.backgroundColor="blue"
    newblue.style.width="100px"
    newblue.style.height="100px"
    newblue.style.margin = "10px"
    right.append(newblue)
    newblue.addEventListener("click", ()=>newblue.remove())
})

green.addEventListener("click", ()=>{
    const newgreen = document.createElement("div")
    newgreen.style.backgroundColor="green"
    newgreen.style.width="100px"
    newgreen.style.height="100px"
    newgreen.style.margin = "10px"
    right.append(newgreen)
    newgreen.addEventListener("click", ()=>newgreen.remove())
})


