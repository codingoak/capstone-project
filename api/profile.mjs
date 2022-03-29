export default function handler(req, res) {
  const { method } = req;

  if (method !== 'POST') {
    res.status(405).json('Method not allowed');
  }

  const { code } = req.body;

  if (!code) {
    return res.status(400).json('Bad request');
  }

  res.status(200).json(code);
}
