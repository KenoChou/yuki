const { app, BrowserWindow } = require('electron');
const fs = require('node:fs');
const path = require('node:path');

const isDev = Boolean(process.env.VITE_DEV_SERVER_URL);

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 900,
    minWidth: 960,
    minHeight: 720,
    backgroundColor: '#fbf9f6',
    title: 'Yuki - File Organizer',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  if (isDev) {
    mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    const rendererEntry = [
      path.join(__dirname, '../dist/renderer/index.html'),
      path.join(__dirname, '../dist/index.html'),
    ].find((entry) => fs.existsSync(entry));

    if (!rendererEntry) {
      throw new Error('Renderer build not found. Run `npm run build` before `npm start`.');
    }

    mainWindow.loadFile(rendererEntry);
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
