/* global $ */

$(function expand()
{ var picture = document.getElementById('expand')
    $ ('img').on('click', function () {
        if (picture.style.display === 'img-show') {
            picture.style.display = 'block';
        } else {
            picture.style.display = 'expand';
    });
});