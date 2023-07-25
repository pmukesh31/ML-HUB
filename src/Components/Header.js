import styles from "./Header.module.css";
const Header = (props) => {
  return (
    <div className={styles.app__navbar}>
      <span className={styles.leethub}>&nbsp;ML-Hub</span>
    </div>
  );
};
export default Header;
