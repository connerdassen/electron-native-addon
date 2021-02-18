const { app, BrowserWindow, ipcMain } = require('electron');


const testaddon = require('./addon/build/Release/testaddon')

//fires once you click the button in the window
ipcMain.on('testClicked', () => {
    console.log(testaddon.HelloWorld());
});


//standard Electron boilerplate below, doesn't matter for this example
function createWindow () {
    const win = new BrowserWindow(
        {
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                nodeIntegrationInWorker: true,
                contextIsolation: false
            }
        }
    );

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})