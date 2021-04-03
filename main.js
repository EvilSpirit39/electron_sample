// ウィンドウ操作用のインポート
const {app, BrowserWindow} = require("electron");
// パス操作用のインポート
const path = require("path");

/**
 * プリロードスクリプト付きのウィンドウを作る関数
 */
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });
  win.loadFile("index.html");
}

// アプリケーションの初期化後にウィンドウを作る
app.whenReady().then(() => {
  createWindow();

  // アプリケーションがアクティブなのにウィンドウが無いときウィンドウを作る
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    // Mac以外なら終了(MacはOSが処理するので不要)
    app.quit();
  }
});
