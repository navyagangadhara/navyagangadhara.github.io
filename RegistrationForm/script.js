document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // You can add further processing here, like sending the data to a server
  
      alert("Registration successful!\nName: " + name + "\nEmail: " + email);
    });
  });
  