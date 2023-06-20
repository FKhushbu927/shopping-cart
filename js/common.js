function getTextElementById(elementId){
    //calculate total

    const phoneTotalElement =document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString );
    return currentPhoneTotal;

  
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElementById('phone-total');

    const currentCaseTotal = getTextElementById('case-total');
    const currentHeadsetTotal = getTextElementById('headset-total');
    const currentSubTotal =  currentPhoneTotal + currentCaseTotal + currentHeadsetTotal;
 
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;
}