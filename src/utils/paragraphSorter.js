export const paragraphSorter = (text)=>{
    const array = []

    hasBoldText(array, text)
    
    //console.log(array)
    return array
}

const hasBoldText = (array, text) =>{
    const words = text.split('*')
    if(words[0] === ''){
       startWithBold(array, words)
    }
    if(words[0] !== ''){
        noStartWithBold(array, words)
     }
}
const startWithBold = (array, words)=>{
    for(let i = 0; i<words.length; i++){
        if(i % 2 !== 0){
        array.push({
            type: 'bold',
            content: words[i]
        })}

        if(i % 2 === 0){
            array.push({
                type: 'text',
                content: words[i]
            })}
    }
    array.shift()
}
const noStartWithBold = (array, words)=>{
    for(let i = 0; i<words.length; i++){
        if(i % 2 !== 0){
        array.push({
            type: 'bold',
            content: words[i]
        })}

        if(i % 2 === 0){
            array.push({
                type: 'text',
                content: words[i]
            })}
    }
}