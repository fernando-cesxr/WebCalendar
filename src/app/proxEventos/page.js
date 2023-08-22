import NavBar from "@/components/NavBar";


export default function Eventos() {
  return (
    <>
     <NavBar active={"eventos"}/>

  <div className="cent rounded-lg">
    <h1 className="text-indigo-900 font-bold m-4 text-xl">Próximos Eventos</h1>
    <div className="bg-sky-500 p-2  rounded-lg m-20">
      <p>Médico 15h - 15/08/2023</p>
    </div>
    <div className="bg-sky-500 p-2  rounded-lg m-20 scroll-mt-0">
      <p>Cinema 19h - 19/08/2023</p>
    </div>
    <div className="bg-sky-500 p-2  rounded-lg m-20">
      <p>Dentista 109h - 21/08/2023</p>
    </div>
    
  </div>
    </>
  
  )
}
