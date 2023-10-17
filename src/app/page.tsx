import Image from 'next/image'
import HomePage from './components/HomePage'
import MainNav from './components/NavBar/MainNav'
import Services from './components/Category/Services'
import ProductsPage from './components/Producst/ProductsPage'
import TestimonialPage from './components/Testimonials/TestimonialPage'

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#fff]">
      <MainNav/>
     <HomePage/>
     <Services/>
     <ProductsPage/>
     <TestimonialPage/>
    </main>
  )
}
