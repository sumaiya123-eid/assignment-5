document.getElementById('donate-btn').addEventListener('click',function(){
    
    const inputValue1 = getValue('input-field1');
    const amount = getInnerTextValue('amount1');
    if(inputValue1 < 0 || isNaN(inputValue1)){
        alert("Please enter currect amount !!!");
        return;
    }
    const totalAmount = amount + inputValue1 ;
    document.getElementById('amount1').innerText = totalAmount ;
    const balance = getInnerTextValue('balance');
    const remainingBalance = balance - inputValue1;
    document.getElementById('balance').innerText = remainingBalance ;

   

    const heading1 = document.getElementById('head-1').innerText;
    const div = document.createElement('div');
    div.className = "border border-2 rounded-lg p-6 max-w-6xl mx-auto my-2";
    div.innerHTML = ` 
                     <p>${inputValue1} Taka is ${heading1}</P>
                      <p>Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p> `;
    
    document.getElementById('history-section').appendChild(div);
    
})



document.getElementById('donate-btn2').addEventListener('click',function(){
    const inputValue2 = getValue('input-field2');
    const amount2 = getInnerTextValue('amount2');
    if(inputValue2 < 0 || isNaN(inputValue2)){
        alert("Please enter currect amount !!!");
        return;
    }
    const totalAmount2 = amount2 + inputValue2 ;
    document.getElementById('amount2').innerText = totalAmount2 ;
    const balance = getInnerTextValue('balance');
    const remainingBalance2 = balance - inputValue2;
    document.getElementById('balance').innerText = remainingBalance2 ;

    const heading2 = document.getElementById('head-2').innerText;
    const div = document.createElement('div');
    div.className = "border border-2 rounded-lg p-6 max-w-6xl mx-auto my-2";
    div.innerHTML = ` 
                     <p>${inputValue2} Taka is ${heading2}</P>
                      <p>Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p> `;
    
    document.getElementById('history-section').appendChild(div);
})

document.getElementById('donate-btn3').addEventListener('click',function(){
    const inputValue3 = getValue('input-field3');
    const amount3 = getInnerTextValue('amount3');
    if(inputValue3 < 0 || isNaN(inputValue3)){
        alert("Please enter currect amount !!!");
        return;
    }
    const totalAmount3 = amount3 + inputValue3 ;
    document.getElementById('amount3').innerText = totalAmount3 ;
    const balance = getInnerTextValue('balance');
    const remainingBalance3 = balance - inputValue3 ;
    document.getElementById('balance').innerText = remainingBalance3 ;

    const heading3 = document.getElementById('head-3').innerText;
    const div = document.createElement('div');
    div.className = "border border-2 rounded-lg p-6 max-w-6xl mx-auto my-2";
    div.innerHTML = ` 
                     <p>${inputValue3} Taka is ${heading3}</P>
                      <p>Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p> `;
    
    document.getElementById('history-section').appendChild(div);
})

document.getElementById('btn').addEventListener('click',function(){
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('btn').classList.add('bg-[#B4F461]', 'p-3','rounded-lg', 'text-base', 'text-[#111111]', 'font-bold');
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]', 'p-3','rounded-lg', 'text-base', 'text-[#111111]', 'font-bold');
    document.getElementById('donate-div').classList.remove('hidden');

})

document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('donate-div').classList.add('hidden');
    document.getElementById('history-btn').className = " bg-[#B4F461] p-3 rounded-lg text-base text-[#111111] font-bold";
    document.getElementById('btn').classList.remove('bg-[#B4F461]', 'p-3','rounded-lg', 'text-base', 'text-[#111111]', 'font-bold');
    document.getElementById('btn').classList.add('p-3', 'rounded-lg', 'border', 'border-1');
})

document.getElementById('blog').addEventListener('click',function(){
    window.location.href = "blog.html"
})
