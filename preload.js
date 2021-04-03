// ページロード完了のイベント
window.addEventListener("DOMContentLoaded", () => {
  // プレースホルダのテキストに内容を設定する関数
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  }
  
  // 指定したIDに適用
  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});
