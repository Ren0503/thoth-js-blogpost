import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'actions/userActions';
import logo from 'assets/logo.png';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <div>
            <Navbar variant='dark' className='text-light' expand='lg' collapseOnSelect sticky="top">
                <Container>
                    <Link to='/'>
                        <Navbar.Brand>
                            <Image src={logo} alt="Logo" width="80" className="avatar" />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls='navbarScroll' />
                    <Navbar.Collapse id='navbarScroll'>
                        <Nav className='ml-auto' navbarScroll>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Link to='/cart'>
                                <Nav.Link>
                                    <i className='fas fa-shopping-cart'></i> Cart
                                </Nav.Link>
                            </Link>
                            {userInfo ? (
                                <>
                                    <Image src={userInfo.avatar} width="40" height="40" roundedCircle />
                                    <NavDropdown title={userInfo.name} id='username'>

                                        <LinkContainer to='/profile'>
                                            <NavDropdown.Item>Profile</NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item onClick={logoutHandler}>
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            ) : (
                                <Link to='/login'>
                                    <Nav.Link>
                                        <i className='fas fa-user'></i> Sign In
                                    </Nav.Link>
                                </Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
