import Header from "../includes/Header";
import Announcement from "../includes/Announcement";
import Footer from "../includes/Footer";
export default function LayoutMaster({ children }) {
    return (
        <>
            <Header/>
            <div className="container-fluid pt-5">
                { children }
            </div>
            <Footer/>
        </>
    );
}