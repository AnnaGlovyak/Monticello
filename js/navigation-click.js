

let navigation = document.querySelectorAll('.navigation__link');

for(let i = 0; i < navigation.length; i++){
    console.log(navigation[i])
    navigation[i].addEventListener('click', (e) => {
        navigation.forEach(element => {
        element.classList.remove('navigation__link--active')
        }); 
    e.target.classList.add('navigation__link--active')
    console.log(e.target)

})
}
