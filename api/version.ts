import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async (_request: VercelRequest, response: VercelResponse) => {
  // 从 npm 获取最新版本号、
  const npmVersion = await fetch('https://registry.npmjs.org/bilioutils/latest')
    .then((res) => res.json())
    .then((res) => res.version);
  return response.status(200).json({
    tag_name: npmVersion || process.env.VERVEL_TAG_NAME,
    notice: {
      common: [
        '本项目开源且免费，文档地址 https://b.2024666.xyz，使用请自觉 star。积分任务已更新！',
      ],
      scf: [],
      fc: [],
      agc: [],
      cfc: ['百度云函数即将收费于 3.10'],
      fg: [],
    },
  });
};
