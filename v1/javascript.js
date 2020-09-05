'use strict';

let more = document.querySelectorAll('.more'),
    buttons = document.querySelectorAll('button'),
    anBox = document.querySelector('#anima');

    function animationl() {
        let pos = 100,
            id = setInterval(frame, 10);
    
                function frame () {
                    if (pos == 0) {
                        clearInterval(id);
                    } else {
                        pos--;
                        anBox.style.right = pos + '%';
                    } 
                }
        }


        function animationr() {
            let pos = 0,
                id = setInterval(frame, 10);
        
                    function frame () {
                        if (pos == 100) {
                            clearInterval(id);
                        } else {
                            pos++;
                            anBox.style.right = pos + '%';
                        } 
                    }
            }


buttons[0].addEventListener('click', function () {
    document.location.href = ('https://vk.com/idpolniloh?z=photo186162679_457241599%2Fphotos186162679');
    buttons[0].style.outline = '-webkit-focus-ring-color auto 1px';

});
buttons[0].addEventListener('mouseleave', function () {
    buttons[0].style.outline = 'none';
});

    buttons[1].addEventListener('click', function l() {
        buttons[1].style.outline = '-webkit-focus-ring-color auto 1px';
        animationl();
        console.log('l');
        buttons[1].removeEventListener('click', l);
        buttons[1].addEventListener('click', function r() {
            buttons[1].style.outline = '-webkit-focus-ring-color auto 1px';
            animationr();
            console.log('r');
            buttons[1].removeEventListener('click', r);
            buttons[1].addEventListener('click', l);
        });
    });


// buttons[1].addEventListener('click', function () {
//     buttons[1].style.outline = '-webkit-focus-ring-color auto 1px';
//     removeEventListener(animationl);
//     addEventListener(animationl);
// });

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

