
function showSidebar() {
    const sidebar = document.querySelector('.hamburger');
    sidebar.style.display = 'flex';
}
function hideSidebar() {
    const sidebar = document.querySelector('.hamburger');
    sidebar.style.display = 'none';
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyFiR8UelO6k6UBXWDHmATKUteWtcKDWC0XQC3QB-XALqws5qwTgKRt7ubbolydP4XJew/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent successfully";
        setTimeout(function(){
            msg.innerHTML = "";
        }, 5000);
    form.reset();
    })
            .catch(error => console.error('Error!', error.message));
});

setTimeout(() => {
    document.querySelector('.typewriter').classList.add('finished');
}, 3000); 