export default function TextField({label, id, ...props  }){
    return(
        <div className="flex flex-col gap-1">
            <label htmlFor={id} className="text-indigo-900 font-bold mt-5">{label}</label>
            <input type="text" id={id} {...props} className="bg-slate-900 rounded-lg px-3 py-1 outline-none focus:ring-2" />
        </div>
    )
}