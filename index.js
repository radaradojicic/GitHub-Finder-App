
const toMonth = (month) => {
    if (Number(month) === 1) {
        return 'January';
    } else if (Number(month) === 2) {
        return 'February';
    } else if (Number(month) === 3) {
        return 'March';
    } else if (Number(month) === 4) {
        return 'April';
    } else if (Number(month) === 5) {
        return 'May';
    } else if (Number(month) === 6) {
        return 'June';
    } else if (Number(month) === 7) {
        return 'July';
    } else if (Number(month) === 8) {
        return 'August';
    } else if (Number(month) === 9) {
        return 'September';
    } else if (Number(month) === 10) {
        return 'October';
    } else if (Number(month) === 11) {
        return 'November';
    } else if (Number(month) === 12) {
        return 'December';
    }
}

const getUser = async (githubUsername) => {
    try { 
        document.getElementById('results').innerHTML = '';
        const url = `https://api.github.com/users/${githubUsername}`;
       
        const response = await (await fetch(url)).json();
        console.log(response)

       const result = document.getElementById('results');
     
        if (response.message === 'Not Found') {
            let responseText = `
                <article class="card">
                    <h2>User Not Found</h2>
                </article>
                `;
            console.log(result)
            result.insertAdjacentHTML('afterbegin', responseText);
        } else {
            const avatar_url = response.avatar_url;
            const name = response.name;
            const username = response.login;
            const location = response.location;
            const public_repos = response.public_repos;
            const followers = response.followers;
            const following = response.following;
            const company = response.company ? response.company : 'No Company';
            const bio = response.bio ? response.bio : 'No bio';
            let created_at = response.created_at;
            created_at = created_at.split('T')[0]; 
            //2020-06-18
            console.log(created_at.split('-')); // ['2020', '06', '18']
            //18. septembar 2020
            const yyyy = created_at.split('-')[0]; //2020
            const mm = created_at.split('-')[1]; //06
            const dd = created_at.split('-')[2]; //18

            let str_date = `${dd}. ${toMonth(mm)} ${yyyy}`;

            const email = response.email ? response.email : 'No Email';
            const blog = response.blog ? response.blog : 'No Blog';

    
            const card = `
            <h2 class="clr-primary-200 fw-bold">Results:</h2>
                <article class="card mt-1">
                    <div class="d-flex gap-2 center-items mt-1">
                        <img class="card-img" src="${avatar_url}">
                        <div class="d-block">
                            <h2 class="fs-20 fw-bold">${name}</h2>
                            <h2 class="fs-16 fw-bold clr-primary-200">${username}</h2>  
                        </div>;
                    </div>
                    <div class="d-flex justify-content mt-2 mb-2">
                        <h3 class="d-flex flex-column fs-16 fw-bold"><span class="fs-24 fw-semibold">${public_repos}</span> Repositories</h3>
                        <h3 class="d-flex flex-column fs-16 fw-bold"><span class="fs-24 fw-semibold">${followers}</span> Followers</h3>
                        <h3 class="d-flex flex-column fs-16 fw-bold"><span class="fs-24 fw-semibold">${following}</span> Following</h3>
                    </div>
                    <div class="d-flex flex-column gap-1 mt-2">
                        <p class="d-flex center-items gap-1 fs-14 fw-medium"><img src="./assets/icons/building-logo.svg">${company}</p>
                        <p class="d-flex center-items gap-1 fs-14 fw-medium"><img src="./assets/icons/location-logo.svg">${location}</p>
                        <p class="d-flex center-items gap-1 fs-14 fw-medium"><img src="./assets/icons/bio-logo.svg">${bio}</p>
                        <p class="d-flex center-items gap-1 fs-14 fw-medium"><img src="./assets/icons/oclock-logo.svg">${str_date}</p>
                        <p class="d-flex center-items gap-1 fs-14 fw-medium"><img src="./assets/icons/mail-logo.svg">${email}</p>
                        <div class="d-flex center-items gap-1 fs-14 fw-medium" ><img src="./assets/icons/link-logo.svg"><a>${blog}</a></div>
                    </div>
                </article>
            `;
            result.insertAdjacentHTML('afterbegin', card);
        }
        const footer = `
                <footer class="p-1 mt-2 bg-footer border-radius-2">
                    <p class="fw-regular">&copy;2023 GitHub Finder App | All Rights Reserved</p>
                    <p class="fw-regular">This project is coded by <a href="https://github.com/radaradojicic" target="_blank"
                            class="fw-semibold"> Rada
                            Radojicic </a>and is <a href="https://github.com/radaradojicic/GitHub-Finder-App.git" target="_blank"
                            class="fw-semibold">open-sourced</a> on GitHub.
                    </p>
                </footer>        
        `;
            result.insertAdjacentHTML('beforeend', footer);
            
    } catch (err) {
        document.getElementById('results').innerHTML = '';
        let responseText = `
            <article class="card">
                <h2>Something went wrong</h2>
            </article>
            `;
        document.getElementById('results').insertAdjacentHTML('afterbegin', responseText);
    }
}



const onSearch = () => {
    document.getElementById('results').innerHTML = '';
    if (!username.value) {
        //korisnik nije uneo nista u Search
        //alert('Please Enter Username');
        const errorUsername = document.getElementById('error-username');
        errorUsername.innerHTML = 'Please enter username';
    } else {
        //to do fetch data
        //poziv funkcije getUser prosledjujemo joj uneseni username
        getUser(username.value); //vrednost koju prosledjujemo
    }

}



const username = document.getElementById('username');
const searchBtn = document.getElementById('search');

searchBtn.addEventListener('click', onSearch);