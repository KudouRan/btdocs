import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async (_request: VercelRequest, response: VercelResponse) => {
  return response.status(200).json({
    tag_name: process.env.VERVEL_TAG_NAME,
    notice: {
      common: [
        '本项目开源且免费，文档地址 https://b.2024666.xyz，使用请自觉 star。感谢春风肩上停的投喂！',
      ],
      scf: [],
      fc: [],
      agc: [],
      cfc: ['百度云函数即将收费于 3.10'],
      fg: [],
    },
  });
};
