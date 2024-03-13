import styles from "./home.module.css";

const url = "http://localhost:3000/api";

export default async function Home() {
// fetch não é algo exclusivo do next, vai fazer a solicitação
  const resposta = await fetch(url,{
    method: "GET"
  });
  const campus = await resposta.json();
 
  return (
    <main>
      <h1>Home</h1>
      {campus.map((campi) =>
        <div>
             <p>{campi.nome_campi}</p>
        </div>
      )}
    </main>
  )
}