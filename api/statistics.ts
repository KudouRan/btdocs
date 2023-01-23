import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async (request: VercelRequest, response: VercelResponse) => {
  let query = '';
  Object.keys(request.query).forEach((key) => {
    const value = request.query[key];
    query += `${key}=${Array.isArray(value) ? value.join(',') : value}&`;
  });
  const headers = Object.keys(request.headers)
    .filter((key) => key.startsWith('x-'))
    .reduce((obj, key) => {
      obj[key] = request.headers[key];
      return obj;
    }, {});

  const options = {
    method: request.method,
    headers,
  };

  if (request.method !== 'GET') {
    options.body = request.body;
  }

  const res = await fetch(process.env.VERCEL_TJ_URL + '?' + query, options);
  return response.status(200).json(await res.json());
};
