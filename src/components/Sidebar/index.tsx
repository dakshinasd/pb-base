import Link from "next/link";
import React, { useContext } from "react";
import { AuthContext } from "../../AuthContext";

import sidebarLinks from "./links";

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  if (!user?.token) {
    return null;
  }

  return (
    <aside className="w-[250px] bg-slate-500 text-white h-screen">
      <ul>
        {sidebarLinks.map((link) => (
          <li key={link.name}>
            <Link
              className="block p-2 hover:bg-slate-400 cursor-pointer"
              href={link.path}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
