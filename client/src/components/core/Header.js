import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'actions/userActions';
import logo from 'assets/logo.png';
import { Container, Image, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import Search from './Search';

const Header = () => {
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <Navbar className='' expand='lg' collapseOnSelect>
            <Container>
                <Link to='/'>
                    <Navbar.Brand>
                        <Image src={logo} alt="Logo" width="50" className="avatar" />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Navbar.Collapse id='navbarScroll'>
                    <Route render={({ history }) => <Search history={history} />} />
                    <Nav className='ml-auto' navbarScroll>
                        <Nav.Link href="/g">Generate</Nav.Link>
                        <Nav.Link href="/story">Discover</Nav.Link>
                        {userInfo ? (
                            <>
                                <Image src={userInfo.avatar} width="40" height="40" roundedCircle />
                                <NavDropdown title={userInfo.name} id='username'>
                                    <Link to='/my_stories'>
                                        <NavDropdown.Item href="/my_stories">My Stories</NavDropdown.Item>
                                    </Link>
                                    <Link to='/profile'>
                                        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                    </Link>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </>
                        ) : (
                            <>
                                <Nav.Link href="/login" style={{ padding: 0, margin: 0 }}>
                                    <Button className="btn btn-light">
                                        Login
                                    </Button>
                                </Nav.Link>
                                <Nav.Link href="/login" style={{ padding: 0, margin: 0 }}>
                                    <Button className="btn btn-dark">
                                        Register
                                    </Button>
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
