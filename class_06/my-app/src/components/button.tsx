"use client"
interface Iprops{
    text:string

}
export default function Button(props:Iprops){
    const handleclick=()=>{
        alert("me click hogya")
    }
    return(
        <button onClick={handleclick} className="border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm  sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
            {props.text}
            
        </button>
    )
}