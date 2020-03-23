let ;
let

fetch(`https://content.guardianapis.com/search?q=${article.value}&api-key=3513a633-66de-47a6-a4d2-b160ad3ed34c`)
  .then(res => {return res.json()}) //jason makes it so i can access the info
  .then(response => {  //grabbing what we want from the response.
    let data = response.response.docs.forEach(articles => {
    let ul = document.querySelector("#")
    let li = document.createElement("")
    let text = document.createTextNode(articles.headline.main) //grab string from property main pass to createtextnode which creates text node to be appended to li.
    console.log(text)
