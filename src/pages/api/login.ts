import cookie from "cookie";

export default async function handler(req, res) {
  const API_URL = "http://localhost:8090/api";

  if (req.method === "POST") {
    // destructure email, and password
    const { username, password } = req.body;

    // Making a post request to hit our backend api-endpoint
    const apiRes = await fetch(
      `${API_URL}/collections/users/auth-with-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identity: username,
          password,
        }),
      }
    );

    const data = await apiRes.json();

    if (apiRes.ok) {
      // Set Cookie
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", String(data.token), {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json({ user: data });
    } else {
      res.status(data.code).json({ message: data.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
