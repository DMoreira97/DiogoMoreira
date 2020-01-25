import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import styled from 'styled-components';
import Scrollspy from 'react-scrollspy'

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
      <header>
        <SideNav
          onToggle={this.onToggle}
          style={{ backgroundColor: 'var(--main-color)', position: 'fixed' }}>
          <SideNav.Toggle />
          <NavHeader expanded={expanded}>
            <NavTitle>
              Diogo Moreira
            </NavTitle>
          </NavHeader>
          <SideNav.Nav>
            <NavItem eventKey="aboutme">
              <NavIcon><i className="fas fa-user" style={{ fontSize: '1.75em' }} /></NavIcon>
              <NavText>ABOUT ME</NavText>
              <a href="#home" style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: 99
              }}></a>
            </NavItem>
            <NavItem eventKey="skills">
              <NavIcon><i className="fas fa-cog" style={{ fontSize: '1.75em' }} /></NavIcon>
              <NavText>SKILLS</NavText>
              <a href="#skills" style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: 99
              }}></a>
            </NavItem>
            <NavItem eventKey="services">
              <NavIcon><i className="fas fa-tools" style={{ fontSize: '1.75em' }} /></NavIcon>
              <NavText>SERVICES</NavText>
              <a href="#services" style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: 99
              }}></a>
            </NavItem>
            <NavItem eventKey="experience">
              <NavIcon><i className="fas fa-graduation-cap" style={{ fontSize: '1.75em' }} /></NavIcon>
              <NavText>EXPERIENCE</NavText>
              <a href="#experience" style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: 99
              }}></a>
            </NavItem>
            <NavItem eventKey="portfolio">
              <NavIcon><i className="fas fa-book" style={{ fontSize: '1.75em' }} /></NavIcon>
              <NavText>PORTFOLIO</NavText>
              <a href="#portfolio" style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: 99
              }}></a>
            </NavItem>
            <NavItem eventKey="hobbies">
              <NavIcon><i className="fas fa-hourglass-half" style={{ fontSize: '1.75em' }} /></NavIcon>
              <NavText>HOBBIES</NavText>
              <a href="#hobbies" style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: 99
              }}></a>
            </NavItem>
            <NavItem eventKey="contacts">
              <NavIcon><i className="fas fa-address-card" style={{ fontSize: '1.75em' }} /></NavIcon>
              <NavText>CONTACTS</NavText>
              <a href="#contacts" style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: 99
              }}></a>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </header>
    )
  }
}
