import { faMailchimp } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavWrapper, NavList, List, Icons, UserAccess, Button } from "./nav.style";



 const Nav = () => {
    return (
      <NavWrapper>
        <div className="wrapper">
          <NavList>
            <List>Product</List>
            <List>Resources</List>
            <List>Inspiration</List>
            <List>Pricing</List>
          </NavList>
          <Icons>
            <FontAwesomeIcon icon={faMailchimp} size="2x" className="chimp" />
            <p>Mailchimp</p>
          </Icons>

          <UserAccess>
            <FontAwesomeIcon icon={faSearch} className="search" />
            <Button>Log In</Button>
            <Button className="signup">Sign Up Free</Button>
          </UserAccess>
        </div>
      </NavWrapper>
    );
}

export default Nav;