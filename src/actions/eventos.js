"use server"


import { revalidatePath } from "next/cache"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/contas"
export async  function create(formData){

    console.log(formData)

    const options = {
        method: "POST",
        body: JSON.stringify( Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        }
    }   

    const resp = await fetch(url, options)
    const json = await resp.json()

    if (resp.status !== 201 ){
        const errors = json.reduce((str, error) => str += error.message + ". ", "")
        return {
            message: `Erro ao cadastrar. ${resp.status} - ${errors} `
        }
    }

    return {ok: 'ok'}

}

export async function getEventos() {
    const resp = await fetch(url)
    if (!resp.ok){
        throw new Error("Erro ao obter dados dos eventos")
    }

    return resp.json()
  }


export async function getEventos() {
    const resp = await fetch(url)
    if (!resp.ok){
        throw new Error("Erro ao obter dados dos eventos")
    }

    return resp.json()
  }


export async function destroy(id){
    const deleteUrl = url + "/" + id

    const options = {
        method: "DELETE"
    }

    const resp = await fetch(deleteUrl, options)

    if(resp.status !== 204) 
        return{error: "Erro ao apagar. " + resp.status}

    revalidatePath("/")
}


export async function update(evento){
    const updateUrl = url + "/" + evento.id

    const options = {
        method: "PUT",
        body: JSON.stringify(evento),
        headers: {
            "Content-Type": "application/json"
        }
    }   

    const resp = await fetch(updateUrl, options)

    if (resp.status !== 200 ){
        return {
            error: `Erro ao atualizar. ${resp.status} `
        }
    }

    revalidatePath("/")

}
