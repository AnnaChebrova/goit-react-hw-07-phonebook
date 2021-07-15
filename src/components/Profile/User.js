import styles from './Profile.module.css'

const Profile = ({avatar, name, tag, location, stats }) => {
    return (
        <div className={styles.container}>
           
            <div className={styles.profileContainer}>
                 <img className={styles.foto} src={avatar}
            alt="Аватар пользователя" width="150"
            />
                <h2>{name}</h2>
       <p className={styles.text}>@{tag}</p>
        <p className={styles.text}>{location}</p>
            <div className={styles.stats}>
        <ul className={styles.statsList}>
            <li>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{stats.followers}</span>
            </li>
            <li>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{stats.views}</span>
            </li>
            <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{stats.likes}</span>
            </li>
            </ul>
            </div>
            </div>
        </div>
        );
    };

    
    // Profile.defaultProps = {
    
    // avatar: defaultPhoto,
    
    // };
    
    
    // Profile.propTypes = {
    
    // avatar: PropTypes.string,
    
    // name: PropTypes.string.isRequired,
    
    // tag: PropTypes.string.isRequired,
    
    // location: PropTypes.string.isRequired,
    
    // stats: PropTypes.shape({
    
    // followers: PropTypes.number.isRequired,
    
    // views: PropTypes.number.isRequired,
    
    // likes: PropTypes.number.isRequired,
    
    // })
    
    // };

    
    export default Profile;
    