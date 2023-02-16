import Link from "next/link";
import { useRouter } from "next/router";
import React, { MouseEvent, useContext } from "react";

import { AuthContext } from "../../AuthContext";

const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const logoutResponse = await fetch("/api/logout", {
      method: "POST",
    });

    if (logoutResponse.ok) {
      setUser(null);
      localStorage.removeItem("token");
      router.push("/login");
    }
  };
  return (
    <header className="h-[50px] bg-slate-700 text-white text-right p-2">
      {user?.token && (
        <Link href="#" onClick={handleLogout}>
          Logout
        </Link>
      )}
    </header>
  );
};

export default Header;
