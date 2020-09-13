'use strict';

var more = document.querySelectorAll('.more'),
    buttons = document.querySelectorAll('button'),
    anBox = document.querySelector('#anima'),
    value = 100;

buttons[1].addEventListener('click', function () {
    value = value === 0 ? 100 : 0;

    anBox.style.right = value + '%';
    buttons[1].style.outline = '-webkit-focus-ring-color auto 1px';
});

buttons[0].addEventListener('click', function () {
    document.location.href = 'https://vk.com/idpolniloh?z=photo186162679_457241599%2Fphotos186162679';
    buttons[0].style.outline = '-webkit-focus-ring-color auto 1px';
});
buttons[0].addEventListener('mouseleave', function () {
    buttons[0].style.outline = 'none';
});

buttons[1].addEventListener('mouseleave', function () {
    buttons[1].style.outline = 'none';
});

more.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        item.style.color = 'blanchedalmond';
    });
    item.addEventListener('mouseleave', function () {
        item.style.color = 'black';
    });
    item.addEventListener('click', function () {
        document.location.href = 'https://vk.com/idpolniloh?z=photo186162679_457241599%2Fphotos186162679';
    });
});
