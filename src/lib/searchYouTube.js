

var searchYouTube = (options, callback = () => {}) => {
  // TODO
  console.log(options);
  $.get(
    'https://www.googleapis.com/youtube/v3/search/',
    {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      part: 'snippet',
      videoEmbeddable: true,
      type: 'video'
    },
    // function(data) {
    //   callback(data);
    // }
    (data) => {
      callback(data);
    }
  )
};

export default searchYouTube;
