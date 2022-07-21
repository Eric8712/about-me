import React from 'react';
import {
  StyledContainer,
  StyledHeader,
  StyledContent,
  LinkStyle,
  StyledImg5,
} from './styled'
import AboutMe from './aboutMe/aboutMe';
import WorkExperience from './workExperience/workExperience';
import SideProject1 from './sideProject1/sideProject1';
import SideProject2 from './sideProject2/sideProject2';
import SideProject3 from './sideProject3/sideProject3';
import FrontPage from './frontpage/frontpage';
import {Route, Link, Switch } from 'react-router-dom';

function App() {
  
  return (
    <StyledContainer>
      <StyledHeader>
        <div className = 'frontpage'>
          <div className='pageTitle'><Link to = '/' style={LinkStyle}>首頁</Link></div>
        </div>
        <div className = 'NavList'>
          <ul>
            <li><Link to = '/aboutme' style={LinkStyle}> About me</Link></li>
            <li><Link to = '/WorkExperience' style={LinkStyle}>工作經歷</Link></li>
            <li><Link to = '/SideProject1' style={LinkStyle}>SideProject</Link></li>
            <li><Link to = '/SideProject2' style={LinkStyle}>SideProject</Link></li>
            <li><Link to = '/SideProject3' style={LinkStyle}>SideProject</Link></li>
          </ul>
        </div>
      </StyledHeader>
      <StyledContent>
        <Switch>
        <Route exact path='/' component= {FrontPage} />
        <Route exact path='/aboutme' component= {AboutMe} />
        <Route exact path='/WorkExperience' component= {WorkExperience} />
        <Route exact path='/SideProject1' component= {SideProject1} />
        <Route exact path='/SideProject2' component= {SideProject2} /> 
        <Route exact path='/SideProject3' component= {SideProject3} />
        </Switch>
      </StyledContent>
    </StyledContainer>
  );
}

export default App;
