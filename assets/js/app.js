// JavaScript Document
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

    elMain.innerHTML += '<div style="width: 40%; margin: auto; padding:10px; margin-bottom: 20px;"><div class="progress" style="height: 20px;"><div id="loaderProgressBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div></div></div>';

     displayPB();
}

var timerCount = 0;
function displayPB() {
    if (timerCount <= 100) {
        var x = (timerCount < 25) ? '' : (timerCount < 45) ? timerCount + '%' : (timerCount < 65) ? 'Loading ' + timerCount + '%' : 'Loading Application ' + timerCount + '%';
        document.getElementById("loaderProgressBar").innerHTML = x;
        document.getElementById('loaderProgressBar').setAttribute('aria-valuenow', timerCount);
        document.getElementById('loaderProgressBar').style.width = timerCount + '%    ';
        timerCount++;
        setTimeout(displayPB, 50);
    } else {
        timerCount = 0;

        //start step-402
        document.body.innerHTML = formLogin();
        //end step-402

        return false;
    }
}

function formLogin() {
    return '<form id="loginFrm" name="loginFrm" action="#" class="animated zoomIn"><div class="form-group"><label for="email">Email address:</label><input type="email" class="form-control" id="email" value="me@there.com"></div><div class="form-group"><label for="pwd">Password:</label><input type="password" class="form-control" id="pwd" value="dfdf"></div><div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox">Remember me </label></div><button id="loginBtn" type="submit" class="btn btn-primary" onclick="validateLogin()">Submit</button></form>';
}

function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    if (email !== '' && password !== '') {
        //document.body.innerHTML = '<main class="animated zoomIn"><h1 id="inNow">We are in now</h1></main>';
        applicationUserInterface();
    } else {
        alert('bad');
    }
    return false;
}

function applicationUserInterface() {
    let header = '<div class="container-fluid"><div class="row"><div class="col-12"><nav id="header" class="navbar navbar-dark fixed-top bg-dark"><a class="navbar-brand" data-dest="logoLink"  href="#">inside out</a></nav></div></div>';
    let main = '<div class="row contStage"><div class="col-2">' + buildMenu() + '</div><div class="col-10">' + buildMain() + '</div></div>';
    let footer = '<div class="row"><div class="col-12"><nav id="footer" class="navbar fixed-bottom navbar-dark bg-dark"></nav></div></div></div>';
    document.body.style.backgroundColor = '#FFF';
    document.body.innerHTML = header + main + footer;

    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) links[i].onclick = function () {
        linkClicked(this);
    }
}

function buildMenu() {
    return '<nav class="sidebar animated slideInLeft"><ul class="nav flex-column"> <li class="nav-item"> <a class="nav-link active" data-dest="link01" href="#">Active</a> </li><li class="nav-item"> <a class="nav-link" data-dest="link02"  href="#">Link</a> </li><li class="nav-item"> <a class="nav-link" data-dest="link03" href="#">Link</a> </li><li class="nav-item"> <a class="nav-link disabled" data-dest="link04" href="#">Disabled</a> </li></ul></nav>';
}

function buildMain() {
    return '<main id="main" role="main"><h1 class="animated zoomIn">Main Content</h1></main>';
}

function linkClicked(obj) {
    console.log(obj.dataset.dest);
    var str = '<h1 class="animated zoomIn">' + obj.dataset.dest + ' was clicked!</h1>';
    document.getElementById("main").innerHTML = str.repeat(20);
}
