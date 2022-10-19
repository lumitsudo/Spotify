fetch('https://api.spotify.com/v1/search?type=album&include_external=audio').then(resposta=>{
    return resposta.json();
}).then(corpo=>{
    console.log(corpo)
})