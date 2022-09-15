const openPopUp = document.querySelector('.open_pop_up');
const closePopUp= document.querySelector('.close_pop_up');
const popUp = document.querySelector('.pop_up');
console.log(closePopUp);

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})