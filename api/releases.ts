import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async (request: VercelRequest, response: VercelResponse) => {
  const res = await fetch(
    'https://api.github.com/repos/Kudouran/BiliOutils/releases/latest',
    {
      method: 'GET',
    }
  );
  const data = await res.json();
  return response.status(200).json({ data });
};
