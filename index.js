
const getUser = async (githubUsername) => {
    const url = `https://api.github.com/users/${githubUsername}`;
        //const url2 = `https://api.github.com/users/` + githubUsername;
        //console.log (url2);
        //const response = await fetch(url);
        //const json = await response.json(); *response je json onjekat
        //prvo dobavimo podatke, stavimo ih u zagradu i onda sacekamo da se ti podaci transformisu u json objekat
        const response = await (await fetch(url)).json();
        console.log(response)

        //new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
       // console.log(new Date());
         //ispisivanje rezultata u kontejneru "results"
       const result = document.getElementById('results');
       // const created_at = new Date();
        //created_at.toDateString();

        // if (response.message === '2022-09-12T18:21:24Z') {
       //     let responseText 
       // }

    
        
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
            const created_at = response.created_at;
            const email = response.email ? response.email : 'No Email';
            const blog = response.blog ? response.blog : 'No Blog';
        
            const card = `
                <article class="card mt-4">
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
                    <p class="d-flex center-items gap-1 fs-14 fw-medium clr-secondary-200"><img src="./assets/icons/bio-logo.svg">${bio}</p>
                    <p class="d-flex center-items gap-1 fs-14 fw-medium"><img src="./assets/icons/oclock-logo.svg">${created_at}</p>
                    <p class="d-flex center-items gap-1 fs-14 fw-medium clr-secondary-200"><img src="./assets/icons/mail-logo.svg">${email}</p>
                    <div class="d-flex center-items gap-1 fs-14 fw-medium" ><img src="./assets/icons/link-logo.svg"><a>${blog}</a></div>
                </div>
        

                    
        
                </article>
            `;
            result.insertAdjacentHTML('afterbegin', card);
        }
}

const onSearch = () => {
    console.log('Button clicked');
    if (username.value === '') {
        //korisnik nije uneo nista u Search
        //alert('Please Enter Username');
        const errorUsername = document.getElementById('error-username');
        errorUsername.innerHTML = '';
    } else {
        //to do fetch data
        //poziv funkcije getUser prosledjujemo joj uneseni username
        getUser(username.value); //vrednost koju prosledjujemo
    }

}

const username = document.getElementById('username');
const searchBtn = document.getElementById('search');

searchBtn.addEventListener('click', onSearch);