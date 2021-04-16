const textarea = document.getElementById("tweetContent") 
const btnSubmit = document.getElementById("btnSubmit") 
const counter = document.getElementById("counter") 

const checkStatus = (data = "") => { 
  switch( data ) { 
    case "invalide": 
      btnSubmit.classList.remove("btn-outline-success") 
      counter.classList.remove("text-success") 
      textarea.classList.remove("is-valid") 

      btnSubmit.classList.add("btn-outline-danger") 
      counter.classList.add("text-danger") 
      textarea.classList.add("is-invalid") 
    
      btnSubmit.setAttribute("disabled", "disabled") 
      break 

    case "valide": 
      btnSubmit.classList.remove("btn-outline-danger") 
      counter.classList.remove("text-danger") 
      textarea.classList.remove("is-invalid") 
  
      btnSubmit.classList.add("btn-outline-success") 
      counter.classList.add("text-success") 
      textarea.classList.add("is-valid") 

      btnSubmit.removeAttribute("disabled") 
      break 

    default: 
      btnSubmit.classList.remove("btn-outline-danger") 
      btnSubmit.classList.remove("btn-outline-success") 
      counter.classList.remove("text-danger") 
      counter.classList.remove("text-success") 
      textarea.classList.remove("is-invalid") 
      textarea.classList.remove("is-valid") 
  
      btnSubmit.classList.add("btn-outline-primary") 
      btnSubmit.setAttribute("disabled", "disabled")     
  } 
} 

textarea.addEventListener("keyup", event => { 
  let counterINIT = 0 
  let myCounter = event.target.value.length 
  
  counter.textContent = counterINIT + "/256" 

  if ( myCounter === 0 ) { 
    console.log("=== 0") 
    checkStatus() 
  } else if (myCounter < 20 || myCounter > 256) { 
    console.log("-20 ou +256") 
    checkStatus("invalide") 
  } else if (myCounter >= 20 || myCounter <= 256) { 
    console.log("OK") 
    checkStatus("valide") 
  } 

  counter.textContent = `${event.target.value.length}/256` 
}) 
