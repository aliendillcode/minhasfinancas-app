import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../components/input/layout/navbar";

export const metadata = {
  title: "Minhas Finanças",
  Description: "Minhas Finnaças",
};

export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <Navbar />
        </header>

        <main>
          <ToastContainer autoClose={3000} />
          {children}
        </main>
      </body>
    </html>
  );
}
