import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';

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
      currentVideoTitle: 'titles',
      currentVideoDescription: '',
      currentVideoId: ''    
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
  //     currentVideoTitle: exampleVideoData[0].snippet.title,
  //     currentVideoDescription: exampleVideoData[0].snippet.description,
  //     currentVideoId: exampleVideoData[0].id.videoId    
  //   })
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


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={exampleVideoData[0]} handleClick={this.handleClick} title={this.state.currentVideoTitle} description={this.state.currentVideoDescription} vidId={this.state.currentVideoId}/></div>
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
