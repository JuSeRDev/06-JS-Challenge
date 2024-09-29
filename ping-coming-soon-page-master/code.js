const button = document.querySelector(".button")
const error = document.querySelector(".error")
const input = document.querySelector(".input-text")



const validate = ()=>{
    if (input.value.indexOf("@") === -1 || input.value.indexOf(".") === -1 ) {
        error.style.display = "flex"
        console.log("codigo no enviado");
        
    } else{
        error.style.display = "none"
        console.log("codigo enviado");
        input.value = ""
    }
}

button.addEventListener("click", ()=>{
    let error = validate()
    if (!error) {
        return false
    }
})


