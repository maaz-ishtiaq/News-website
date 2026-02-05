export default async function handler(req, res) {
  const apiKey = process.env.VITE_API_KEY;
  const { category = 'business', country = 'us' } = req.query;

  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "API fetch failed" });
  }
}