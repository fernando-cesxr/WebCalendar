import DropMenu from "@/components/DropMenu";


export default function proxEventos({evento}){
    return(
        <>
            <div id="data row" className="group bg-sky-500 p-2  rounded-lg m-20 flex items-center">
                <p>{evento.nome}</p>
                <p className="ml-1">{evento.data}</p>
            <div className="invisible group-hover:visible">     
                <DropMenu />
            </div>
            </div>
        </>
    )
}