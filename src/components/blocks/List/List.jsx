export const List = ({ index, text }) => {
    return (
      <li className='' key={index}>
        {text.slice(1)}
      </li>
    )
  }
  