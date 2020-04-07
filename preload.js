const {electron} = require('electron')
const macaddress = require('macaddress')
const path = require('path')
// const {app} = electron.app

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])

    // console.log("Ap path:", app.getAppPath())
    // console.log("dir Name", __dirname)
    // console.log("PAth details", path.join(__dirname, '/../build/index.html'))
  
  }

  macaddress.one(function (err, mac) {
    replaceText(`machine-id`, mac)
    console.log("Mac address for this host: %s", mac);
    console.log("driname: %s", __dirname);
    // console.log("get app path: %s", app.getAppPath);
    console.log("path: %s", path.join(__dirname, '../index.html'),);
  });
})
