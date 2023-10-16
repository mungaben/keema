import Image from 'next/image'
import HomePage from './components/HomePage'
import MainNav from './components/NavBar/MainNav'

export default function Home() {
  return (
    <main className="relative">
      <MainNav/>
     <HomePage/>
    </main>
  )
}
