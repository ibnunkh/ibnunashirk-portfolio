import Navbar from "@/components/molecules/Navbar"
import Footer from "@/components/molecules/Footer"

const Layout = ({children}) => {
    return (
        <>
            <header>
                <Navbar />
            </header>

            {children}

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout