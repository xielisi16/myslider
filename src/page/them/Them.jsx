import React from 'react';
import { Button, Progress, Input } from 'antd';
import styles from './Them.less';
/* import './Them.less'; */

const Search = Input.Search;


class Them extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <div className={styles.themMain}>
        <Button type="primary" shape="circle" icon="search" />
        <Button type="primary" icon="search">Search</Button>
        <Button shape="circle" icon="search" />
        <Button icon="search">Search</Button>
        <br />
        <Progress percent={30} />
        <br />
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={value => console.log(value)}
        />
      </div>
    );
  }
}

export default Them;
