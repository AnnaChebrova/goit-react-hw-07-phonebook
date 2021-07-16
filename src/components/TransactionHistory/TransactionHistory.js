import transaction from './transactions.json'
import styles from './TransactionHistory.module.css'

const TransactionHistory = () => {
    return (
        <div className={styles.container}>
    <table>
        <thead>
        <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
        </tr>
        </thead>
      <tbody>{transaction.map((trans) => (
    <tr>
      <td>{trans.type}</td>
      <td>{trans.amount}</td>
      <td>{trans.currency}</td>
    </tr>
        ))
    }
    </tbody>
    </table>
    </div>
    )
}
  
    export default TransactionHistory;
