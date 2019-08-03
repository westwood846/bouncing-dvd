import React from 'react';
import './DVD.css';

class DVD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 100,
      top: 200,
      width: 153,
      height: 69,
      velocity: {x: 1, y: 1},
      windowWidth: 0,
      windowHeight: 0,
      color: this.randomColor()
    }

    this.updatePosition = this.updatePosition.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.interval = setInterval(() => this.updatePosition(), 10);
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updatePosition() {
    console.log("updating position")
    this.setState({
      left: this.state.left + this.state.velocity.x,
      top: this.state.top + this.state.velocity.y,
    });
    if (
      this.state.left + this.state.width >= this.state.windowWidth
      || this.state.left <= 0
    ) this.setState({color: this.randomColor(), velocity: {x: this.state.velocity.x * -1, y: this.state.velocity.y}});
    if (
      this.state.top + this.state.height >= this.state.windowHeight
      || this.state.top <= 0
    ) this.setState({color: this.randomColor(), velocity: {x: this.state.velocity.x, y: this.state.velocity.y * -1}});
  }

  updateWindowDimensions() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }

  colors = [
    "#f44336", "#9c27b0", "#2196f3", "#4caf50", "#ffeb3b"
  ]

  randomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  render() {
    let style = {
      left: this.state.left + "px",
      top: this.state.top + "px",
      width: this.state.width + "px",
      height: this.state.height + "px"
    }
    let svgStyle = {
      fill: this.state.color
    }
    return (
      <div className="DVD" style={style}>
        <svg width="153px" height="69px"><g><path style={svgStyle} d="M140.186,63.52h-1.695l-0.692,5.236h-0.847l0.77-5.236h-1.693l0.076-0.694h4.158L140.186,63.52L140.186,63.52z M146.346,68.756h-0.848v-4.545l0,0l-2.389,4.545l-1-4.545l0,0l-1.462,4.545h-0.771l1.924-5.931h0.695l0.924,4.006l2.078-4.006 h0.848V68.756L146.346,68.756z M126.027,0.063H95.352c0,0-8.129,9.592-9.654,11.434c-8.064,9.715-9.523,12.32-9.779,13.02 c0.063-0.699-0.256-3.304-3.686-13.148C71.282,8.7,68.359,0.062,68.359,0.062H57.881V0L32.35,0.063H13.169l-1.97,8.131 l14.543,0.062h3.365c9.336,0,15.055,3.747,13.467,10.354c-1.717,7.24-9.91,10.416-18.545,10.416h-3.24l4.191-17.783H10.502 L4.34,37.219h20.578c15.432,0,30.168-8.13,32.709-18.608c0.508-1.906,0.443-6.67-0.764-9.527c0-0.127-0.063-0.191-0.127-0.444 c-0.064-0.063-0.127-0.509,0.127-0.571c0.128-0.062,0.383,0.189,0.445,0.254c0.127,0.317,0.19,0.57,0.19,0.57l13.083,36.965 l33.344-37.6h14.1h3.365c9.337,0,15.055,3.747,13.528,10.354c-1.778,7.24-9.972,10.416-18.608,10.416h-3.238l4.191-17.783h-14.481 l-6.159,25.976h20.576c15.434,0,30.232-8.13,32.709-18.608C152.449,8.193,141.523,0.063,126.027,0.063L126.027,0.063z M71.091,45.981c-39.123,0-70.816,4.512-70.816,10.035c0,5.59,31.693,10.034,70.816,10.034c39.121,0,70.877-4.444,70.877-10.034 C141.968,50.493,110.212,45.981,71.091,45.981L71.091,45.981z M68.55,59.573c-8.956,0-16.196-1.523-16.196-3.365 c0-1.84,7.239-3.303,16.196-3.303c8.955,0,16.195,1.463,16.195,3.303C84.745,58.05,77.505,59.573,68.55,59.573L68.55,59.573z"/></g></svg>
      </div>
    )
  }
}

export default DVD;