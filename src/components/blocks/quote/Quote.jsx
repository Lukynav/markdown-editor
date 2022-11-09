import { paragraphSorter } from "../../../utils/paragraphSorter"

export const Quote = ({ index, text }) => {
  const content = text.slice(1)
  const paragraph = paragraphSorter(content)

  return (
    <span className='text-white border-l-8 border-orange-500 overflow-hidden mb-4 bg-gray-800 block' key={index}>
      <p className='pl-4 py-4'>
      {paragraph.map(e => {
        if (e.type == 'text') return e.content
        if (e.type == 'bold') return (<b className='text-bold text-gray-200'>{e.content}</b>)
        if (e.type == 'link') return (<a href={e.url} className='text-blue-400 font-bold'>{e.content}</a>)
      })}
      </p>
    </span>
  )
}
