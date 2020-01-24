import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import styled from 'styled-components';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const NavHeader = styled.div`
  display: ${(props) => (props.expanded ? 'block' : 'none')};
  width: 100%;
  height: 64px;
  backgroundcolor: var(--grey-color);
  color: var(--white-color);
  > * {
    color: inherit;
    backgroundcolor: inherit;
  }
`;

const NavTitle = styled.div`
  font-size: 20px;
  width: 100%;
  height: 100%;
  padding-top: 22px;
`;

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  onToggle = (expanded) => {
    this.setState({ expanded });
  };

  render() {
    const { expanded } = this.state;
    /* Example with router: https://www.npmjs.com/package/@trendmicro/react-sidenav */
    return (
      <SideNav
        onToggle={this.onToggle}
        style={{ backgroundColor: 'var(--main-color)', position: 'fixed' }}
      >
          <SideNav.Toggle />
          <NavHeader expanded={expanded}>
            <NavTitle>
              Diogo Moreira
            </NavTitle>
          </NavHeader>
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></NavIcon>
              <NavText>ABOUT ME</NavText>
            </NavItem>
            <NavItem eventKey="skills">
              <NavIcon><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></NavIcon>
              <NavText>SKILLS</NavText>
            </NavItem>
            <NavItem eventKey="services">
              <NavIcon><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></NavIcon>
              <NavText>SERVICES</NavText>
            </NavItem>
            <NavItem eventKey="experiences">
              <NavIcon><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></NavIcon>
              <NavText>EXPERIENCES</NavText>
            </NavItem>
            <NavItem eventKey="portfolio">
              <NavIcon><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></NavIcon>
              <NavText>PORTFOLIO</NavText>
            </NavItem>
            <NavItem eventKey="blog">
              <NavIcon><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></NavIcon>
              <NavText>INTEREST</NavText>
            </NavItem>
            <NavItem eventKey="contacts">
              <NavIcon><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></NavIcon>
              <NavText>CONTACTS</NavText>
            </NavItem>
          </SideNav.Nav>
      </SideNav>
    )
  }
}
