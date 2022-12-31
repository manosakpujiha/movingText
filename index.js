// const addBtn = document.querySelector('#addBtn');
// const subBtn = document.querySelector('#subBtn');
// subBtn.addEventListener('click', counterSub);
// addBtn.addEventListener('click', counterAdd);

// function counterAdd() {
//     const display = document.querySelector('#display');
//     let counted = Number(display.innerText);
//     display.innerText = counted+= 1;
//     console.log(counted);
//     return counted;
// }

// function counterSub() {
//     const display = document.querySelector('#display');
//     let counted = Number(display.innerText);
//     display.innerText = counted-= 1;
//     console.log(counted);
//     return counted;
// }

const btn = document.querySelector('#button');
const para = document.querySelector('#para');

btn.addEventListener('click', movie);

const moveX = (element, amount, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bodyBoundary = document.body.clientWidth;
            const elRight = element.getBoundingClientRect().right;
            const currLeft = element.getBoundingClientRect().left;
            if (elRight + amount > bodyBoundary) {
                reject();
            } else {
                element.style.transform = `translateX(${currLeft + amount}px)`;
                resolve();
            }
        }, delay);
    });
};

function movie() {
    moveX(para, 100,1000)
    .then(() => moveX(para, 100,1000))
    .then(() => moveX(para, 100,1000))
    .then(() => moveX(para, 100,1000))
    .catch(() => console.log('end'))
};