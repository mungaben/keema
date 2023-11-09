import Image from 'next/image'
import HomePage from './components/HomePage'
import MainNav from './components/NavBar/MainNav'
import Services from './components/Category/Services'
import ProductsPage from './components/Producst/ProductsPage'
import TestimonialPage from './components/Testimonials/TestimonialPage'
import WasteBankPage from './components/WasteBank/WasteBankPage'

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#fff] h-full gap-5">
      <MainNav/>
     <HomePage/>
     <Services/>
     <ProductsPage/>
     <TestimonialPage/>
     <WasteBankPage/>
    </main>
  )
}
