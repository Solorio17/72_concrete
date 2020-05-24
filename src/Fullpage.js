import React, { Component } from 'react';
import ReactFullPage from '@fullpage/react-fullpage';
import './index.css';
import App from './App';

class Section extends Component{
  render(){
    return(
      <div className="section">
        {this.props.content}
      </div>
    )
  }
}

const Fullpage = () => (
    <ReactFullPage
      navigation
      sectionsColor={["olive", "firebrick", "coral", "goldenrod"]}
      scrollingSpeed = {1500}
      render={({ state, fullpageApi }) => {
        return(
          <ReactFullPage.Wrapper>
            <Section content={<App/>}/>
            <Section content={<App/>}/>
            <Section content={<App/>}/>
            <Section content={<App/>}/>
          </ReactFullPage.Wrapper>
        )
      }}
    />
  );

export default Fullpage;
