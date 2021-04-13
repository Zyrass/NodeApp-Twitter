const textarea = document.getElementById("tweetContent")
const btnSubmit = document.getElementById("btnSubmit")
const counter = document.getElementById("counter")

textarea.addEventListener("keyup", event => {
  let counterINIT = 0
  counter.textContent = counterINIT + "/256"

  let myCounter = event.target.value.length

  if (myCounter < 20 || myCounter > 256) {
    // console.log("-20 ou +256")

    if (counter.classList.contains("text-success")) {
      counter.classList.remove("text-success")
    }

    if (textarea.classList.contains("is-valid")) {
      textarea.classList.remove("is-valid")
    }

    textarea.classList.add("is-invalid")
    counter.classList.add("text-danger")
    btnSubmit.setAttribute("disabled", "disabled")
  }

  else if (myCounter >= 20 || myCounter <= 256) {
    // console.log("OK")

    if (counter.classList.contains("text-danger")) {
      counter.classList.remove("text-danger")
    }

    if (textarea.classList.contains("is-invalid")) {
      textarea.classList.remove("is-invalid")
    }

    textarea.classList.add("is-valid")
    counter.classList.add("text-success")
    btnSubmit.removeAttribute("disabled")
  }

  counter.textContent = `${event.target.value.length}/256`
  

  
})

