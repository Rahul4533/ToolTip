import React from 'react';
import "./App.css";


class Tool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showTooltip: false,
        };
      }
    
      handleMouseEnter = () => {
        this.setState({ showTooltip: true });
      };
    
      handleMouseLeave = () => {
        this.setState({ showTooltip: false });
      };

    render(){
        const { text, children } = this.props;
        const { showTooltip } = this.state;
        
        return (
            <>
            <div className="main">
              <div className="tooltip-container" onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
              {children}
        {showTooltip && <div className="tooltip">{text}</div>}
              </div>
            </div>
              

            </>
        )
    }



}


export default Tool;