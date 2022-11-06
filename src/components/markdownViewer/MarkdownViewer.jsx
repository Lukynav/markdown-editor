import { Heading } from '../blocks/heading/Heading'
import { List } from '../blocks/List/List'
import { Paragraph } from '../blocks/paragraph/Paragraph'
import { Quote } from '../blocks/quote/Quote'
export const MarkdownViewer = ({ text }) => {
  return (
    <article className='w-full h-full bg-gray-900 text-gray-400 rounded-lg overflow-hidden'>
      <div className='w-full h-10 bg-gray-700 p-2'>
        <h3>Preview</h3>
      </div>
      <div className='px-4 py-8 h-full overflow-scroll'>
        {
            text.map((e, index) => {
              if (!e.match('####### ') && e.match('# ')) return <Heading text={e} index={index} />
              if (e.match('- ')) return <List text={e} key={index} />
              if (e.match('>')) return <Quote text={e} key={index} />
              return <Paragraph text={e} index={index} />
            })
          }
      </div>
    </article>
  )
}
