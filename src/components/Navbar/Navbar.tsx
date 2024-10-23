import SignUp from '../Buttons/SignUp/SignUp';
import Logo from '../Logo/Logo';
import Hamburguer from './Hamburguer/Hamburguer';
import styles from './Navbar.module.css';
import { useState } from 'react';

const Navbar = () => {
	return (
		<>
			<div className={`${styles.container}`}>
				<div className={styles.navbarContent}>
					<Logo />
					<div className={styles.navbarButtons}>
						<SignUp />
						<Hamburguer />
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
