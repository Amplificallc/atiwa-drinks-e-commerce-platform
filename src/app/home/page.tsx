import styles from "../home.module.css"
import Link from "next/link"
const home = () => {
  return (
    <section className={`flex flex-col justify-center px-10 ${styles.header}`}>
      <div className="w-3/4">
        <h1 className="text-white font-bold text-8xl">Purely <span className="text-green-600">Ghanaian</span> - <span className="text-green-600">Natural </span> Bitters Essence</h1>
      </div>
     <div>
      <Link href="">
        <button className="bg-white w-48 h-12 text-green-600 font-medium rounded-md">Learn More</button>
      </Link>
     </div>
    </section>
  )
}

export default home