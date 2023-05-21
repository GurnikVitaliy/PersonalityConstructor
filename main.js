const mainLine = document.getElementById('main__line');
// top menu
mainLine.addEventListener('click', () => {
    mainMenuHidden.classList.toggle('active');
})

const blockInfo = document.querySelectorAll('.block__info');
const mainMenuHidden = document.getElementById('main__menu-hidden');

// open blocks
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

const modalContact = document.getElementById('modal__contact');
const contact = document.getElementById('contact');

contact.addEventListener('click', () => {
    modalContact.classList.add('active');
})

modalContact.addEventListener('click', () => {
    modalContact.classList.remove('active');
})

//slider
const slider = document.querySelectorAll('.slider');
let index = 0;

const activeSlider = n => {
  for(let sliders of slider) {
    sliders.classList.remove('active');
  }
  slider[n].classList.add('active');
}


setInterval(() => {

  
    if(index === slider.length - 1) {
      index = 0;
      activeSlider(index);
    }
    else {
      index++;
      activeSlider(index);
    }

},13000)