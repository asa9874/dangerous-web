import $ from 'jquery'

$('.title-button').on("click",toggleChangeTitle)
let intervalId
let isRunning = false;
function toggleChangeTitle() {
    if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
        $('title').text("원래제목이 뭐더라");
    } else {
        intervalId = setInterval(() => {
            $('title').text(getRandomString(20));
        }, 100);
        isRunning = true;
    }
}

function getRandomString(length) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
