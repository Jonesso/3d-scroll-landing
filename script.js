const zSpacing = -1000;
let lastPosition = zSpacing / 5;
const frames = Array.from(document.getElementsByClassName('frame'));
let zVals = [];
const scrollSpeed = -5;

window.onscroll = function() {
    let top = document.documentElement.scrollTop;
    let delta = lastPosition - top;

    lastPosition = top;
    frames.forEach((frame, i) => {
        zVals.push(i * zSpacing + zSpacing);
        zVals[i] += delta * scrollSpeed;

        const transform = `translateZ(${zVals[i]}px)`;
        const opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
    });
}

window.scrollTo(0, 1);


let soundButton = document.querySelector('.soundbutton');
let audio = document.querySelector('.audio');

soundButton.addEventListener('click', e => {
    soundButton.classList.toggle('paused');
    audio.paused ? audio.play() : audio.pause();
});

window.onfocus = () => {
    soundButton.classList.contains('paused') ? audio.pause() : audio.play();
};
window.onblur = () => {
    audio.pause();
};