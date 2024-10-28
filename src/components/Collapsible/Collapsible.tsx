import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Collapsible.module.css';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Collapsible = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className={styles.collapsible}>
			<header className={styles.collapsibleHeader}>
				<h3>Header</h3>
				<div
					className={`${styles.iconContainer} ${
						isExpanded ? styles.iconExpanded : ''
					}`}
					onClick={toggleExpand}>
					<FontAwesomeIcon icon={faChevronDown} />
				</div>
			</header>
			<div
				className={`${styles.collapsibleContent} ${
					isExpanded ? styles.contentExpanded : ''
				}`}>
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
			</div>
		</div>
	);
};

export default Collapsible;
