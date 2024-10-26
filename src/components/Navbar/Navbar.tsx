import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SignUp from '../Buttons/SignUp/SignUp';
import Logo from '../Logo/Logo';
import Hamburguer from './Hamburguer/Hamburguer';
import styles from './Navbar.module.css';
import { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
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
						<SignUp isHovered={isHovered} />
						<Hamburguer />
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
