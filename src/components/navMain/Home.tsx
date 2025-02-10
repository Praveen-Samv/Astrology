
import HeroSection from '../homescreens/HeroSection'
import LordDattatray from '../homescreens/LordDattatray'
import ExploreDivine from '../homescreens/ExploreDivine'
import WhyChooseUs from '../homescreens/WhyChooseUs'
import JoinDattaFamily from '../homescreens/JoinDattaFamily'
import Footer from './Footer'

const Home = () => {
  return (
    <>
          <div>
            <HeroSection />
            <LordDattatray  />
              <div className='-mt-36'><ExploreDivine /></div>
            <WhyChooseUs />
            <JoinDattaFamily />
            <Footer />
          </div>
    </>
  )
}

export default Home 