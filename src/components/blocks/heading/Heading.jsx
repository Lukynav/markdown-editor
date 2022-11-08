export const Heading = ({ index, text }) => {
  const headingIndex = text.match(/#/g).length
  text = text.slice(headingIndex)
  return (
    <div className='mb-2 text-white' index={index}>
      {
                (headingIndex == 1) && <h1 className='text-4xl'>{text}</h1> ||
                (headingIndex == 2) && <h2 className='text-3xl'>{text}</h2> ||
                (headingIndex == 3) && <h3 className='text-2xl'>{text}</h3> ||
                (headingIndex == 4) && <h4 className='text-xl'>{text}</h4> ||
                (headingIndex == 5) && <h5 className='text-lg'>{text}</h5> ||
                (headingIndex == 6) && <h6 className='text-base'>{text}</h6>
            }
    </div>
  )
}

/*
<p className='mb-4 border-b-2 border-gray-700 flex text-gray-300' key={index}>
            {text}
        </p>
*/
