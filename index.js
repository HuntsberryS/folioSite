// Clearing out the input fields on clicking the submit button
document.querySelector(".submit-button").onclick = function() {submitForm()};

const submitForm = () => {
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
}


const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

