"use server"
const url = process.env.NEXT_PUBLIC_BASE_URL + "/contas"
export async  function create(formData){

    console.log(formData)

    //const url = "http://localhost:8080/api/eventos"

    const options = {
        method: "POST",
        body: JSON.stringify( Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        }
    }   

    const resp = await fetch(url, options)
    const json = await resp.json()

    if (resp.status !== 201){
        const errors = json.reduce((str, error) => str += error.message + ". ", "")
        return{
            message: `Erro ao cadastrar, ${resp.status} - ${errors}`
        }
    }

    return {ok: 'ok'}

}

export async function getContas() {
    const resp = await fetch(url)
    if (!resp.ok){
        throw new Error("Erro ao obter dados das contas")
    }

    return resp.json()
  }





