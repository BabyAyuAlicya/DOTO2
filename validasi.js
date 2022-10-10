function validateForm() {
    var username_element = document.getElementById("Username")
    var email_element = document.getElementById("email")
    var password_element = document.getElementById("password")
    var country_element = document.getElementById("country")
    var DoB_element = document.getElementById("birth")

    if (username_element.value == "" || email_element.value == "" || password_element.value == "" || country_element.value == "" || DoB_element.value == "") {
      alert("All must be filled");

      if (username_element.value == ""){
        username_element.className = username_element.className + " error"
      } else{
        username_element.className = username_element.className.replace(" error", "")
      }

      if (email_element.value == ""){
        email_element.className = email_element.className + " error"
      } else{
        email_element.className = email_element.className.replace(" error", "")
      }

      if (password_element.value == ""){
        password_element.className = password_element.className + " error"
      } else{
        password_element.className = password_element.className.replace(" error", "")
      }
      
      if (country_element.value == ""){
        country_element.className = country_element.className + " error"
      } else{
        country_element.className = country_element.className.replace(" error", "")
      }

      if (DoB_element.value == ""){
        DoB_element.className = DoB_element.className + " error"
      } else{
        DoB_element.className = DoB_element.className.replace(" error", "")
      }
      
      return false;
    } else{
      return true;
    }
  }