$(document).ready(function() {
    $('#auth-form').submit(function(event) {
        event.preventDefault();
        let password = $('#auth-form-password').val();
        let email = $('#auth-form-email').val();
        let errorContainer = $('#auth-form-errors');
        let errors = [];

        if (!validateEmail(email)) {
            errors.push('Неверный адрес электронной почты');
        }

        if(password.length < 6) {
            errors.push('Пароль должен состоять не менее, чем из 6 символов');
        }

        if(!/[A-ZА-ЯЁ]/.test(password)) {
            errors.push('Пароль должен содержать символы разных регистров');
        }

        if(!/[0-9]/.test(password)) {
            errors.push('Пароль должен содержать цифры');
        }

        if(!/[^а-яё].*\W+/.test(password)) {
            errors.push('Пароль должен содержать специальные символы');
        }
        
   
        errorContainer.html('');
        $.each(errors, function(){
            errorContainer.append('<p> - ' + this + '</p>');
        });
    });

    showClock();

    let isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);

    if(isIE) {
        alert('Вы используете неверный браузер!');
    }
});

function showClock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let sec = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let weekday = date.getDay();
    let months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ];
    let dayNames = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];

    document.getElementById('clock').innerHTML = dayNames[weekday]
        + ', '
        + day 
        + ' '
        + months[month]
        + ' '
        + year
        + ' года, '
        + (hour < 10 ? '0' : '')
        + hour
        + ':'
        + (minute < 10 ? '0' : '')
        + minute
        + ':'
        + (sec < 10 ? '0' : '')
        + sec;

    window.setTimeout('showClock()',1000);
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
