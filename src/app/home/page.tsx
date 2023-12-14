import styles from "../home.module.css"
const home = () => {
  return (
    <section className={`flex flex-col justify-center px-10 ${styles.header}`}>
      <div className="w-3/4">
        <h1 className="text-white font-bold text-8xl">Purely <span className="text-green-600">Ghanaian</span> - <span className="text-green-600">Natural </span> Bitters Essence</h1>
      </div>
    </section>
  )
}

export default home