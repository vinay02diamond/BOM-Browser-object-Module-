// bomprompt.js

// Function to delete data
function deleteData() {
    document.getElementById('box1').innerHTML = '';
    alert('Data deleted!');
}

// Prompt for background color and apply it
var x = prompt('Enter color name:', 'yellow');
document.getElementsByTagName('body')[0].style.backgroundColor = x;
console.log(x);
