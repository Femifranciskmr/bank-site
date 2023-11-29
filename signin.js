function registeruse() {
    const userDetails = {
    uname: usern.value, 
    acno: accno.value,
    pswd: passwo.value,
    };
    if(uname.value == "" || acno.value == "" || pswd.value == "")
    {
      alert("Please fill the form");
    }
    else{
      if(userDetails.acno in localStorage)
      {
        alert("User already exists");
      }else{
          localStorage.setItem(userDetails.acno, JSON.stringify(userDetails));
          localStorage.setItem("USERNAME", userDetails.uname); 
          alert("User details added");
          usern.value = "";
          accno.value = "";
          passwo.value = "";
      }   
    }
  }