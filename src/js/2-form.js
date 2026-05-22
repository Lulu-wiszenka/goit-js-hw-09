const formData = {
    email: "",
    message: ""
}
const key = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const email = document.querySelector('input[type="email"]');
const comment = document.querySelector('textarea[name="message"]');

form.addEventListener("input", formInput);
form.addEventListener("submit", formSubmit);

safeInfo(formData);
email.value = formData.email;
comment.value = formData.message;

function formInput(event) {
    if (event.target.name === "email") {
        formData.email = event.target.value;  
    } else if(event.target.name ==="message")  {
        console.log(event.target.name);
        formData.message = event.target.value;
    }

    localStorage.setItem(key, JSON.stringify(formData));
}

function formSubmit(event) {
    event.preventDefault();

    const elements = event.target.elements;
    if (elements.email.value === "" || elements.message.value === "") {
       return alert("Fill please all fields!");
    } else {
        formData.email = elements.email.value;
        formData.message = elements.message.value;
        localStorage.setItem(key, JSON.stringify(formData));
    }
    
    console.log(JSON.parse(localStorage.getItem(key)));

    event.target.reset();
    localStorage.removeItem(key);
    formData.email = "";
    formData.message = "";
}


function safeInfo(obj) {
    const localInfo = JSON.parse(localStorage.getItem(key));
    if (!localInfo) {
        obj.email = "";
        obj.message = "";
    } else {
        obj.email = localInfo.email;
        obj.message = localInfo.message;    
    }
}

