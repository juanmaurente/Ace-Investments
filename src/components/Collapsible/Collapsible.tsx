import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Collapsible.module.css';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import data from './Collapsible.json';
import { useState } from 'react';

interface Props {
	header: string;
	items: string[];
}

const Collapsible = () => {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

	const toggleExpand = (index: number) => {
		setExpandedIndex(expandedIndex === index ? null : index);
	};

	return (
		<div>
			{(data as Props[]).map((section, index) => (
				<div key={index} className={styles.collapsible}>
					<header
						className={styles.collapsibleHeader}
						onClick={() =>
							section.items.length > 0 && toggleExpand(index)
						}>
						<h3>{section.header}</h3>
						{section.items.length > 0 && ( // Show chevron only if items exist
							<div
								className={`${styles.iconContainer} ${
									expandedIndex === index
										? styles.iconExpanded
										: ''
								}`}>
								<FontAwesomeIcon icon={faChevronDown} />
							</div>
						)}
					</header>
					{section.items.length > 0 && ( // Show content only if items exist
						<div
							className={`${styles.collapsibleContent} ${
								expandedIndex === index
									? styles.contentExpanded
									: ''
							}`}>
							<div className={styles.subMenuContainer}>
								<ul>
									{section.items.map((item, itemIndex) => (
										<li key={itemIndex}>
											<span>
												{String(itemIndex + 1).padStart(
													2,
													'0',
												)}
											</span>
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					)}
				</div>
			))}
		</div>
	);
};
export default Collapsible;
