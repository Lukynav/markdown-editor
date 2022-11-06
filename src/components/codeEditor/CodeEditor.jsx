import { useEffect, useRef } from 'react'

export const CodeEditor = ({ setText }) => {
  const textRef = useRef()
  onClick(textRef, setText)
  return (
    <article className='grid grid-rows-[40px_auto] w-full h-full bg-gray-900 text-gray-400 rounded-lg overflow-hidden'>
      <div className='w-full h-10 bg-gray-700 p-2'>
        <h3>Markdown edit</h3>
      </div>
      <textarea ref={textRef} className='bg-transparent resize-none outline-none p-4 w-full h-full overflow-scroll' />
    </article>
  )
}

const onClick = (textRef, setText) => {
  useEffect(() => {
    textRef.current.addEventListener('keyup', (e) => {
      const array = textRef.current.value.split('\n')
      setText(array)
    })
  }, [])
}
