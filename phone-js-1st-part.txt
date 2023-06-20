



function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString =  phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if(isIncrease == true){
        newPhoneNumber = previousPhoneNumber + 1;
    }else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField .value =  newPhoneNumber;
    return newPhoneNumber;
}
function getTextElementById(elementId){
               //calculate total

               const phoneTotalElement =document.getElementById(elementId);
               const currentPhoneTotalString = phoneTotalElement.innerText;
               const currentPhoneTotal = parseInt(currentPhoneTotalString );
               return currentPhoneTotal;
            //   const phoneTotalElement = document.getElementById('elementId');
            //   const currentPhoneTotalString = phoneTotalElement.innerText;
            //   const currentPhoneTotal = parseInt(currentPhoneTotalString);
             
}
function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1200;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
        

  
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
  
   const newPhoneNumber = updatePhoneNumber(true);
   updatePhoneTotalPrice(newPhoneNumber);
   // calculate sub-total

   const currentPhoneTotal = getTextElementById('phone-total');

   const currentCaseTotal = getTextElementById('case-total');
   const currentHeadsetTotal = getTextElementById('headset-total');
   const currentSubTotal =  currentPhoneTotal + currentCaseTotal + currentHeadsetTotal;

   const subTotalElement = document.getElementById('sub-total');
   subTotalElement.innerText = currentSubTotal;
})


document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const  newPhoneNumber  = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);

})