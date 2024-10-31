"use strict";
function copyToClipBoard(){
    
    const passwordField=document.getElementById("password");
    const copyButton=document.getElementById("copy-button");
    copyButton.innerHTML="<b>Copied</b>";
    copyButton.setAttribute("disabled",true);
    setTimeout(()=>{
        copyButton.innerHTML="<b>Copy!!!</b>";
        copyButton.removeAttribute("disabled");
    },1000);
    window.navigator.clipboard.writeText(passwordField.value);
}

const passwordLengthAdjuster=document.getElementById("password-length");
const currentPasswordLengthNode=document.getElementById("current-password-length");
passwordLengthAdjuster.addEventListener("change",changePasswordLengthInUI);
function changePasswordLengthInUI(e){
    currentPasswordLengthNode.innerText=e.target.value;
}


function generatePassword(){
    let allowedCharacters="";
    const isLowerCaseAllowed=document.getElementById("lowercase").checked;
    const isUpperCaseAllowed=document.getElementById("uppercase").checked;
    const isNumbersAllowed=document.getElementById("numbers").checked;
    const isSpecialCharactersAllowed=document.getElementById("symbols").checked;

   if(isLowerCaseAllowed){
    allowedCharacters+="abcdefghijklmnopqrstuvwxyz";
   }
   if(isUpperCaseAllowed){
    allowedCharacters+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   }
   if(isNumbersAllowed){
    allowedCharacters+="0123456789";
   }
   if(isSpecialCharactersAllowed){
    allowedCharacters+="!@#$%^&*()-_=+\|[]{};:/?.><";
   }
   
   const passwordLength=Number(currentPasswordLengthNode.innerText);
   let password="";
   for(let i=1;i<=passwordLength;i++){
        let index=Math.floor(Math.random()*allowedCharacters.length);
        password+=allowedCharacters[index];
   }
   const passwordField=document.getElementById("password");
   passwordField.value=password;
}

generatePassword();