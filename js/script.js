// id names for inputVal, totalChar, remainingChar for the updation
const inputVal = document.getElementById('textarea');
let totalChar = document.getElementById('total__char')
let remainingChar = document.getElementById("remaininig__char");

// Initial count set
let charCount = 0;

const updateText = () => {
    // When type letters then it shows length of text
    charCount = inputVal.value.length;

    // It shows total count when text is type
    totalChar.innerText = charCount;

    // It shows remaining count means How much more text can I add?
    remainingChar.innerText = 1000 - charCount;
};

// When to press key then updateText function calls
inputVal.addEventListener('keyup', () => updateText());


// In the textarea copy the text clipboard

const copyTexts = () => {
    // Text select
    inputVal.select();

    // 0 to 9999 it is a text selection range
    inputVal.setSelectionRange(0, 9999); // For Mobile

    // Copy the text
    navigator.clipboard.writeText(inputVal.value);
};