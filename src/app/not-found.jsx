import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function NotFound(){
    return(
        <>
        <NavBar/>

        <main>
            <h1 className="text-indigo-900 text-3xl">404 - Página não encontrada</h1>
            <Link href="/" className="text-indigo-900 text-xl py-2">Voltar para página inicial</Link>
        </main>
        </>
    )
}