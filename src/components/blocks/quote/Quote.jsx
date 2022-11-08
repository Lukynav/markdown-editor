export const Quote = ({ index, text }) => {
  const content = text.slice(1)
  return (
    <span className='text-white border-l-8 border-orange-500 overflow-hidden mb-4 bg-gray-800 block' key={index}>
      <p className='pl-4 py-4'>
        {content}
      </p>
    </span>
  )
}
