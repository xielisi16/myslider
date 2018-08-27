import React from 'react';
import styles from './Dot.less';

class Dot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  
  change(number){
    const {nowLocal} = this.props;
    const _nowLocal = number - nowLocal;
    this.props.turnSlider(_nowLocal);
  }

  render() {
    const {count}=this.props;
    let dotNodes = [];
    for(let i=0; i< count; i++){
      dotNodes[i] = (
        <span
          key={'dot' + i}
          onClick={() => this.change(i)}
          className={`${i === this.props.nowLocal? styles.sliderDotSelected: styles.sliderDot}`}
         >
        </span>
      );
    }
    return (
      <div className={styles.sliderDotsWrap} >
       {dotNodes}
      </div>
    );
  }
}

export default Dot;
