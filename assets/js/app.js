// JavaScript Document

'use strict';

var applicationTitle = 'inside out - js';

var applicationTagLine = 'continuously falling forward into the light...';

window.addEventListener('load', initializeApplication);

function initializeApplication() {

    document.title = applicationTitle;

    document.body.style.backgroundColor = '#BBB';
    document.body.style.textAlign = 'center';
    document.body.style.fontSize = '3em';

    var elWrapper = document.createElement('div');
    elWrapper.id = 'applicationWrapper';
    document.body.appendChild(elWrapper);

    var elHeader = document.createElement('header');
    elWrapper.appendChild(elHeader);

    var elHeaderTitle = document.createElement('h1');
    elHeaderTitle.innerHTML = applicationTitle;
    elHeader.appendChild(elHeaderTitle);

    var elHeaderTagLine = document.createElement('h2');
    elHeaderTagLine.textContent = applicationTagLine;
    elHeaderTagLine.style.fontSize = '.4em';
    elHeader.appendChild(elHeaderTagLine);

    var elMain = document.createElement('main');
    elMain.innerHTML = '<p>Hello World!</p>';
    elWrapper.appendChild(elMain);

    var elFooter = document.createElement('footer');
    elFooter.innerHTML = '<h4>get excited about learning JavaScript...</h4>';
    elWrapper.appendChild(elFooter);

    elHeaderTitle.className = 'animated bounceInDown';
    elHeaderTagLine.className = 'animated bounceInLeft';
    elMain.className = 'animated zoomIn';
    elFooter.className = 'animated bounceInRight';

}
