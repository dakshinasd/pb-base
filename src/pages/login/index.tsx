import { useRouter } from "next/router";
import { MouseEvent, useContext, useState } from "react";

import { AuthContext } from "../../AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setUser } = useContext(AuthContext);

  const handleClickOnLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (username === "" || password === "") {
      return;
    }

    const authResponse = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const { user } = await authResponse.json();
    if (!user.token) {
      console.log(user);
      return;
    }

    localStorage.setItem("token", user.token);
    setUser(user);
    router.push("/");
  };

  return (
    <div>
      <h1>Login</h1>
      <form action="">
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClickOnLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
