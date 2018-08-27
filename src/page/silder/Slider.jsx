import React from 'react';
import styles from './Slider.less';
import Dot from './conn/Dot';

var autoPlayFlag = null;

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          src: require('../../assets/img1.jpg'),
          alt: 'img1'
        },
        {
          src: require('../../assets/img2.jpg'),
          alt: 'img2'
        },
        {
          src: require('../../assets/img3.jpg'),
          alt: 'img3'
        },
        {
          src: require('../../assets/img4.jpg'),
          alt: 'img4'
        },
       
      ],
      nowLocal: 0,
      speed: 2,
      delay: 2,
    };
  }

  turnSlider = (flag) =>{
    const {data = []} =this.state;
    const length = data.length;
      var _flag = this.state.nowLocal + flag;
      if(_flag<0){
        _flag = _flag + length;
      }
      if(_flag>=length){
        _flag = _flag-length;

      }
      this.setState({
        nowLocal: _flag
      });
  }

  autoTurn = () =>{
    autoPlayFlag = setInterval(() => {
      this.turnSlider(1);
    }, this.state.delay * 1000);
  }

  stop(){
    clearInterval(autoPlayFlag);
  }

  
  componentDidMount(){
    this.autoTurn();
  }

  render() {
    const {data = []}=this.state;
    let count = data.length;
    let width = `${100/count}%`;
    
    return (
      <div className={styles.slider} onMouseEnter={() => this.stop()} onMouseLeave={() => this.autoTurn()}>
          <ul style={{
              left: `${-100 * this.state.nowLocal}%`,
              width: `${count * 100}%`
            }}>
            
            {
              data.map((item,key) => {
                return (
                  <li className={styles.sliderItem} style={{width: width}} key={key} >
                     <img src={item.src} alt={item.alt} />
                  </li>
                )        
            })
          }
          </ul>

          <div className={styles.sliderArrowsWrap}>
              <span
                className={styles.sliderArrowLeft}
                onClick={() => this.turnSlider(-1)}>
                &lt;
              </span>
              <span
                  className={styles.sliderArrowRight}
                  onClick={() => this.turnSlider(1)}>
                  &gt;
              </span>
        </div>

        <Dot count={count} nowLocal={this.state.nowLocal}  turnSlider={this.turnSlider} />
      </div>
    );
  }
}

export default Slider;
