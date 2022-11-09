export const paragraphSorter = (text) => {
  let array = []

  hasBoldText(array, text)
  array = hasLink(array)

  //console.log(array)
  return array
}

const hasBoldText = (array, text) => {
  const words = text.split('*')
  if (words[0] === '') {
    startWithBold(array, words)
  }
  if (words[0] !== '') {
    noStartWithBold(array, words)
  }
}
const startWithBold = (array, words) => {
  for (let i = 0; i < words.length; i++) {
    if (i % 2 !== 0) {
      array.push({
        type: 'bold',
        content: words[i]
      })
    }

    if (i % 2 === 0) {
      array.push({
        type: 'text',
        content: words[i]
      })
    }
  }
  array.shift()
}
const noStartWithBold = (array, words) => {
  for (let i = 0; i < words.length; i++) {
    if (i % 2 !== 0) {
      array.push({
        type: 'bold',
        content: words[i]
      })
    }

    if (i % 2 === 0) {
      array.push({
        type: 'text',
        content: words[i]
      })
    }
  }
}

const hasLink = (array)=>{
  array.map( (e, index) => {
    if(e.type === 'text'){
      const linkStart = e.content.indexOf('[')
      const linkMid = e.content.indexOf('](')
      const linkEnd = e.content.indexOf(')')
      
      if(linkStart !== -1 && linkMid !== -1 && linkEnd !== -1){
        const before = e.content.slice(0, linkStart)
        const link = e.content.slice(linkStart+1, linkMid)
        const url = e.content.slice(linkMid+2, linkEnd)
        const after = e.content.slice(linkEnd+1)
        const obj = [
          {
            type: 'text',
            content: before
          },
          {
            type: 'link',
            content: link,
            url: url
          },
          {
            type: 'text',
            content: after
          }
        ]

        array.splice(index,1)
        array = [ ...array.slice(0, index), ...obj, ...array.slice(index)]
      }
    }
    
  })
  return array
}
