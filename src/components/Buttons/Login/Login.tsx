import styles from './Login.module.css';

interface Props {
	isHovered: boolean;
	menuOpen: boolean;
}

const Login = ({ isHovered, menuOpen }: Props) => {
	if (isHovered) {
		return (
			<button className={`${styles.button} ${styles.containerHovered}`}>
				Login
			</button>
		);
	} else if (!menuOpen) {
		return (
			<button className={`${styles.button} ${styles.backgroundGray}`}>
				Login
			</button>
		);
	}

	return <button className={styles.button}>Login</button>;
};

export default Login;
