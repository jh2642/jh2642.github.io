var pusher,
channel,
apiToken = 'da04f5af68a3ed9b77d1',
// photoAPI = 'https://80cf5e8f.ngrok.io',
photoAPI = 'https://aqueous-chamber-43940.herokuapp.com/',

// Pusher connection
pusher = new Pusher(apiToken, {
    encrypted: true
})

// Pusher channel and event subscription
channel = pusher.subscribe('photos')
channel.bind('new_photo', function(data) {
console.log(data)
renderPhoto(data)
})

function renderPhoto(photoObject) {
    var photos = document.getElementById('photos')
    photos.classList.add('mainContainer')

    var div = document.createElement('div')
    div.classList.add('photograph', 'randomColor')
    photos.appendChild(div)

    var img = document.createElement('img')
    img.setAttribute('src', photoObject.image_url)
    img.classList.add('img-thumbnail')
    div.appendChild(img)

    var caption = document.createElement('h3')
    caption.classList.add('caption')
    caption.innerHTML = photoObject.caption
    div.appendChild(caption)

}
// renderPhoto({photo: 'https://unsplash.it/200/300/?random', caption: 'Wowzers'})
// renderPhoto({photo: 'https://unsplash.it/400/500/?random', caption: 'Howdy'})
// renderPhoto({photo: 'https://unsplash.it/g/200/300', caption: 'BYEEEEEEEE'})
// renderPhoto({photo: 'https://unsplash.it/300/200/?random', caption: 'Holla at ya boy !'})
fetch(photoAPI + '/photos/')
.then(function(data) {
    return data.json()
})

.then(function(photos) {
    photos.forEach(function(photoObject) {

        renderPhoto(photoObject)
    })
})

.catch(function(ex) {
    console.log('parsing failed', ex)
})
