function login()
    {
      let accnum = loginacc.value;
      let paswd = loginpass.value;
  
      if (accnum === "" || paswd === "") {
          alert("Please fill the form");
          return;
      }
  
      if (accnum in localStorage) {
          window.location = "./home.html";
      } else {
          alert("User is not registered....Redirecting..");
          window.location = "signin.html";
      }
  }
  let username = localStorage.getItem("USERNAME");
  console.log(username);
  
  headUser.innerHTML = `Welcome ${username}`;
  