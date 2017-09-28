import crypto from 'crypto';
import md5 from 'js-md5';

/**
 * aes加密方法, aes/cbc/pkcs5padding, base64
 * @param data 需要加密的原文
 * @returns {string} 加密结果
 */
export function aesCipher(data) {
  console.log(data);
  const algorithm = 'aes-128-cbc';
  const key = 'aabbccddeeffgghh';
  const iv = 'aabbccddeeffgghh';

  // console.log('to be ciphered: ' + data);

  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let crypted = cipher.update(data, 'utf8', 'binary');
  crypted += cipher.final('binary');
  crypted = new Buffer(crypted, 'binary').toString('base64');
  return crypted;
}
export function aesDeCipher(data) {
  console.log(data);
  const algorithm = 'aes-128-cbc';
  const key = 'aabbccddeeffgghh';
  const iv = 'aabbccddeeffgghh';

  const clearEncoding = 'utf8';
  const cipherEncoding = 'base64';
  data = new Buffer(data, 'base64').toString('binary');
  const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
  let decoded = decipher.update(data, 'binary', 'utf8');
  decoded += decipher.final('utf8');
  return decoded;
}
export function aesCipherPri(data) {
  console.log(data);
  const algorithm = 'aes-128-cbc';
  const key = 'tuituituituibaba';
  const iv = 'tuituituituibaba';

  // console.log('to be ciphered: ' + data);

  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let crypted = cipher.update(data, 'utf8', 'binary');
  crypted += cipher.final('binary');
  crypted = new Buffer(crypted, 'binary').toString('base64');
  return crypted;
}
export function aesDeCipherPri(data) {
  console.log(data);
  const algorithm = 'aes-128-cbc';
  const key = 'tuituituituibaba';
  const iv = 'tuituituituibaba';

  const clearEncoding = 'utf8';
  const cipherEncoding = 'base64';
  data = new Buffer(data, 'base64').toString('binary');
  const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
  let decoded = decipher.update(data, 'binary', 'utf8');
  decoded += decipher.final('utf8');
  return decoded;
}
export function md5Cipher(data) {
  // console.log(md5(data));
  return md5(data);
}

/**
 *
 * @returns {string} 生成全局标识符UUID
 */
export function generateUUID() {
  if (Cookies.get('UUID') !== undefined) {
    // console.log('uuid exist');
    return Cookies.get('UUID');
  }
  const s = [];
  const hexDigits = '0123456789abcdef';
  for (let i = 0; i < 36; i += 1) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-';

  const uuid = s.join('');
  console.log(uuid);
  Cookies.set('UUID', uuid, { expires: Infinity });
  return uuid;
}
