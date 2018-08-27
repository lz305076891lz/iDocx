import {mergeDeepRight, path} from 'ramda';

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export async function handleFetch(url, options = {}) {
  const defaultOptions = {
    method: 'GET',
    credentials: 'same-origin',
  };

  if (path(['method'], options) === 'POST') {
    defaultOptions.headers = {
      'Content-Type': 'application/json',
    };
  }

  const resultOptions = mergeDeepRight(defaultOptions, options);

  const res = await fetch(url, resultOptions);

  checkStatus(res);

  return res.json();
}
