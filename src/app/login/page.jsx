"use client";
import styles from "./login.module.css";
import InputGroup from "../../components/input/input";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

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
      notify("warn", "Informe seu Email");
      return;
    }
    if (user.password == "") {
      notify("warn", "Informe sua senha");
      return;
    }

    setUser({ email: "", password: "" });
    notify("success", "Formulário enviado com sucesso!");
  };

  return (
    <main>
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
            <button className="button btn-success">Entrar</button>
            <button className="button btn-danger">Cadastrar</button>
          </div>
        </form>
      </section>
    </main>
  );
}
