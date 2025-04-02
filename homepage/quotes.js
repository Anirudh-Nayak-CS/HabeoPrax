
let quotes= ()=> {
  fetch('http://api.forismatic.com/api/1.0/', {
    method:'POST',
  
    headers: {
      'Content-type':'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams( {
     method:'getQuote',
     key:457653,
     format:'json',
     lang:'en',
     
    }),
  })
  
  .then(  res=>   res.json())
  .then(data => {
    console.log(data.quoteText)
     console.log(data.quoteAuthor)})
  
  .catch(  e=> {console.log(`Error in fetching the quote`,e)}) }

module.exports =quotes
  
  


