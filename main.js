const blockInfo = document.querySelectorAll('.block__info');
const mainLine = document.getElementById('main__line');
const mainMenuHidden = document.getElementById('main__menu-hidden');

mainLine.addEventListener('click', () => {
    mainMenuHidden.classList.toggle('active');
})

for(let key of blockInfo) {
    key.addEventListener('click',function() {
        if(this.classList.contains('active')) {
            this.classList.remove('active');
        }
        else {
            for(let el of blockInfo) {
                el.classList.remove('active');
            }
            this.classList.add('active');
        }
    })
}