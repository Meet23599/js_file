console.log("this is project 4");
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validname=false;
let validemail=false;
let validphone=false;

//console.log(name,email,phone);
name.addEventListener('blur', () => {
    console.log("name is blurred");
    //validate name hear
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your name is valid');
        name.classList.remove('is-invalid');
        validname=true;
    }
    else{
        console.log('your name is not matched');
        name.classList.add('is-invalid');
        validname=false;
    }
})


email.addEventListener('blur', () => {
    console.log("email is blurred");
    //validate email id 
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,17}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your email is valid');
        email.classList.remove('is-invalid');
        validemail=true;
    }
    else{
        console.log('your email is not matched');
        email.classList.add('is-invalid');
        validemail=false;
    }
})



phone.addEventListener('blur', () => {
    console.log("phone is blurred");
    //validate phone nummber
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your phone number is valid');
        name.classList.remove('is-invalid');
        validphone=true;
    }
    else{
        console.log('your phone number is not matched');
        name.classList.add('is-invalid');
        validphone=false;
    }
})

//submit

let submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>{
e.preventDefault();
    console.log('you clicked on submit');
    console.log('validemail,validname,validphone')

    //submit form hear
    if(validemail&&validname&&validphone){
        console.log('phone,emailand name id valid.');
       let success = document.getElementById('success');
        success.classList.add('show');
       // success.classList.remove('failure');
    // $('#failure').alert('close');
    $('#failure').hide();
    $('#success').show();
    
    }
    else{
        console.log('phone,emailand name id is not valid.');
    
   let failure = document.getElementById('failure');
    failure.classList.add('show');
    //success.classList.remove('success');
   // $('#success').alert('hide');
    $('#success').hide();
    $('#failure').show();
    }

})
