# [Malt To CV](https://reactjs.org/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) ![version](https://img.shields.io/badge/version-v1.0.0-blue.svg?maxAge=2592000)

Malt To CV is a script to make your Malt profile into an exportable PDF file.

## Usage

* Go to `https://www.malt.fr/profile/YOURPROFILENAME?overview=true` with Chrome

* Press `CTRL + SHIFT + J` in Windows and Linux environments or `CMD + OPTION + J` in a Mac environment.

* Copy and paste the following into the console.

```javascript
var script=document.createElement("script");script.type = "text/javascript";script.src="https://cdn.jsdelivr.net/gh/DylanMerigaud/malt-to-cv/script.js";document.head.appendChild(script);
```

* Press `CTRL + P` in Windows and Linux environments or `CMD + P` in a Mac environment.

* Set the following settings:

  * Destination: Save as PDF.

  * Layout: Portrait.

  * Paper size: A4.

  * Margins: None.

  * Scale: 50%.

* Save and enjoy !