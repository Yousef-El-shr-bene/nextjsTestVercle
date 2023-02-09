"use client"

export default function Error({error,reset}){
    return <>
    <div>
    this is error : {error.massage}
    <button onClick={()=>reset()} > try agen </button>
    </div>
    </>
}
