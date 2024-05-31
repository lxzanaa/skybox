let mobile_menu = document.querySelector("#mobile_menu"),
    mobile_open = document.querySelector("#mobile_open"),
    mobile_close = document.querySelector("#mobile_close"),
    body = document.body

mobile_open.addEventListener('click', function () {
    mobile_menu.classList.toggle("left-0")
    body.classList.toggle('overflow-hidden');
    body.classList.toggle('h-screen');
})
mobile_close.addEventListener('click', function () {
    mobile_menu.classList.toggle("left-0")
    body.classList.toggle('overflow-hidden');
    body.classList.toggle('h-screen');
})