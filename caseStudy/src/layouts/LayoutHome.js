import Header from "../includes/Header";
import Footer from "../includes/Footer";

export default function LayoutHome({ children }) {
    const username = 'NVA';
    return (
        <>
            <Header/>
            <section className="py-5">
                <div className="container-fluid pt-5">
                    {children}
                </div>
            </section>
            <Footer/>
        </>
    );
}