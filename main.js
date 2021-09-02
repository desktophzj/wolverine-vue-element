const { app, BrowserWindow } = require('electron')

let mainWindow

const winURL = `file://${__dirname}/dist/index.html`

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadURL(winURL);
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}
console.log(app);
app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    if (mainWindow === null) createWindow()
})