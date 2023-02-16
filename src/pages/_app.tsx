import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import "../../styles/globals.css";
import AuthProvider, { AuthContext } from "../AuthContext";
import { useContext } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex">
      <AuthProvider>
        <Sidebar />
        <main className="flex-1">
          <Header />
          <Component {...pageProps} />
        </main>
      </AuthProvider>
    </div>
  );
}

export default MyApp;
