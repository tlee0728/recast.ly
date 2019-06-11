import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from "../config/youtube.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideoTitle: '',
      currentVideoDescription: '',
      currentVideoId: '',
      options: {
        query: '',
        key: YOUTUBE_API_KEY,
        max: 5
      },
      videoData: exampleVideoData
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {

  //   searchYouTube();
  // }

  handleClick(e) { //for switching the video view
    var videoTitle = e.target.textContent;
    for (var i = 0; i < exampleVideoData.length; i++) {
      var vidData = exampleVideoData[i];

      if (vidData.snippet.title === videoTitle) {
        this.setState({
          currentVideoTitle: videoTitle,
          currentVideoDescription: vidData.snippet.description,
          currentVideoId: vidData.id.videoId
        });
      }
    }
  }

  handleChange(e) { //for keeping track of our input
    e.preventDefault();
    var input = e.target.value;
    this.setState({
      options: {
        query: input,
        max: 5,
        key: YOUTUBE_API_KEY
      }
    });

  }

  handleSubmit(e) { //for pressing enter in the input field and clicking search
    e.preventDefault();
    searchYouTube(this.state.options, (data) => {
      // console.log(this);
      this.setState({
        videoData: data.items
      });
      // console.log(this.state.videoData);
    });
    // console.log(this.state.videoData);
  }



  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} /></div>
            {/* videoData={this.state.videoData} */}
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer handleClick={this.handleClick} title={this.state.currentVideoTitle} description={this.state.currentVideoDescription} vidId={this.state.currentVideoId} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList handleClick={this.handleClick} videos={this.state.videoData} /></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
