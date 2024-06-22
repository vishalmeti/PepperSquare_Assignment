import "./body.css"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Galary from "./components/Galary"

const Body = () => {
    return (
        <div className="body" >
            <Galary />
            <Content />
            <Footer />

        </div>
    )
}

export default Body