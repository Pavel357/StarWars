import { HTTP, HTTPS } from "constants/api";


/**
 * Изменяет URL с HTTP на HTTPS
 * @param {string} url - url для изменения 
 * @returns {string} - url с HTTPS
 */
export const changeHTTP = url => {
  const result = url ? url.replace(HTTP, HTTPS) : url;

  return result;
}

/**
 * Отправляет запрос Fetch
 * @param {string} url - url для запроса
 * @returns {Promise} - Promise с результатом запроса
 */
export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error('Could not fetch: ', res.status);
      return false;
    }
    const body = await res.json();
    return body;
  } catch (error) {
    console.error('Could not fetch: ', error.message);
    return false;
  }
}

export const makeConcurrentRequest = async (url) => {
  const res = await Promise.all(url.map(res => {
    return fetch(res).then(res => res.json());
  }));

  return res;
}