function getTextElementById(elementId){
    //calculate total

    const phoneTotalElement =document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString );
    return currentPhoneTotal;

  
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElementById('phone-total');

    const currentCaseTotal = getTextElementById('case-total');
    const currentHeadsetTotal = getTextElementById('headset-total');
    const currentSubTotal =  currentPhoneTotal + currentCaseTotal + currentHeadsetTotal;
    setTextElementValueById('sub-total', currentSubTotal)
   
     //calculate tax

     const taxAmountString = currentSubTotal * 0.1.toFixed(2);
     const taxAmount = parseFloat(taxAmountString);
     setTextElementValueById('tax-amount', taxAmount);


}