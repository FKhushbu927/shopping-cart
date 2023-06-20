
function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberFieldString);
    let newCaseNumber;
    if(isIncrease == true){
        newCaseNumber = previousCaseNumber + 1;
    } else{
        newCaseNumber = previousCaseNumber - 1;
    }
   
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}
function updateTotalCasePrice(newCaseNumber){
          const caseTotalPrice = newCaseNumber * 50;
          const totalCasePriceElement = document.getElementById('case-total');
          totalCasePriceElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    updateTotalCasePrice(newCaseNumber);
    calculateSubTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    updateTotalCasePrice(newCaseNumber);
    calculateSubTotal();
})


// document.getElementById('btn-case-plus').addEventListener('click', function(){
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberFieldString = caseNumberField.value;
//     const previousCaseNumber = parseInt(caseNumberFieldString);
//     const newCaseNumber = previousCaseNumber + 1;
//     caseNumberField.value = newCaseNumber;
// })


// document.getElementById('btn-case-minus').addEventListener('click', function(){
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberFieldString = caseNumberField.value;
//     const previousCaseNumber = parseInt(caseNumberFieldString);
//     const newCaseNumber = previousCaseNumber - 1;
//     caseNumberField.value = newCaseNumber;

// })