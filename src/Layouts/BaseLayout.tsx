import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import './BaseLayout.css'

export default function BaseLayout({children}:React.PropsWithChildren) {
  return (
    <div className='baseLayout'>
      <NavBar/>
      <div className='baseLayoutBody'>
          {children}
      </div>
      <Footer/>
    </div>
  )
}
