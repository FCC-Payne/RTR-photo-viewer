import React from 'react';

class Arrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      divClassName: `thumb-controls thumb-${props.direction}`,
      style: {},
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter() {
    if (this.props.active) {
      this.setState({
        style: {
          animation: `2s ease-out infinite bounce-${this.props.direction}`
        }
      });
    }
  }

  mouseLeave() {
    if (this.props.active) {
      this.setState({
        style: {}
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.active !== this.props.active) {
      let divClassTemp = `thumb-controls thumb-${this.props.direction}`;
      !this.props.active ? divClassTemp += ' inactive' : null;
      this.setState({
        divClassName: divClassTemp,
        style: {},
      });
    }
  }

  componentDidMount() {
    let divClassTemp = `thumb-controls thumb-${this.props.direction}`;
    !this.props.active ? divClassTemp += ' inactive' : null;
    this.setState({
      divClassName: divClassTemp
    });
  }
  
  render() {
    return(
      <div className={this.state.divClassName} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onClick={() => this.props.scroll(this.props.direction)}>
        <span style={this.state.style} className="arrow" ></span>
      </div>
    );
  }
};

export default Arrow;
