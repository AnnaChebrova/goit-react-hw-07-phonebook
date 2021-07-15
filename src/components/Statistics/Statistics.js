import statistics from './statistical-data.json'
import styles from './Statistics.module.css'

const Statistics = () => {
  return (
    <section className={styles.container}>
      <div className={styles.statContainer}>
      <h2 className={styles.title}>Upload stats</h2>
      <ul className={styles.statsList}>{statistics.map((stats) => (
        <li key={statistics.id} style={styles.option}>
          <span className={styles.label}>{stats.label}</span>
          <span className={styles.percentage}>{stats.percentage}%</span>
        </li>
      ))
  }
  </ul>
  </div>
  </section>
      )
  }

  export default Statistics;
   