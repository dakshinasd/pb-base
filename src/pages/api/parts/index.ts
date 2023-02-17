export default async function handler(req, res) {
  const API_URL = "http://localhost:8090/api";

  if (req.method == "GET") {
    const apiRes = await fetch(`${API_URL}/collections/parts/records`, {
      headers: {
        Authorization: req.cookies?.token,
      },
    });

    const data = await apiRes.json();

    if (apiRes.ok) {
      res.status(200).json({ data });
    } else {
      res.status(data.code).json({ message: data.message });
    }
  }
}
