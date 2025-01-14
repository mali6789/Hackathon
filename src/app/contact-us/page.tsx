import Contact from "@/components/contact-us/contact";
import Footer6 from "@/components/Footer/footer-1/footer";
import NavbarLinks from "@/components/Navigation/Links/links";
import NavbarMiddle from "@/components/Navigation/Middle/page";
import NavbarTop from "@/components/Navigation/Top/page";


export default function ContactUs(){
    return (
        <div>
            <NavbarTop/>
            <NavbarMiddle/>
            <NavbarLinks/>
            <Contact/>
            <Footer6/>
        </div>
    )
}