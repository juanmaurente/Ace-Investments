import styles from './SignUp.module.css';

interface Props {
	isHovered: boolean;
}

const SignUp = ({ isHovered }: Props) => {
	if (isHovered) {
		return (
			<button className={`${styles.button} ${styles.containerHovered}`}>
				Sign Up
			</button>
		);
	}
	return <button className={styles.button}>Sign Up</button>;
};

export default SignUp;
