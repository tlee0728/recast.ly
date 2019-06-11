

var searchYouTube = (options, callback = () => {}) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v3/search/',
    {
      query: options.query,
      max: options.max,
      key: options.key,
      part: 'snippet',
      videoEmbeddable: true,
      type: 'video'
    },
    (data) => {console.log(data)}
    
  )



  // $.ajax({
  //   // This is the url you should use to communicate with the parse API server.
  //   url: `https://www.googleapis.com/youtube/v3/search`,
  //   type: 'GET',
  //   data: JSON.stringify(message),
  //   success: function (data) {
  //     console.log('chatterbox: Message sent');
  //   },
  //   error: function (data) {
  //     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
  //     console.error('chatterbox: Failed to send message', data);
  //   }
  // });

};

export default searchYouTube;
