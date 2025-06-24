import '@patternfly/react-core/dist/styles/base.css';
import * as React from 'react';
import {
  Page,
  PageSidebar,
  PageSection,
  Nav,
  NavItem,
  NavList,
  Masthead,
  MastheadMain,
  MastheadBrand,
  MastheadToggle
} from '@patternfly/react-core';

function App() {
  const header = (
    <Masthead>
      <MastheadToggle />
      <MastheadMain>
        <MastheadBrand>My App</MastheadBrand>
      </MastheadMain>
    </Masthead>
  );

  const nav = (
    <Nav>
      <NavList>
        <NavItem itemId={0} isActive>Home</NavItem>
        <NavItem itemId={1}>About</NavItem>
      </NavList>
    </Nav>
  );

  const sidebar = <PageSidebar nav={nav} isNavOpen />;

  return (
    <Page header={header} sidebar={sidebar}>
      <PageSection>
        <h1>Hello World - Now using PatternFly</h1>
      </PageSection>
    </Page>
  );
}

export default App;
