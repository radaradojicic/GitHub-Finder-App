function onSearch() {
    /*to do
        proveriti da li je korisnik uneo username
        ako nije izbacicemo mu gresku (alert a mozemo i text ispisati kao poruku u HTML dokumentu)
        ako je sve okej, mozemo da dobavljamo podatke sa Github API (fetch)
    */
    console.log('Button clicked');
    if (username.value === '') {
        //korisnik nije uneo nista u Search
        //alert('Please Enter Username');
        const errorUsername = document.getElementById('error-username');
        errorUsername.innerHTML = 'Please Enter Username';
    } else {
        //to do fetch data
    }

}

const username = document.getElementById('username');
const searchBtn = document.getElementById('search');

searchBtn.addEventListener('click', onSearch);