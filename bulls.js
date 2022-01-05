const pcNum = '1234'
const pc = pcNum.split('')
// console.log(pc)
let win = false
function countBullsCows(user, pc){
    console.log('input', user, 'pc', pc)
    let cows = 0
    let bulls = 0
    for (let i = 0; i < user.length; i ++){
        if (user[i] === pc[i]) {
            bulls++
            continue
        }
        for (let j = 0; j < user.length; j++) {
            if (user[i] === pc[j]){
                cows++
            }
        }
    }
    console.log(`B ${bulls} C ${cows}`)
    return bulls === 4
}

function doTurn(){
    // ввод руками в окно
    // let userNum = document.getElementById('user').value.toString()
    // console.log(userNum)
    // не очень хороший способ делить на символы
    // let user = new Array(userNum.split(''))
    let userNum = readUser()
    console.log('user number', userNum)
    if (countBullsCows(userNum, pc)){ alert('win')}
    resetAllInputs()
}

function readUser() {
    return [
        document.getElementById('user1').value.toString(),
        document.getElementById('user2').value.toString(),
        document.getElementById('user3').value.toString(),
        document.getElementById('user4').value.toString(),
    ]
}

function check() {
    let inputList = ['user1', 'user2','user3','user3','btn_turn']
    let focusedNow = inputList.indexOf(document.activeElement.id)
    document.getElementById(focusedNow + 1).focus()

}

function resetAllInputs() {
    let inputList = ['user1', 'user2','user3','user3']
    for ( let id of inputList) {
        document.getElementById(id).value = null
    }
}