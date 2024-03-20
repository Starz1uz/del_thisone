let boxes = document.querySelector('.boxes')
// let inp = document.querySelector('input')
// let mm = []


for (let i = 0; i < 4; i++) {
    let box = document.createElement('div')
    let box_h3 = document.createElement('h3')
    let box_btn = document.createElement('button')

    box.classList.add('box')
    box_btn.classList.add('close')

    box_btn.innerHTML = 'X'
    box_h3.innerHTML = 'buy milk :)'

    boxes.append(box)
    box.append(box_h3, box_btn)
    box_btn.onclick = () => {
        box.style.display = 'none'
    }
}
