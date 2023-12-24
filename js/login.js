const usernameSign = document.getElementById('usernameSign')
const passwordSign = document.getElementById('passwordSign')
const login = document.getElementById('login')
console.log(usernameSign, passwordSign, login);

const usernameEnter = document.getElementById('usernameEnter')
const passwordEnter = document.getElementById('passwordEnter')
const btnEnter = document.getElementById('btnEnter')

function firstWork() {
    let registered = JSON.parse(localStorage.getItem('sign'))
    if (!registered) {
        localStorage.setItem('sign', '[]')
    }
}
firstWork()

login.onclick = record
function record() {
    if (usernameSign.value.trim() != '' && passwordSign.value.trim() != '') {
        let areRegistered = JSON.parse(localStorage.getItem('sign'))
        let user = {
            username: usernameSign.value,
            pass: passwordSign.value
        }
        areRegistered.push(user)
        localStorage.setItem('sign', JSON.stringify(areRegistered))
    }
}
function enter() {
    let areRegistered = JSON.parse(localStorage.getItem('sign'))
    let match = areRegistered.filter(member => member.username == usernameEnter.value && member.pass == passwordEnter.value)
    if (match.length != 0) {
        window.location.href = '../index.html';
    }
}

