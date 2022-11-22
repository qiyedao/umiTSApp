import CryptoJS from 'crypto-js';
const iv = '';
export const Encrypt = (message: string, key: string) => {
  const keyWordArray = CryptoJS.enc.Utf8.parse(key);
  const cipher = CryptoJS.AES.encrypt(message, keyWordArray, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
    iv: CryptoJS.enc.Utf8.parse(iv),
  });
  const base64Cipher = cipher.ciphertext.toString(CryptoJS.enc.Base64);
  return base64Cipher;
};

export const Decrypt = (message: string, key: string) => {
  const keyWordArray = CryptoJS.enc.Utf8.parse(key);

  // 这里 mode, padding, iv 一定要跟加密的时候完全一样
  // 返回的是一个解密后的对象
  const decipher = CryptoJS.AES.decrypt(message, keyWordArray, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
    iv: CryptoJS.enc.Utf8.parse(iv),
  });
  // 将解密对象转换成 UTF8 的字符串
  const resultDecipher = CryptoJS.enc.Utf8.stringify(decipher);

  return resultDecipher;
};
