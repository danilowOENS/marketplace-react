import React, { useState } from "react";
import Input from "../Input";
import "./Cadastro.scss";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [count, setCount ] = useState(1);
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState()

const resposta = texto => {
  setMensagem(texto);
  setTimeout(() => {
    setMensagem("")
  }, 3000);
}

  const handleSubmit = e => {
    e.preventDefault();

   
    if (email === confirmEmail) {
      const payload = {
      name:nome,
      email:email,
      confirm_email: confirmEmail,
      password: senha
    }

    localStorage.setItem(`Dados${count}`, JSON.stringify(payload));
    setCount(count + 1)

    setNome("");
    setEmail("");
    setConfirmEmail("");
    setSenha("");
    setStatus(true)
    resposta("cadastro com sucesso")

  } else {
    resposta("Os emails não correspondem");
    setStatus(false);
    }
  };


  return (
    <div className="Cadastro">
      <h1>faça seu cadastro</h1>
      <p style={status ? {color: "green"} : {color: "red"}}>{mensagem}</p>
      <form onSubmit={handleSubmit}>
        <Input
          value={nome}
          type="text"
          label="Nome"
          placeholder="Nome completo"
          atualizarState={setNome}
          obrigatorio
        />
        <Input
          value={email}
          type="email"
          label="Email"
          placeholder="Digite seu email"
          atualizarState={setEmail}
        />
        <Input
          value={confirmEmail}
          type="email"
          label="Confirmar Email"
          placeholder="Confirme seu email"
          atualizarState={setConfirmEmail}
          obrigatorio
        />
        <Input
          value={senha}
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          atualizarState={setSenha}
          obrigatorio
        />
        <button>Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
