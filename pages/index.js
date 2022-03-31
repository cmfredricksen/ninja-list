import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
    </Head>
    <div>

      <h1 className={styles.title}>Home</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas dolore corporis, architecto quae aperiam voluptatibus fuga dignissimos ratione minus numquam nihil id, accusamus autem voluptate iure culpa dolores, perferendis perspiciatis iste provident deserunt modi? Hic eum voluptatem cumque ut odit libero ab corporis maxime. Similique temporibus dicta voluptate quibusdam?</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas dolore corporis, architecto quae aperiam voluptatibus fuga dignissimos ratione minus numquam nihil id, accusamus autem voluptate iure culpa dolores, perferendis perspiciatis iste provident deserunt modi? Hic eum voluptatem cumque ut odit libero ab corporis maxime. Similique temporibus dicta voluptate quibusdam?</p>

      <div className={styles.btn} >


      <Link href={"/ninjas"}>List of Ninjas </Link>
      </div>

    </div>
    </>
  )
}
