import { paragraphSorter } from '../../../utils/paragraphSorter'

export const Paragraph = ({ index, text }) => {
  const paragraph = paragraphSorter(text)
  return (
    <p className='mb-4 text-gray-400' key={index}>
      {paragraph.map(e => {
        if (e.type == 'text') return e.content
        if (e.type == 'bold') return (<b className='text-bold text-gray-200'>{e.content}</b>)
        if (e.type == 'link') return (<a href={e.url} className='text-blue-400 font-bold'>{e.content}</a>)
      })}
    </p>
  )
}
