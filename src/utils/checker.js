/**
 * Created by shiqkuangsan on 2021-03-11
 * ClassName: checker
 * Description: 规则检查器
 */

/**
 * 验证手机号
 * @param phone
 */
export const PhonePattern = /^1[34578]\d{9}$/;
export function isPhoneOk(phone) {
  return PhonePattern.test(phone);
}

/**
 * 验证密码(6-16位字母或者数字)
 * @param password
 *
 * (?!^[0-9]+$)(?!^[a-z]+$)(?!^[A-Z]+$)(?!^[^A-z0-9]+$)^[^su4e00-u9fa5]{8,}$ 密码至少包含数字、大小写字母、特殊字符两种以上，长度不小于8位
 */
export const PassPattern = /^[a-zA-Z](?=.*\d)[A-Za-z\d]{5,15}$/;
export function isPasswordOK(password) {
  return PassPattern.test(password);
}

/**
 * 4~6位数字验证码
 * @param code
 */
export const CodePattern = /^\d{4,6}$/;
export function isCodeOK(code) {
  return CodePattern.test(code);
}

/**
 * 邮箱
 * @param email
 */
export const EmailPattern = /^([a-zA-Z\d])(\w|\-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/;
export function isMailK(email) {
  return EmailPattern.test(email);
}

/**
 * ip地址
 * @param ip
 */
export const IpPattern =
  /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){6}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^::([\da-fA-F]{1,4}:){0,4}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:):([\da-fA-F]{1,4}:){0,3}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){2}:([\da-fA-F]{1,4}:){0,2}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){3}:([\da-fA-F]{1,4}:){0,1}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){4}:((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$|^:((:[\da-fA-F]{1,4}){1,6}|:)$|^[\da-fA-F]{1,4}:((:[\da-fA-F]{1,4}){1,5}|:)$|^([\da-fA-F]{1,4}:){2}((:[\da-fA-F]{1,4}){1,4}|:)$|^([\da-fA-F]{1,4}:){3}((:[\da-fA-F]{1,4}){1,3}|:)$|^([\da-fA-F]{1,4}:){4}((:[\da-fA-F]{1,4}){1,2}|:)$|^([\da-fA-F]{1,4}:){5}:([\da-fA-F]{1,4})?$|^([\da-fA-F]{1,4}:){6}:$/;

/**
 * 数字
 * @param number
 */
export const NumberPattern = /^[0-9]*$/;
export function isNumberOK(code) {
  return NumberPattern.test(code);
}
