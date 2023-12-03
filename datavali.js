const tel=document.getElementById("tel");
const success=document.getElementById("success");
const errorNodes=document.getElementsByClassName("error");

function validationForm(){
   clearMessage();
    let errorFlag=false;
  if(document.getElementById("name").value.length < 1){
       errorNodes[0].innerText="Name cannot be blank";
       document.getElementById("name").classList.add("error-border");
      errorFlag=true;
  }
  if(!emailIsValid(document.getElementById("email").value)){
    errorNodes[1].innerText="Invalid email address";
    document.getElementById("email").classList.add("error-border");
    errorFlag=true;
  }
  if(document.getElementById("message").value.length < 1){
    errorNodes[3].innerText="Please enter your message";
    document.getElementById("message").classList.add("error-border");
    errorFlag=true;
  }
  var telephone=document.getElementById("tel").value
  var newtext=telephone.toString();
  if(newtext.length!= 10){
    errorNodes[2].innerText="Invalid Phone Number";
    document.getElementById("tel").classList.add("error-border");
    errorFlag=true;
  }
}

function clearMessage(){
for( let i =0; i < errorNodes.length; i++){
    errorNodes[i].innerText="";
}

}

function emailIsValid(email){
  if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    return (false)
}