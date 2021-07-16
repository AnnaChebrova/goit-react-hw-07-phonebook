import friends from './friends.json'
import styles from './FriendList.module.css'

const FriendList = () => {
    return (
        <div className={styles.container}>
        <ul>{friends.map((friend) => (
            <li className={styles.friendItem} key={friend.id} >
            <span className={friend.isOnline?styles.onLine : styles.offLine}>{friend.isOnline}</span>
            <img className={styles.avatar} src={friend.avatar} alt="Аватар пользователя" width="50"/>
            <h2>{friend.name}</h2>
          </li>
        ))
    }
    </ul>
    </div>
        )
    }
  
    export default FriendList;
     
// В зависимости от пропа isOnline, должен меняться цвет
//  фона span.status. Это можно сделать через разный
//   CSS-класс или Styled Components.


