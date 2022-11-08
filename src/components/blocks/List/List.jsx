export const List = ({ index, text }) => {
    return (
      <li className='ml-4' key={index}>
        {text.slice(1)}
      </li>
    )
  }
  