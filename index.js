document.getElementById('donate-btn').addEventListener('click',function(){
    
    const inputValue1 = getValue('input-field1');
    const amount = getInnerTextValue('amount1');
    const totalAmount = amount + inputValue1 ;
    document.getElementById('amount1').innerText = totalAmount ;
    const balance = getInnerTextValue('balance');
    const remainingBalance = balance - inputValue1;
    document.getElementById('balance').innerText = remainingBalance ;
    
})

document.getElementById('donate-btn2').addEventListener('click',function(){
    const inputValue2 = getValue('input-field2');
    const amount2 = getInnerTextValue('amount2');
    const totalAmount2 = amount2 + inputValue2 ;
    document.getElementById('amount2').innerText = totalAmount2 ;
    const balance = getInnerTextValue('balance');
    const remainingBalance2 = balance - inputValue2;
    document.getElementById('balance').innerText = remainingBalance2 ;
})

document.getElementById('donate-btn3').addEventListener('click',function(){
    const inputValue3 = getValue('input-field3');
    const amount3 = getInnerTextValue('amount3');
    const totalAmount3 = amount3 + inputValue3 ;
    document.getElementById('amount3').innerText = totalAmount3 ;
    const balance = getInnerTextValue('balance');
    const remainingBalance3 = balance - inputValue3 ;
    document.getElementById('balance').innerText = remainingBalance3 ;
})