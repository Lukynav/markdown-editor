import { paragraphSorter } from "../../../utils/paragraphSorter"

export const List = ({ index, text }) => {
  const content = text.slice(1)
  const paragraph = paragraphSorter(content)
    return (
      <li className='ml-4' key={index}>
        {paragraph.map(e => {
        if (e.type == 'text') return e.content
        if (e.type == 'bold') return (<b className='text-bold text-gray-200'>{e.content}</b>)
        if (e.type == 'link') return (<a href={e.url} className='text-blue-400 font-bold'>{e.content}</a>)
      })}
      </li>
    )
  }
  