// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import menu from '../../libs/menu';

export default function handler(req, res) {
  res.status(200).json(menu);
}
