document.addEventListener("DOMContentLoaded", ()=>{
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
        let posX = e.clientX - cursor.offsetWidth / 2;
        let posY = e.clientY - cursor.offsetWidth / 2;
        cursor.style.left = `${posX}px`;
        cursor.style.top = `${posY}px`

    })});a