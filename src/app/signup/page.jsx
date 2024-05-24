"use client";
import styles from "../login/login.module.css";
import InputGroup from "../../components/input/input";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function signUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
  });
  const router = useRouter();
  const handleInputValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const notify = (type, msg) => {
    toast[type](msg, { position: "top-right" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (user.name == "") {
      notify("warn", "Informe seu nome");
      return;
    }
    if (user.email == "") {
      notify("warn", "Informe seu Email");
      return;
    }
    if (user.password == "") {
      notify("warn", "Informe sua senha");
      return;
    }

    if (user.password != user.confPassword) {
      notify("warn", "Senha e confirmação não conferem");
      return;
    }

    setUser({ name: "", email: "", password: "", confPassword: "" });
    notify("success", "Formulário enviado com sucesso!");
  };

  return (
    <section className={styles.container}>
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit}>
        <InputGroup
          label="Nome: *"
          type="text"
          name="name"
          value={user.name}
          placeholder="Digite seu nome"
          onChange={handleInputValue}
        />
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
        <InputGroup
          label="Repita a Senha: *"
          type="password"
          name="confPassword"
          value={user.confPassword}
          placeholder="Repita a senha"
          onChange={handleInputValue}
        />
        <div className={styles.btnGroup}>
          <button type="submit" className="button btn-success">
            Cadastrar
          </button>
          <button
            type="button"
            onClick={() => router.push("/login")}
            className="button btn-danger"
          >
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
}
