// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import menu from '../../libs/menu';

export default async function getData() {
  const JSONData = JSON.stringify(menu);
  return Promise.resolve(JSONData);
}
