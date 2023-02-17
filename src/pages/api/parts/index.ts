export default async function handler(req, res) {
  const API_URL = "http://localhost:8090/api/collections/parts/records";
  console.log("PART API", req.method);

  if (req.method == "GET") {
    const apiRes = await fetch(`${API_URL}`, {
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

  if (req.method == "POST") {
    console.log("inside post");
    const { name } = req.body;

    const createResponse = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: req.cookies?.token,
      },
      body: JSON.stringify({
        name: name,
      }),
    });
    const data = await createResponse.json();

    if (createResponse.ok) {
      res.status(200).json({ data });
    } else {
      res.status(data.code).json({ message: data.message });
    }
  }
}
