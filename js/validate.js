function validateForm(){
     //check name
     name = document.forms["contact"]["Name"].value.trim(); 
     if (name == "") {
          alert("Please enter your name.");
          return false;
     }
     //check phone or email
     email = document.forms["contact"]["Email"].value.trim(); 
     phone = document.forms["contact"]["Phone"].value.trim(); 
     if (email == "" && phone == ""){
          alert("Please enter your Email or Phone.");
          return false;
     }
     //if "other" -> check additional info 
     reason = document.forms["contact"]["Reason"].value;
     info = document.forms["contact"]["AdditionalInfo"].value.trim();
     if (reason == "Other" && info == "") {
          alert("Please describe your inquiry in the Additional Information section.");
          return false;
     }
     //check best days to contact (at least one)
     days = document.forms["contact"]["Day"];
     for (day in days) {
          if (days[day].checked) return true;
     }
     alert("Please select at least one day for contacting you.");
     return false;
}
