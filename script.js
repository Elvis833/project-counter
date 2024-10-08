// This function adds one to the counter. When you click on "Add one more", the counter text changes to reflect how many times the button has been clicked.

let count = 0;
document.getElementById('add').addEventListener('click', function() {
    count++;
    document.getElementById('counts').innerText = count;
});

// This function changes the grammar text to plural after its first click been clicked.

document.getElementById('add').addEventListener('click', function() {
    if (count === 1) {
        document.getElementById('counter').innerText = 'Clicked ' + count + ' time';
    } else {
        document.getElementById('counter').innerText = 'Clicked ' + count + ' times';
    }
});
