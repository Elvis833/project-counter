let count = 0;
document.getElementById('add').addEventListener('click', function() {
    count++;
    document.getElementById('counts').innerText = count;
});
