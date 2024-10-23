// This function adds one to the counter When you click on "Add", the counter text changes to reflect how many times the button has been clicked.
let count = 0;
document.getElementById('add').addEventListener('click', function() {
    count++;
    updateDisplay();
});
// This function subtracts one to the counter When you click on "subtract" the counter text changes to reflect how many times the button has been clicked.
document.getElementById('subtract').addEventListener('click', function() {
        count--;  
        updateDisplay();
});
// This function changes the grammar text to plural after its first click been clicked.
function updateDisplay() {
    if (count === 1) {
        document.getElementById('counter').innerText = 'Clicked ' + count + ' time';
    } else {
        document.getElementById('counter').innerText = 'Clicked ' + count + ' times';
    }
};