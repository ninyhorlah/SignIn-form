let input = [
    {
        userEmail: 'esther',
        userPassword: 'ninyo'
    },
    {
        userEmail: 'dolly',
        userPassword: 'deedee'
    }
];

function userInput() {
    let inputEmail = document.getElementById('email').value
    let inputPassword = document.getElementById('password').value
        
    for (arr of input) {
                                    
        if (arr[i].userEmail === inputEmail && arr[i].userPassword === inputPassword) {
            return alert('correct password'); 
        }else {
            return alert('Wrong password');
        }
    };
};