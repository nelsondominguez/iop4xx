// JavaScript Document

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



}
