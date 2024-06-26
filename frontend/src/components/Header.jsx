import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Login, Logout, resetUserList } from "../features/authSlice";
import { setUserDetails } from "../features/userDetailsSlice";
import { resetMyOrders } from "../features/orderSlice";
import SearchBox from "./SearchBox";
function Header() {
	const { userInfo } = useSelector((state) => state.userLogin);
	const dispatch = useDispatch();

	function logoutHandler() {
		// TODO: remove rest from Redux whatever makes sense
		dispatch(setUserDetails(null));
		dispatch(resetUserList());
		dispatch(Logout());
		dispatch(resetMyOrders());
	}

	return (
		<header>
			<Navbar
				expand="lg"
				bg="dark"
				data-bs-theme="dark"
				collapseOnSelect
			>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>SportShop</Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<SearchBox />
						<Nav style={{marginLeft : "auto"}}>
							{" "}
							{/* classname was me-auto before*/}
							<LinkContainer to="/cart">
								<Nav.Link>
									<i className="fas fa-shopping-cart"></i>Cart
								</Nav.Link>
							</LinkContainer>
							{userInfo ? (
								<NavDropdown title={userInfo.name} data-bs-theme="light">
									<LinkContainer to="/profile">
										<NavDropdown.Item>
											Profile
										</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<>
									<LinkContainer to="/login">
										<Nav.Link>
											<i className="fas fa-user"></i>Login
										</Nav.Link>
									</LinkContainer>
									<LinkContainer to="/register">
										<Nav.Link>
											<i></i>Register
										</Nav.Link>
									</LinkContainer>
								</>
							)}
							{userInfo && userInfo.isAdmin && (
								<NavDropdown title="Admin" id="adminmenu" data-bs-theme="light">
									<LinkContainer to="/admin/userlist">
										<NavDropdown.Item>
											Users
										</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to="/admin/productlist">
										<NavDropdown.Item>
											Products
										</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to="/admin/orderlist">
										<NavDropdown.Item>
											Orders
										</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}

export default Header;
