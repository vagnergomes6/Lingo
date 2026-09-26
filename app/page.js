"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
  const [email,setEmail]=useState("vagner_abyro@hotmail.com");
  const [password,setPassword]=useState("");
  const [loading,setLoading]=useState(false);
  const [msg,setMsg]=useState("");

  const entrar=async()=>{
    setLoading(true); setMsg("");
    try{
      const {data,error}=await supabase.auth.signInWithPassword({email,password});
      if(error) throw error;
      setMsg("LOGADO! "+data.user.email);
    }catch(e){
      setMsg("Erro: "+e.message);
    }
    setLoading(false);
  };

  return (
    <div style={{minHeight:"100vh",background:"#0a0a0a",color:"white",display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div style={{width:"100%",maxWidth:380,background:"#111",border:"1px solid #222",borderRadius:24,padding:32}}>
        <h1 style={{fontSize:32,fontWeight:900}}>LINGO</h1>
        <p style={{color:"#888",marginBottom:20,fontSize:14}}>Bem-vindo de volta</p>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" style={{width:"100%",background:"#1a1a1a",border:"1px solid #2a2a2a",padding:14,borderRadius:12,color:"white",marginBottom:12}}/>
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Senha" style={{width:"100%",background:"#1a1a1a",border:"1px solid #2a2a2a",padding:14,borderRadius:12,color:"white",marginBottom:16}}/>
        <button onClick={entrar} style={{width:"100%",background:"white",color:"black",padding:14,borderRadius:12,fontWeight:700}}>{loading?"Carregando...":"Entrar"}</button>
        {msg && <p style={{marginTop:16,fontSize:13,color:msg.includes("Erro")?"#f55":"#5f5",textAlign:"center"}}>{msg}</p>}
      </div>
    </div>
  );
}
