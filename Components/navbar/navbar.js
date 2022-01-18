import styles from './style.module.scss'
import { GoLinkExternal } from 'react-icons/go'
function Navbar(){
    return (
        <div className={styles.container}>
            <div className={styles.main}>Forevv</div>
            <div className={styles.links}>
                <div className={styles.link}><a>Home</a></div>
                <div className={styles.link}><a>About us</a></div>
                <div className={styles.link}><a>Elevator Pitch</a> <GoLinkExternal/></div>
                <div className={styles.link}><a className={styles.blue}>Get Early Access</a></div>
            </div>
            
        </div>
    )
}

export default Navbar;