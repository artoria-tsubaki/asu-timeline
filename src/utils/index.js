/**
 * @description 获取浏览器默认语言
 * @returns {String}
 */
export function getBrowserLang() {
  let browserLang = navigator.language ? navigator.language : navigator.browserLanguage;
  let defaultBrowserLang = "";
  if (["cn", "zh", "zh-cn"].includes(browserLang.toLowerCase())) {
    defaultBrowserLang = "zh";
  } else if (["jp", "ja"].includes(browserLang.toLowerCase())) {
    defaultBrowserLang = "ja";
  } else {
    defaultBrowserLang = "en";
  }
  return defaultBrowserLang;
}