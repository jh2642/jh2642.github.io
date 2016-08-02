var pusher,
    channel,
    apiToken = '6e5f67bde794d28881ed'

// Pusher connection
pusher = new Pusher(apiToken, {
  encrypted: true
})

// Pusher channel and event subscription
channel = pusher.subscribe('photos')
channel.bind('new_photo', function(data) {
  console.log(data)
  // Put your code here to render incoming photos
})

fetch('back-end API to get list of existing photos goes here')
  .then(function(data) {
    return data.json()
  })
  .then(function(photos) {
    // Put your code here to render existing photos
  })
