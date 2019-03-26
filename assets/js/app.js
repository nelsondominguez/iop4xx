// JavaScript document
'use strict';

var appData = {
    title: 'inside out - js',
    tagLine: 'continuously falling forward into the light...'
};

window.addEventListener('load', initializeApplication);

function initializeApplication() {

    document.title = appData.title;

    document.body.style.backgroundColor = '#BBB';
    document.body.style.textAlign = 'center';
    document.body.style.fontSize = '3em';

    var elWrapper = document.createElement('div');
    elWrapper.id = 'applicationWrapper';
    document.body.appendChild(elWrapper);

    var elHeader = document.createElement('header');
    elWrapper.appendChild(elHeader);

    var elHeaderTitle = document.createElement('h1');
    elHeaderTitle.innerHTML = appData.title;
    elHeader.appendChild(elHeaderTitle);
    elHeaderTitle.className = 'animated bounceInDown';

    var elHeaderTagLine = document.createElement('h2');
    elHeaderTagLine.textContent = appData.tagLine;
    elHeaderTagLine.style.fontSize = '.4em';
    elHeader.appendChild(elHeaderTagLine);
    elHeaderTagLine.className = 'animated bounceInLeft';

    var elMain = document.createElement('main');
    elMain.innerHTML = '<p>Hello World!</p>';
    elWrapper.appendChild(elMain);
    elMain.className = 'animated zoomIn';

    var elFooter = document.createElement('footer');
    elFooter.innerHTML = '<h4>get excited about learning JavaScript...</h4>';
    elWrapper.appendChild(elFooter);
    elFooter.className = 'animated bounceInRight';

    elMain.innerHTML += '<div style="width: 40%; margin: auto; padding:10px; margin-bottom: 20px;"><div class="progress" style="height: 20px;"><div id="loaderProgressBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="30" aria=valuemin="0" aria-valuemax="100"></div></div></div>';


    displayPB();
}

var timerCount = 0;
function displayPB(){
    if (timerCount <= 100){
        var x = (timerCount < 25) ? '' : (timerCount < 45) ? timerCount + '%' : (timerCount < 65) ? 'Loading ' + timerCount + '%' : 'Loading Application' + timerCount + '%';
        document.getElementById("loaderProgressBar").innerHTML = x;
        document.getElementById('loaderProgressBar').setAttribute('aria-valuenow', timerCount);
        document.getElementById('loaderProgressBar').style.width = timerCount + '%    ';
        timerCount++;
        setTimeout(displayPB, 50);
    } else{
        timerCount = 0;

        document.body.innerHTML = formLogin();

        return false;
    }
}


// start step-402
function formLogin(){
    return '<form id="loginFrm" name="loginFrm" action="#" class="animated zoomIn"><div class="form-group"><label for="email">Email address:</label><input type="email" class="form-control" id="email"value="me@there.com"></div><div class="form-group"><label for="pwd">Password:</label><input type="password" class="form-control" id="pwd" value="dfdf"></div><div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox">Remember me </label></div><button id="loginBtn" type="submit" class="btn btn-primary" onclick="validateLogin()">Submit</button></form>';
}


function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    if (email !== '' && password !== '') {
        document.body.innerHTML = '<main class="animated zoomIn"><h1 id="inNow"> We are in now</h1></main>';
    } else {
        alert('bad');
    }
    return false;
}
