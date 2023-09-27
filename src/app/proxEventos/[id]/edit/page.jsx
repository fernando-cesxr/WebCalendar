import NavBar from "@/components/NavBar";
import FormEdit from "./Form";
import { getEvento } from "@/actions/eventos";

export default async function FormEventos({params}) {

    const evento = await getEvento(params.id)

    return (
        <>
            <NavBar active="eventos" />
            <FormEdit evento={evento} />
        </>
    )
}