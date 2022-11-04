import { useEffect, useRef } from "react"

export const CodeEditor = ({setText})=>{
    const textRef = useRef()
    onClick(textRef, setText)
    return(
        <article className="w-full h-96 p-4 bg-gray-900 text-gray-400 rounded-lg">
            <textarea ref={textRef} className="bg-transparent resize-none w-full h-full outline-none"></textarea>
        </article>
    )
}

const onClick = (textRef, setText)=>{
    useEffect(()=>{
        textRef.current.addEventListener('keyup',(e)=>{
            
            const array = textRef.current.value.split('\n')
            setText(array)
        })
    },[])
}