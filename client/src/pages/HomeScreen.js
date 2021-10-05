import About from "../components/About"
import Banner from "../components/Banner"
import Dishes from "../components/Dishes"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import Review from "../components/Review"


function HomeScreen() {
    return (
        <div>
            <Banner/>
            <Dishes/>
            <About/>
            <Menu/>
            <Review/>
            <Footer/>
        </div>
    )
}

export default HomeScreen
