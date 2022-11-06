import { useState } from 'react'
import { CodeEditor } from './components/codeEditor/CodeEditor'
import { MarkdownViewer } from './components/markdownViewer/MarkdownViewer'
import { Layout } from './layout/Layout'

export default function App () {
  const [text, setText] = useState([])
  return (
    <Layout>
      <section className='w-full h-full flex justify-center gap-2'>
        <CodeEditor setText={setText} />
        <MarkdownViewer text={text} />
      </section>
    </Layout>
  )
}
