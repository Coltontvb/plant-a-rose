export default function initializeControls(handleAction) {
    const controls = document.querySelectorAll(`.controller-btn`);
    let start = document.querySelector('.start');
    let pause = document.querySelector('.pause');
    controls.forEach(control => {
        control.addEventListener(`click`, (e) => {
            let actionTaken = e.target.innerHTML
            handleAction(actionTaken);
        })
    })
    pause.addEventListener('click', (e) => {
        console.log("PAUSE", pause.classList)
        if (!pause.classList.contains('hidden')) {
            pause.classList.toggle('hidden');
            start.classList.toggle('hidden')
        }
        handleAction("PAUSE");
    })

    start.addEventListener(`click`, (e) => {
        console.log("START", start.classList)
        if (!start.classList.contains('hidden')) {
            pause.classList.toggle('hidden');
            start.classList.toggle('hidden')
        }
        handleAction("START");
    })
}