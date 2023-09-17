"use client"

import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import TextField from "@/components/TextField";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { create } from "@/actions/eventos";
import { useState } from "react";

export default function FormEvento(){

    const [error, setError] = useState("")
    
    async function handleSubmit(formData) {
        const resp = await create(formData) 
        if (resp.message){
            setError(resp.message)
            return
        }
        setError("Cadastrado com sucesso")
     }


    return(
        <>
        <NavBar active="proxEventos"/>


        <main className="cor mt-10 m-auto max-w-md p-6 rounded-lg ">
            <form action={handleSubmit}>
                <h1 className="text-indigo-900 text-xl py-2 font-bold " >Cadastrar eventos</h1>
                <TextField 
                label="Nome"
                id="nome"
                name="nome"
                /> 
                <TextField 
                label="Data"
                id="date"
                name="data"
                /> 
                <TextField 
                label="Horario"
                id="horario"
                name="horario"
                /> 
                <TextField 
                label="Lembrete"
                id="lembrete"
                name="lembrete"
                /> 
                <TextField 
                label="Conta"
                id="conta"
                name="conta"
                /> 
                <div className="flex justify-around mt-5">
                    <Button href="/" variant="secondary">Cancelar</Button>
                    <Button variant="primary" type="button">
                        <CheckCircleIcon className="h-6 w-6"/>
                        Salvar
                    </Button>
                </div>

                <span className="text-red-400">{error}</span>
            </form>
        </main>
        </>
    )
}