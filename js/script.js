var client_id = '3538ba0d6de244ec960720f353759cd5';
var client_secret = '6e763327477e463f8eda383e9f5a3142';

var authOptions = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret,
  method: 'POST',
};

let accessToken;

fetch('https://accounts.spotify.com/api/token', authOptions)
.then(res => res.json())
.then(data => {
    console.log(data)
    accessToken = data.access_token 
})
.catch(err => console.log(err.message))

// o fetch é assíncrono e demora para retornar a variável accessToken preenchida
setTimeout(() => {
    console.log('>>> accessToken', accessToken);
    var song = 
        fetch('https://api.spotify.com/v1/artists/7FNnA9vBm6EKceENgCGRMb', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            accessToken = data.access_token 
        })
    var icon = document.getElementById("icon")

    icon.onclick = function() {
        if(song.paused){
            song.play();
            icon.src="img/pause_button.png";
        }else{
            song.pause();
            icon.src="img/play_button.png"
        }
    }

}, 2000)

