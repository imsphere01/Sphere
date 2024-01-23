const toggler = document.querySelector('.yearToggler');
const yearList = document.querySelector('.yearsContent');
toggler.addEventListener('click',()=>{
    yearList.classList.toggle('show');
    toggler.classList.toggle('yearTogglerRotate');
})
