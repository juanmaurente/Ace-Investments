import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SignUp from '../Buttons/SignUp/SignUp';
import Logo from '../Logo/Logo';
import Hamburguer from './Hamburguer/Hamburguer';
import styles from './Navbar.module.css';
import { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import MenuDisplay from './MenuLinks/MenuDisplay';
import Collapsible from '../Collapsible/Collapsible';

const Navbar = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleTogglemenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			<div
				className={`${styles.container}`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}>
				<div className={styles.navbarContent}>
					<Logo />

					<div className={styles.navigationButtons}>
						<ul>
							<li>
								Product <FontAwesomeIcon icon={faChevronDown} />
							</li>
							<li>Resources</li>
							<li>Pricing</li>
						</ul>
					</div>
					<div className={styles.accountButtons}>
						<a href=''>Login</a>
						{!menuOpen && (
							<SignUp isHovered={isHovered} menuOpen={menuOpen} />
						)}
						<Hamburguer
							menuOpen={menuOpen}
							toggleMenu={handleTogglemenu}
						/>
						<div className={`${menuOpen ? '' : styles.display}`}>
							<MenuDisplay menuOpen={menuOpen} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
