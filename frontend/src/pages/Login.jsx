import { useState } from "react";

export default function Login() {
  const [ra, setRa] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    if (!ra || !senha) {
      alert("Preencha todos os campos");
      return;
    }

    console.log("Login enviado:", { ra, senha });
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Portal do Aluno</h2>

      <input
        style={styles.input}
        placeholder="Matrícula"
        value={ra}
        onChange={(e) => setRa(e.target.value)}
      />

      <input
        style={styles.input}
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button style={styles.button} onClick={handleLogin}>
        Entrar
      </button>

      <span style={styles.link}>Esqueci minha senha</span>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    margin: "120px auto",
    gap: "12px",
  },
  title: {
    textAlign: "center",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    cursor: "pointer",
  },
  link: {
    fontSize: "12px",
    textAlign: "center",
    color: "blue",
    cursor: "pointer",
  },
};