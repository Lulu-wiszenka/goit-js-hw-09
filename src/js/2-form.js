const formData = {
    email: "",
    message: ""
}

const key = "feedback-form-state";


const form = document.querySelector(".feedback-form");
const email = document.querySelector('input[type = "email"]');
const comment = document.querySelector('textarea[name="message"]');

const safeInfo = JSON.parse(localStorage.getItem(key));
email.value = safeInfo.email || "";
comment.value = safeInfo.message || "";


form.addEventListener("input", addText);
form.addEventListener("submit", formSubmit);

function addText(event) {
    if (event.target.name === "email") {
        formData.email = `${event.target.value}`;
    } else { 
        formData.message = `${event.target.value}`;
    }
    localStorage.setItem(key, JSON.stringify(formData));
}


function formSubmit(event) {
    event.preventDefault();
    const elements = event.target.elements;
    console.log(elements);
    if (elements.email.value === "" || elements.message.value === "") {
       return alert("Fill please all fields!");
    }
    formData.email = elements.email.value;
    formData.message = elements.message.value;
    localStorage.setItem(key, JSON.stringify(formData));
    console.log(JSON.parse(localStorage.getItem(key)));
    event.target.reset();
}


