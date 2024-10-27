import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './MenuDisplay.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Login from '../../Buttons/Login/Login';
import SignUp from '../../Buttons/SignUp/SignUp';

interface Props {
	menuOpen: boolean;
}

const MenuDisplay = ({ menuOpen }: Props) => {
	const [subMenu, setSubMenu] = useState(false);

	const handleSubmenu = () => {
		setSubMenu(!subMenu);
	};

	return (
		<div
			className={`${styles.displayContainer} ${
				menuOpen ? styles.visible : ''
			}`}>
			<ul>
				<li className={styles.wChevron} onClick={handleSubmenu}>
					<span>Product</span>
					<FontAwesomeIcon icon={faChevronDown} />
				</li>
				{/* Submenu only shows if subMenu is true */}
				{subMenu && (
					<div className={styles.subMenuContainer}>
						<ul>
							<li>
								<span>01</span>
								<span>How it works</span>
							</li>
							<li>
								<span>02</span>
								<span>Features</span>
							</li>
							<li>
								<span>03</span>
								<span>Data privacy</span>
							</li>
							<li>
								<span>04</span>
								<span>Case studies</span>
							</li>
							<li>
								<span>05</span>
								<span>Testimonials</span>
							</li>
							<li>
								<span>06</span>
								<span>Portfolio calculator</span>
							</li>
						</ul>
					</div>
				)}
				<li>Resources</li>
				<li>Pricing</li>
				<div className={styles.fullWidthButtons}>
					<SignUp isHovered={false} menuOpen />
					<Login isHovered={false} menuOpen={false} />
				</div>
			</ul>
		</div>
	);
};

export default MenuDisplay;
