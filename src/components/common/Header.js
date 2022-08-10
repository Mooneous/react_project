import { Link, NavLink } from 'react-router-dom';

function Header() {
	const active = { color: 'cornflowerblue' };

	return (
		<header>
			<h1>
				<Link to='/'>LOGO</Link>
			</h1>

			<nav>
				<div className='navWrap'>
					<ul className='gnb'>
						<li>
							<NavLink to='/community' activeStyle={active}>
								Community
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/department'
								activeStyle={active}>
								Department
							</NavLink>
						</li>
						<li>
							<NavLink to='/gallery' activeStyle={active}>
								Gallery
							</NavLink>
						</li>
						<li>
							<NavLink to='/location' activeStyle={active}>
								Location
							</NavLink>
						</li>
						<li>
							<NavLink to='/members' activeStyle={active}>
								Members
							</NavLink>
						</li>
						<li>
							<NavLink to='/youtube' activeStyle={active}>
								Youtube
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Header;
