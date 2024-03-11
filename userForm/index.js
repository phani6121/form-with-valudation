document.getElementById("output").innerText = 0;
const addValue = (numberOne, numberTwo) => { //"addNumber1" ,"addNumber2"
    debugger
    const output = getValueById(numberOne) + getValueById(numberTwo);
    document.getElementById("output").innerText = output;
}

const getValueById = (id) => { //"addNumber1"
    return parseInt(document.getElementById(id).value || 0);
}


