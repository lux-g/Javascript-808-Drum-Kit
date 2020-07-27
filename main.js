
window.addEventListener('keydown', function (e) {
    //console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    //console.log(audio);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    //console.log(key);
    const whiteC = document.querySelector(`.circle[data-key='${e.keyCode}']`);
    //console.log(whiteC);
    audio.currentTime = 0;
    audio.play();
    key.classList.toggle('btn-active');
    whiteC.classList.remove('circle');
    whiteC.classList.add('circle-active');

    //NOT NEEDED
    // setTimeout(() => {
    //     whiteC.classList.remove('circle-active')
    //     whiteC.classList.add('circle')
    // }, 200)

});


const selectAll = document.querySelectorAll('.key');

selectAll.forEach(selectAll => selectAll.addEventListener('transitionend', endTransition));

function endTransition(e) {
    //console.log(e.target);
    if (e.propertyName === 'scale');
    e.target.classList.remove('btn-active');
};


const whiteCircles = document.querySelectorAll('.circle');

whiteCircles.forEach(item => item.addEventListener('transitionend', function (e) {
    console.log(e);
    if (e.propertyName === 'background-color') {
        e.target.classList.remove('circle-active');
        e.target.classList.add('circle');
    }
}))


