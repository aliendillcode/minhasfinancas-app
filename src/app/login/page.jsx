"use client";
import styles from "./login.module.css";
import InputGroup from "../../components/input/input";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleRouter = (route) => {
    router.push(route);
    return;
  };

  const handleInputValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const notify = (type, msg) => {
    toast[type](msg, { position: "top-right" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (user.email == "") {
      notify("warn", "Informe seu Email login");
      return;
    }
    if (user.password == "") {
      notify("warn", "Informe sua senha");
      return;
    }

    setUser({ name: "", email: "", password: "", confPassword: "" });
    notify("success", "Formulário enviado com sucesso!");
  };

  return (
    <section className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <InputGroup
          label="Email: *"
          type="email"
          name="email"
          value={user.email}
          placeholder="Digite o Email"
          onChange={handleInputValue}
        />
        <InputGroup
          label="Senha: *"
          type="password"
          name="password"
          value={user.password}
          placeholder="Digite a senha"
          onChange={handleInputValue}
        />
        <div className={styles.btnGroup}>
          <button type="submit" className="button btn-success">
            Entrar
          </button>
          <button
            type="button"
            onClick={() => handleRouter("/signup")}
            className="button btn-danger"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </section>
  );
}
