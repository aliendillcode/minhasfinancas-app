import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Minhas Finanças",
  Description: "Minhas Finnaças",
};

export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <ToastContainer autoClose={3000} />
        {children}
      </body>
    </html>
  );
}
