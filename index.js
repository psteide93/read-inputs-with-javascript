
const button = document.querySelector("button")


button.addEventListener("click",

  function logValues() {
    const inputs = document.querySelectorAll("input").value
    inputs.forEach(input => console.log(input))
  }
)
