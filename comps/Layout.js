import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return ( 
        <div class="content">

        <Navbar/>
            { children }
        <Footer/>
        </div>
     );
}
 
export default Layout;