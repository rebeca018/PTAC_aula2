'use server'
import styles from "./home.module.css";

const url = "https://back-end-ifms2.vercel.app/campi";

export default async function Home() {
// fetch não é algo exclusivo do next, vai fazer a solicitação
  const resposta = await fetch(url,{
    next: {
      revalidate: 1
    },
    method: "GET",
    headers: {'Content-Type' : 'aplication/json'}
  });
  const campi = await resposta.json();
 
  return (
    <main>
      <h1>Home</h1>
      {campi.map((campus) =>
        <div>
             <p>{campus.nome_campus}</p>
        </div>
      )}
    </main>
  )
}