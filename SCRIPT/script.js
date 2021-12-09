const hero = document.querySelector('.header-headings');
const btnDropdown = document.querySelectorAll('.btn-dropdown');
const dropdownCont = document.querySelectorAll('.dropdown-container');
const dropdownContShow = document.querySelector('.dropdown-container-show');

const arrowLight = document.querySelectorAll('.btn-dropdown-icon-light');
const arrowLightActive = document.querySelectorAll('.btn-dropdown-icon-light-active');

const arrowDark = document.querySelectorAll('.btn-dropdown-icon-dark');
const arrowDarkActive = document.querySelectorAll('.btn-dropdown-icon-dark-active');




for(let i = 0; i<btnDropdown.length; i++){
    btnDropdown[i].addEventListener('click', function(){
        
             
        hero.addEventListener('click', function(){
        dropdownCont[i].classList.remove('dropdown-container-show');
        arrowLight[i].classList.remove('btn-dropdown-icon-light-active')
        arrowDark[i].classList.remove('btn-dropdown-icon-dark-active')

        })
    
        dropdownCont[i].classList.toggle('dropdown-container-show');
        arrowLight[i].classList.toggle('btn-dropdown-icon-light-active')
             
         
     

        for(let j = 0; j<btnDropdown.length; j++){
        if(j!==i){
                dropdownCont[j].classList.remove('dropdown-container-show')
                dropdownCont[i].classList.toggle('dropdown-container-show')

                
                



                arrowLight[j].classList.remove('btn-dropdown-icon-light-active')
                arrowLight[i].classList.toggle('btn-dropdown-icon-light-active')

                arrowDark[j].classList.remove('btn-dropdown-icon-dark-active')
                arrowDark[i].classList.toggle('btn-dropdown-icon-dark-active')
            }


        }
      
    })
}



const btnNav=document.querySelector('.hamburger');
const nav=document.querySelector('.header-nav')

btnNav.addEventListener('click', function(){
    nav.classList.toggle('show-nav')
})



// 
// 