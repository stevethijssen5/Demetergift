import React from 'react';
import { Oauth2Client } from '@metis.io/middleware-client';
import { useRouter } from 'next/router';
import Router from 'next/router'
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { EVENT } from './variables/Events';
declare let window: any;

export default function Header({ user }: any) {
	const router = useRouter();
	const { pathname } = useRouter();
	const { id } = router.query;


	var c = new Date(EVENT.EndDateTime).getTime();
	const timer = setInterval(function () {
		var n = new Date().getTime();
		var d = c - n;
		var da = Math.floor(d / (1000 * 60 * 60 * 24));
		var h = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var m = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
		var s = Math.floor((d % (1000 * 60)) / 1000);
		try {
			if (document.getElementById("LeftDate") !== null)
				(document.getElementById("LeftDate") as HTMLHRElement).innerHTML = (da.toString() + " days " + h.toString() + " hours " + m.toString() + " minutes " + s.toString() + " seconds");

		} catch { }
	}, 1000);


	function donation() {
		Router.push("/donation")
	}
	function StartEvent() {
		Router.push("/CreateEvents")

	}
	return (
		<header className="mb-5">
			<Navbar className="py-4" bg="#74B370" expand="lg" >
				<Container>
					<Link href="/">

						<a>
							<img className='NavImg' src='/favicon.svg'></img>
							<Navbar.Brand>MetisGift</Navbar.Brand>
						</a>
					</Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />


					<Navbar.Collapse>
						<Nav>
							<Nav.Item className="px-2">
								<Button onClick={donation} variant="secondary">
									Donate
								</Button>
							</Nav.Item>

							<Nav.Item className="px-2">
								<Button onClick={StartEvent} variant="secondary">
									Start Event
								</Button>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}
