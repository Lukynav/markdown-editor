export const Heading = ({ index, text }) => {
  const headingIndex = text.match(/#/g).length
  text = text.slice(text.indexOf('#')) // remove the spaces before the #
  text = text.slice(headingIndex) // remove the #
  return (
    <div className='mb-2 text-white' index={index}>
      {
                (headingIndex == 1) && <h1 className='text-3xl border-b-2 border-white mb-4 font-bold'>{text}</h1> ||
                (headingIndex == 2) && <h2 className='text-2xl mt-6 font-bold'>{text}</h2> ||
                (headingIndex == 3) && <h3 className='text-xl mt-6'>{text}</h3> ||
                (headingIndex == 4) && <h4 className='text-lg mt-6'>{text}</h4> ||
                (headingIndex == 5) && <h5 className='text-md mt-6'>{text}</h5> ||
                (headingIndex == 6) && <h6 className='text-base mt-6'>{text}</h6>
            }
    </div>
  )
}
