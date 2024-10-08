let count = 0;
document.getElementById('add').addEventListener('click', function() {
    count++;
    document.getElementById('counts').innerText = count;
});

document.getElementById('add').addEventListener('click', function() {
    if (count === 1) {
        document.getElementById('counter').innerText = 'Clicked ' + count + ' time';
    } else {
        document.getElementById('counter').innerText = 'Clicked ' + count + ' times';
    }
});
