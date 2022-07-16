const hobbies = ["Student", "Tech Enthusiast", "Learner"];

let count = 0;
let index = 0;
let currentHobby = "";
let letter = "";

const typing = () => {
  if (count === hobbies.length) {
    count = 0;
  }

  currentHobby = hobbies[count];
  letter = currentHobby.slice(0, ++index);

  document.querySelector(".hero__text__dynamic").textContent = letter;

  if (letter.length === currentHobby.length) {
    count++;
    index = 0;
  }

  setTimeout(typing, 150);
};

typing();

//button click
//name click
document.querySelector(".header__name").addEventListener("click", () => {
  document.querySelector(".hero__container").scrollIntoView();
});

//about click
document.querySelector(".header__about").addEventListener("click", () => {
  document.querySelector(".about__container").scrollIntoView();
});

//contact click
document.querySelector(".header__contact").addEventListener("click", () => {
  document.querySelector(".contact__container").scrollIntoView();
});

//download click
document.querySelector(".header__download").addEventListener("click", () => {
  window.open("./MY RESUME.pdf", "_blank");
});

//form handle
const onSubmit = () => {
  const name = document.querySelector(".contact__name");
  const email = document.querySelector(".contact__email");
  const message = document.querySelector(".contact__message");

  if (name.value === "") {
    alert("name is required");
  } else if (email.value === "") {
    alert("email is required");
  } else if (message.value === "") {
    alert("message is required");
  } else {
    // Email.send({
    //   Host: "smtp.gmail.com",
    //   Username: "shakyarajad7@gmail.com",
    //   Password: "",
    //   To: "shakyarajad1@gmail.com",
    //   From: email.value,
    //   Subject: `Message from ${name.value}`,
    //   Body: message.value,
    // }).then((message) => {
    //   console.log("message", message);
    //   alert("mail sent successfully");
    // });
    alert("mail sent successfully");
  }
};

document.querySelector(".contact__submit").addEventListener("click", onSubmit);
