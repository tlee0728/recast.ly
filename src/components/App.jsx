import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from "../config/youtube.js";

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><Search /></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><VideoPlayer /></div>
//       </div>
//       <div className="col-md-5">
//         <div><VideoList /></div>
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideoTitle: '',
      currentVideoDescription: '',
      currentVideoId: '',
      options: {
        query: '',
        key: '',
        max: 5
      }    
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
    
  //   searchYouTube();
  // }

  handleClick(e) {
    var videoTitle = e.target.textContent;
    for (var i = 0; i < exampleVideoData.length; i++) {
      var vidData = exampleVideoData[i];
      // console.log('wtf:', vidData.snippet);
      // console.log(videoTitle);
      if (vidData.snippet.title === videoTitle) {
        this.setState({
          currentVideoTitle: videoTitle,
          currentVideoDescription: vidData.snippet.description,
          currentVideoId: vidData.id.videoId
        }); 
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    var input = e.target.value;
    this.setState({
      options: {
        query: input
      }
    });
    var options = {
      query: this.state.options.query,
      max: this.state.options.max,
      key: this.state.options.key
    };
    console.log('hey')
    searchYouTube(options);
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search handleSubmit={this.handleSubmit}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer handleClick={this.handleClick} title={this.state.currentVideoTitle} description={this.state.currentVideoDescription} vidId={this.state.currentVideoId}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList handleClick={this.handleClick} videos={exampleVideoData}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
