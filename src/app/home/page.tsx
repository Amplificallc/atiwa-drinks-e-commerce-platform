import styles from "../home.module.css"
import Link from "next/link"
import Image from "next/image"
const home = () => {
  return (
    <main className="space-y-24">
 <section className={`flex flex-col justify-center px-10 space-y-3 ${styles.header}`}>
      <div className="w-3/4">
        <h1 className="text-white font-bold text-8xl">Purely <span className="text-green-600">Ghanaian</span> - <span className="text-green-600">Natural </span> Bitters Essence</h1>
      </div>
     <div>
      <Link href="">
        <button className="bg-white w-48 h-14 text-green-600 font-semibold rounded-md">Learn More</button>
      </Link>
     </div>
    </section>
    <section className="flex flex-row px-10">
    <div className ="w-1/2">
      <Image src={'/forest.jpg'} width={600} height={300} alt="Eastern Refion Forest" className="rounded-md"/>
    </div>
    </section>
    </main>
   
  )
}

export default home