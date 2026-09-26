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
  const [isSignup,setIsSignup]=useState(false);
  const [loading,setLoading]=useState(false);
  const [msg,setMsg]=useState("");

  const handleAuth=async()=>{
    setLoading(true); setMsg("");
    try{
      if(isSignup){
        const {data,error}=await supabase.auth.signUp({email,password});
        if(error) throw error;
        setMsg("CONTA CRIADA! Verifique seu email: "+email);
      }else{
        const {data,error}=await supabase.auth.signInWithPassword({email,password});
        if(error) throw error;
        setMsg("LOGADO! "+data.user.email);
      }
    }catch(e){ setMsg("Erro: "+e.message); }
    setLoading(false);
  };

  const loginGoogle=async()=>{
    setMsg("Entrando com Google...");
    const {error}=await supabase.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.origin}});
    if(error) setMsg("Erro Google: "+error.message);
  };

  return (
    <div style={{minHeight:"100vh",background:"#0a0a0a",color:"white",display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div style={{width:"100%",maxWidth:380,background:"#111",border:"1px solid #222",borderRadius:24,padding:32}}>
        <h1 style={{fontSize:32,fontWeight:900}}>LINGO</h1>
        <p style={{color:"#888",marginBottom:20,fontSize:14}}>{isSignup?"Crie sua conta":"Bem-vindo de volta"}</p>
        
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" style={{width:"100%",background:"#1a1a1a",border:"1px solid #2a2a2a",padding:14,borderRadius:12,color:"white",marginBottom:12}}/>
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Senha" style={{width:"100%",background:"#1a1a1a",border:"1px solid #2a2a2a",padding:14,borderRadius:12,color:"white",marginBottom:16}}/>
        
        <button onClick={handleAuth} style={{width:"100%",background:"white",color:"black",padding:14,borderRadius:12,fontWeight:700,marginBottom:12}}>{loading?"...":isSignup?"Criar conta":"Entrar"}</button>
        
        <button onClick={loginGoogle} style={{width:"100%",background:"#1a1a1a",border:"1px solid #333",color:"white",padding:14,borderRadius:12,fontWeight:600,marginBottom:16}}>Continuar com Google</button>

        <p onClick={()=>setIsSignup(!isSignup)} style={{textAlign:"center",fontSize:13,color:"#888",cursor:"pointer"}}>{isSignup?"Já tem conta? Entrar":"Não tem conta? Criar conta"}</p>
        
        {msg && <p style={{marginTop:16,fontSize:13,color:msg.includes("Erro")?"#f55":"#5f5",textAlign:"center"}}>{msg}</p>}
      </div>
    </div>
  );
}
