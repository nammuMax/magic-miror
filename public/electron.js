const path = require('path');
const fs = require('fs');
const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const serve = require('electron-serve');

const configFile = path.join(__dirname, 'config.json');
const loadURL = serve({ directory: 'build' });
let mainWindow;

const createWindow = () => {
	mainWindow = new BrowserWindow({
		width: isDev ? 1000 : 600,
		height: 1024,
		frame: isDev,
		fullscreen: !isDev,
		webPreferences: {
			nodeIntegration: false,
			preload: path.join(__dirname, 'preload.js'),
		},
	});

	if (isDev) {
		mainWindow.loadURL('http://localhost:3000');
		mainWindow.webContents.openDevTools();
	}
	else
		loadURL(mainWindow);

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
};

app.on('ready', createWindow);

app.on('activate', () => {
	if (mainWindow === null)
		createWindow();
});

ipcMain.handle('fetchConfig', () => {
	return JSON.parse(fs.readFileSync(path.join(configFile)));
});