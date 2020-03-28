
type PolicieHandler = (value: string | undefined | null) => boolean

/**
 * 空文字列かどうか
 * @param value 比較対象
 */
export const required: PolicieHandler = (value) => !((value == null) || value === '');

/**
 * 数値かどうか
 * @param value 比較対象
 */
export const numeric: PolicieHandler = (value) => !(Number.isNaN(Number(value)));

/**
 * アルファベットかどうか
 * @param value 比較対象
 */
export const alpha: PolicieHandler = (value) => /([a-z][A-Z])/.test(value);

/**
 * アルファベットと数値かどうか
 * @param value 比較対象
 * ref https://qiita.com/sakuro/items/1eaa307609ceaaf51123
 */
export const alphaNum: PolicieHandler = (value) => alpha(value) || numeric(value);

/**
 * 特殊文字かどうか
 * @param value 比較対象
 */
export const spChars: PolicieHandler = (value) => /(\-\_\(\)\{\}\+\=\!\~\<\>\?)/.test(value);

/**
 * EMailかどうか
 * @param value 比較対象
 * ref https://qiita.com/sakuro/items/1eaa307609ceaaf51123
 */
export const email: PolicieHandler = (value) => /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);


const validation = {
  alpha,
  spChars,
  numeric,
  required,
  email,
}
export default validation;