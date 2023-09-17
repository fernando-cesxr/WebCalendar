import Link from "next/link"

export default function Button({children, variant="primary", type="link", ...props}){

    const styles = {
        primary: "bg-sky-500 text-indigo-900 hover:bg-sky-700",
        secondary: " text-indigo-900 hover:bg-red-600 border-2 border-slate-500 hover:text-slate-100"
    }

    const variantClass =  `flex gap-2 my-2 p-1 rounded-lg ${styles[variant]} `

    return(
        <>
            {
            
            type ==="link" ? <Link href="/meses" {...props} className={variantClass}>{children}</Link> : 
            
            
            <button {...props} className={variantClass}>{children}</button>
            }


            
        </>

    )
}