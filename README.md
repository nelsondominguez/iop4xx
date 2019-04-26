# iop4xx
PGR-160-3485 JavaScript repo for the iop-4xx project

<p>https://nelsondominguez.github.io/iop4xx/</p>

<p>Preparing project for development</p>

<p>- added html5-boilerplate_v6.1.0 files to application</p>

<p>inside out project version 400.0</p>

<p>- added base code to index.html and added initial JavaScript to app.js page</p>

<p>inside out project version 401.0</p>

<p>created the appData object</p>

<p>moved the title & tagline variables into appData and refractored the initializeApplication function</p>

<p>inside out project version 401.1</p>

<p> - added bootstrap to the index.html</p>
<p> - added a DOM injection of the progressbar in the app.js</p>
<p> - created the displayPB function in the app.js</p>

<p>inside out project version 402.0</p>

<p> - added style.css and linked in index.html</p>
<p> - added login form function and call after progress bar is loaded</p>
<p> - added minimal validateLogin function to check for blank strings</p>

<p>inside out project version 403.0</p>
<p>-index.html</p>

<p>updated all hrefs/links to passive protocol</p>
<p>moved style sheet link below animate and bootstrap to allow for custom styles to override all</p>
<p>style.css</p>

<p>added styles for application interface - sidebar, wrapper, navigation, etc.</p>
<p>app.js</p>

<p>added the applicationUserInterface function which defines the application user interface.</p>
<p>added the buildMenu function which returns the navigation menu and will increase in dynamic navigation building</p>
<p>added the buildMain function which returns the primary content area and will evolve to return content dynamically</p>
<p>replaced document write with call to applicationUserInterface function in the validateLogin function</p>
<p>added the linkClicked function which is called by click events on anchor elements and returns dynamically driven results</p>
