import styles from './SignUp.module.css';

interface Props {
	isHovered: boolean;
	menuOpen: boolean;
}

const SignUp = ({ isHovered, menuOpen }: Props) => {
	if (isHovered) {
		return (
			<button className={`${styles.button} ${styles.containerHovered}`}>
				Sign Up
			</button>
		);
	} else if (menuOpen) {
		return (
			<button className={`${styles.button} ${styles.backgroundBlue}`}>
				Sign Up
			</button>
		);
	}
	return <button className={styles.button}>Sign Up</button>;
};
export default SignUp;
