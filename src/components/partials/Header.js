import React, { useState, useContext } from "react";
import { HashLink as Hash } from "react-router-hash-link";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../services/Auth";
import firebase from "../services/firebase";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Navbar
        expand="md"
        className="nav-bar"
        light
        sticky="top"
        style={{ backgroundColor: "white" }}
      >
        <NavbarBrand href="/">
          <img
            src="/images/logoWithName.svg"
            alt="CNA Logo"
            style={{ width: "100px", height: "80px", padding: "0" }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link className="nav-item" to={"/"}>
                  News
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="nav-item" to={"/Markets"}>
                  Market Analysis
                </Link>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar drop-down>
              <DropdownToggle nav caret className="nav-item">
                <Link className="nav-item" to={"/basics"}>
                  Cryptopedia
                </Link>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Hash className="nav-item" to="basics#blockchain">
                    Blockchain
                  </Hash>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Hash className="nav-item" to="basics#crypto">
                    Cryptocurrency
                  </Hash>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Hash className="nav-item" to="basics#btc">
                    Bitcoin
                  </Hash>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Hash className="nav-item" to="basics#eth">
                    Ethereum
                  </Hash>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Hash className="nav-item" to="basics#ico">
                    Initial Coin Offering
                  </Hash>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Hash className="nav-item" to="basics#ieo">
                    Initial Exchange Offering
                  </Hash>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            {!currentUser ? (
              <Button
                href="/Advertise"
                outline
                style={{ color: "#ffcc29" }}
                className="btn-class"
              >
                Advertise
              </Button>
            ) : (
              <Button
                href=""
                outline
                color="info"
                className="btn-class"
                style={{ color: "#ffcc29" }}
                onClick={() => firebase.auth().signOut()}
              >
                Logout
              </Button>
            )}
          </NavbarText>
        </Collapse>
      </Navbar>
      <coingecko-coin-price-marquee-widget
        coin-ids="bitcoin,ethereum,eos,ripple,litecoin"
        currency="usd"
        background-color="#ffffff"
        locale="en"
      ></coingecko-coin-price-marquee-widget>
    </>
  );
};

export default Header;
