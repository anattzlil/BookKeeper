var submitForm = function() {
    var para = document.createElement('p');
    var att = document.createAttribute('id');
    att.value = "errorPara";
    para.attributes.setNamedItem(att);
    var error = document.getElementById('errorDiv');
    var errorTxt = document.createTextNode("");
    error.appendChild(para);
    para.appendChild(errorTxt);
    para.style.color='red';
    var complete = true;
    if(document.getElementById('username').value.length < 5) {
        para.innerHTML += 'The supplied username is too short, try again using 5 or more characters';
        complete = false;
   }
   if(document.getElementById('password').value.length < 6) {
        para.innerHTML += '<br>' + 'The supplied username is too short, try again using 6 or more characters';
        complete = false;
   }
   if(document.getElementById('password').value !== document.getElementById('passRepeat').value){
    para.innerHTML += '<br>' + 'Both passwords are not the same';
    complete = false;
   }
   var selectionCountry = document.getElementById('selection');
   if(document.getElementById('selection').value !== 'USA'){
    para.innerHTML += '<br>' + 'You need to be from the USA';
    complete = false;
   }
   if(document.getElementById('telNumber').value.length >= 15){
    para.innerHTML += '<br>' + 'You need less than 15 digits on your phone number'; 
    complete = false;
   }

    if (complete) {
        userName = document.getElementById('username').value; 
        para.style.color='rgb(0, 255, 76)';
        document.getElementById('errorPara').innerHTML="Thank you "+ userName;
    }
};

