"use client";
import { useState } from "react";

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
      padding: "20px"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "380px",
        background: "#111",
        border: "1px solid #222",
        borderRadius: "24px",
        padding: "32px",
      }}>
        <h1 style={{fontSize: "32px", fontWeight: "900", letterSpacing: "-1px", marginBottom: "8px"}}>LINGO</h1>
        <p style={{color: "#888", marginBottom: "32px", fontSize: "14px"}}>{isLogin ? "Bem-vindo de volta" : "Crie sua conta"}</p>

        <button style={{
          width: "100%",
          background: "white",
          color: "black",
          border: "none",
          padding: "14px",
          borderRadius: "12px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          marginBottom: "24px",
          cursor: "pointer"
        }}>
          <span style={{fontSize: "18px"}}>G</span> Continuar com Google
        </button>

        <div style={{display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px"}}>
          <div style={{height: "1px", flex: 1, background: "#222"}}></div>
          <span style={{color: "#555", fontSize: "12px"}}>OU</span>
          <div style={{height: "1px", flex: 1, background: "#222"}}></div>
        </div>

        <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
          <input placeholder="Email" style={{background: "#1a1a1a", border: "1px solid #222", padding: "14px 16px", borderRadius: "12px", color: "white", outline: "none"}} />
          <input placeholder="Senha" type="password" style={{background: "#1a1a1a", border: "1px solid #222", padding: "14px 16px", borderRadius: "12px", color: "white", outline: "none"}} />
          {!isLogin && <input placeholder="Confirmar senha" type="password" style={{background: "#1a1a1a", border: "1px solid #222", padding: "14px 16px", borderRadius: "12px", color: "white", outline: "none"}} />}
        </div>

        {isLogin && <div style={{textAlign: "right", marginTop: "12px"}}>
          <a href="#" style={{color: "#888", fontSize: "13px", textDecoration: "none"}}>Esqueceu a senha?</a>
        </div>}

        <button style={{
          width: "100%",
          background: "white",
          color: "black",
          border: "none",
          padding: "14px",
          borderRadius: "12px",
          fontWeight: "700",
          marginTop: "24px",
          cursor: "pointer"
        }}>
          {isLogin ? "Entrar" : "Criar conta"}
        </button>

        <p style={{textAlign: "center", marginTop: "24px", fontSize: "14px", color: "#888"}}>
          {isLogin ? "Não tem conta? " : "Já tem conta? "}
          <span onClick={() => setIsLogin(!isLogin)} style={{color: "white", fontWeight: "600", cursor: "pointer", textDecoration: "underline"}}>
            {isLogin ? "Criar conta" : "Fazer login"}
          </span>
        </p>
      </div>
    </div>
  );
}
