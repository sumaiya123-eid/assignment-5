
function getValue(id){
    const inputValue = Number(document.getElementById(id).value) ;
    return inputValue ;
}

function getInnerTextValue(id){
    const innerTextValue = parseFloat(document.getElementById(id).innerText) ;
    return innerTextValue ;
}
