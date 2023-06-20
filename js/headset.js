function updateHeadsetNumber(isIncrease){
    const headsetNumberField = document.getElementById('headset-number-field');
    const headsetNumberString = headsetNumberField.value;
    const previousHeadsetNumber = parseInt(headsetNumberString);
    let newHeadsetNumber;

    if(isIncrease == true){
        newHeadsetNumber = previousHeadsetNumber + 1;
    }else{
        newHeadsetNumber = previousHeadsetNumber - 1;
    }
    headsetNumberField.value = newHeadsetNumber;
    return newHeadsetNumber;
}
function updateTotalHeadsetPrice(newHeadsetNumber){
    const totalHeadsetPrice = newHeadsetNumber * 60;
    const headsetTotalElement = document.getElementById('headset-total');
    headsetTotalElement.innerText = totalHeadsetPrice;
}

document.getElementById('btn-headset-plus').addEventListener('click', function(){
    const  newHeadsetNumber = updateHeadsetNumber(true);
    updateTotalHeadsetPrice(newHeadsetNumber);
    calculateSubTotal();
})

document.getElementById('btn-headset-minus').addEventListener('click', function(){
   const  newHeadsetNumber = updateHeadsetNumber(false);
   updateTotalHeadsetPrice(newHeadsetNumber);
   calculateSubTotal();
})