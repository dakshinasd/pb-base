import { useRouter } from "next/router";
import { MouseEvent, useContext, useState } from "react";

import { AuthContext } from "../../AuthContext";
import { Button, Input } from "../../components";

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
        <Input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleClickOnLogin}>Login</Button>
      </form>
    </div>
  );
};

export default Login;
