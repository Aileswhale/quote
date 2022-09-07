const body = document.body
const button = document.querySelector('.quotebtn')
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f',]
const quotes = [
{
    name:'Albert Einstein',
    quote: 'We cannot solve problems with the kind of thinking we employed when we came up with them.'
},
{
    name:'Mahatma Gandhi',
    quote:'Learn as if you will live forever, live like you will die tomorrow'
},
{
    name:'Mark Twain',
    quote:'Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.'
},
{
    name:'Eleanor Roosevelt',
    quote:'When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.'
},
{
    name:'Norman Vincent Peale',
    quote:'When you change your thoughts, remember to also change your world.'
},
{
    name:'Walter Anderson',
    quote:'It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest'
},
{
    name:'Diane McLaren',
    quote:'Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.'
},
{
    name:'Winston S. Churchill',
    quote:'Success is not final; failure is not fatal: It is the courage to continue that counts.'
},
{
    name:'Herman Melville',
    quote:'It is better to fail in originality than to succeed in imitation.'
},
{
    name:'superior',
    quote:'we rise by lifting others, cause this life is but a spoon '
}


]

const changeQuote = () => {
    let random = Math.floor(Math.random()*quotes.length)
    quote.innerHTML = quotes[random].quote
    author.innerHTML= quotes[random].name
    let hexName = '#'
    for (let i = 0; i < 6; i++) {
        let randomHex = Math.floor(Math.random()*hex.length)
        hexName+= hex[randomHex]
        
    }
    body.style.background = hexName
}


button.addEventListener('click', changeQuote)