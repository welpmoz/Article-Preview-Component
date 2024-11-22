const shareButton = document.getElementById('share-button');
const imgInsideButton = shareButton.querySelector('img');
const shareWrapper = document.getElementById('share-wrapper');

const nonClickedShareSvg = './images/icon-share.svg';
const clickedShareSvg = './images/icon-share-white.svg';

shareButton.addEventListener('click', function () {
    let currentSrc = imgInsideButton.getAttribute('src');
    if (currentSrc.includes('white')) {
        imgInsideButton.setAttribute('src', nonClickedShareSvg);
    } else {
        imgInsideButton.setAttribute('src', clickedShareSvg);
    }
    shareButton.classList.toggle('clicked');
    shareWrapper.classList.toggle('no-show');
    shareWrapper.classList.toggle('share-wrapper');
});
