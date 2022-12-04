function toggleClass(e) {
    e.target.classList.toggle('is-active')
}

document.getElementsByClassName('icon-heart')[0].onclick = toggleClass;
