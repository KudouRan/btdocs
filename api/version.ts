import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async (request: VercelRequest, response: VercelResponse) => {
  return response.status(200).json({
    data: {
      tag_name: 'v0.22.1209',
    },
  });
};
