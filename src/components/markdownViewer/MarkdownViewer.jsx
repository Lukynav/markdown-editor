import { Heading } from '../blocks/heading/Heading'
import { Paragraph } from '../blocks/paragraph/Paragraph'
import { Quote } from '../blocks/quote/Quote'
export const MarkdownViewer = ({ text }) => {
  return (
    <article className='w-full p-4 bg-gray-900 text-gray-400 rounded-lg'>
      {
            text.map((e, index) => {
              if (!e.match('####### ') && e.match('# ')) return <Heading text={e} index={index} />
              if (e.match('>')) return <Quote text={e} key={index} />
              return <Paragraph text={e} index={index} />
            })
          }
    </article>
  )
}
