const colorTheme = document.querySelector('.page-theme');
const colorThemeIcon = document.querySelector('.page-theme img');
const colorThemeText = document.querySelector('.page-theme p');
const body = document.querySelector('body');
const form = document.querySelector('form');
const main = document.querySelector('main');
const numbers = document.querySelector('.numbers');
const input = document.querySelector('form input');
const placeholder = document.querySelector('form input').placeholder;
const joined = document.querySelector('.right p');
const footer = document.querySelectorAll('.info p');
const footerIcons = document.querySelectorAll('.info img');
const numberData = document.querySelectorAll('.numbers-data p');
const numberActual = document.querySelectorAll('.numbers-data h3');
const searchButton = document.querySelector('.search');

const name = document.querySelector('.name h1');
const userNameActual = document.querySelector('.name h2');
const profileImage = document.querySelector('.image-container img');
const bioActual = document.querySelector('.bio');
const noResults = document.querySelector('.no-results');
const anotherSearch = document.querySelector('.search-another');


/* SEARCH BUTTON FUNCTION */
searchButton.addEventListener('click', (e)=>{
    e.preventDefault();
    const userName = input.value;
    /* console.log(userName); */
    fetch(`https://api.github.com/users/${userName}`)
      .then(response => response.json())
      .then(data => {
        const nameData = data.name;
        const loginName = data.login;
        const avatar = data.avatar_url;
        const bio = data.bio;
        let joinedDate = data.created_at;
        const repo = data.public_repos;
        const followers = data.followers;
        const following = data.following;
        const location = data.location;
        const twitter = data.twitter_username;
        const email = data.email;
        const company = data.company;
        
        if(nameData == null){
            noResults.classList.add('show');
            main.style.display = 'none';
            anotherSearch.classList.add('show');
            console.log(anotherSearch);

        } else{
            name.textContent = nameData;
            noResults.classList.remove('show');
            if(window.innerWidth < 760){
                main.style.display = 'block';
            } else{
                main.style.display = 'grid';
            }
            anotherSearch.classList.remove('show');
        }

        userNameActual.textContent = '@ ' + loginName;
        profileImage.src = avatar;
        joined.textContent = 'Joined on ' + joinedDate.slice(0,10);
        if(bio == null){
            bioActual.textContent = 'No bio updated yet';
        } else{
            bioActual.textContent = bio;
        }
        numberActual[0].textContent = repo;
        numberActual[1].textContent = followers;
        numberActual[2].textContent = following;
        
        if(location == null){
            footer[0].textContent = 'Not available';
            footer[0].style.opacity = '0.6';
            footerIcons[0].style.opacity = '0.6';
        } else{
            footer[0].textContent = location;
        }
        if(twitter == null){
            footer[1].textContent = 'Not available';
            footer[1].style.opacity = '0.6';
            footerIcons[1].style.opacity = '0.6';
        } else{
            footer[1].textContent = twitter;
        }
        if(email == null){
            footer[2].textContent = 'Not available';
            footer[2].style.opacity = '0.6';
            footerIcons[2].style.opacity = '0.6';
        } else{
            footer[2].textContent =  email;
        }
        if(company == null){
            footer[3].textContent = 'Not available';
            footer[3].style.opacity = '0.6';
            footerIcons[3].style.opacity = '0.6';
        } else{
            footer[3].textContent = company.replace('@', '');
        }
        
      });
});
/* SEARCH BUTTON FUNCTION ENDS*/


/* DARK -- LIGHT PAGE THEME BUTTON */
colorTheme.addEventListener('click', ()=>{
    if(colorThemeText.textContent == 'Dark'){
        colorThemeText.textContent = 'Light';
        colorThemeIcon.src = "icon-sun.svg";
        body.style.backgroundColor = '#141D2F'
        numbers.style.backgroundColor = '#141D2F'
        body.style.color = '#fff';
        form.style.backgroundColor = '#1E2A47';
        main.style.backgroundColor = '#1E2A47';
        input.style.backgroundColor = '#1E2A47';
        input.style.color = '#fff';
        numberData.forEach((number)=>{
            number.style.color = '#fff';
        });
        numberActual.forEach((number)=>{
            number.style.color = '#fff';
        });
        footer.forEach((number)=>{
            number.style.color = '#fff';
        });
        footerIcons.forEach((number)=>{
            number.style.background = '#fff';
        });
        joined.style.color = '#fff';
        
    } else{
        colorThemeText.textContent = 'Dark';
        colorThemeIcon.src = 'icon-moon.svg';
        body.style.backgroundColor = '';
        body.style.color = '';
        form.style.backgroundColor = '';
        main.style.backgroundColor = '';
        input.style.backgroundColor = '';
        input.style.color = '';
        numbers.style.backgroundColor = ''
        numberData.forEach((number)=>{
            number.style.color = '';
        });
        numberActual.forEach((number)=>{
            number.style.color = '';
        });
        footer.forEach((number)=>{
            number.style.color = '';
        });
        footerIcons.forEach((number)=>{
            number.style.background = '';
        });
        joined.style.color = '';
    }
});
/* DARK -- LIGHT PAGE THEME BUTTON ENDS */
