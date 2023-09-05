import NavBar from "@/components/NavBar";
import Evento from "./proxEventos"

async function getEventos(){
  const url = "http://localhost:8080/api/eventos"
  const resp = await fetch(url, {next: {revalidate: 0}})
  return resp.json()
}


export default async function Eventos() {

  const data = await getEventos()
  console.log(data)

  return (
    <>
    
      <NavBar active={"eventos"}/>

        <main className="cent rounded-lg" >
            <h1 className="text-indigo-900 font-bold m-4 text-xl">Próximos Eventos</h1>  
            <div id="data">     
              {data.map(evento => <Evento key={evento.id} evento={evento} />)}
            </div>
        </main>

    </>
  
  )
}
