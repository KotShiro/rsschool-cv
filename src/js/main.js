function myFunction() {
    const ul = document.getElementById('myTopnav');
    if (ul.className === 'topnav') {
        ul.className += ' responsive';
    } else {
        ul.className = 'topnav';
    }
}