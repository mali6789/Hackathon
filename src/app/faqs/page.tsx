import FaqsBox from "@/components/box/box";
import Footer5 from "@/components/Footer/footer-1/footer5";
import NavbarLinks from "@/components/Navigation/Links/links";
import NavbarMiddle from "@/components/Navigation/Middle/page";
import NavbarTop from "@/components/Navigation/Top/page";

export default function Faqs() {
    return (
        <div>
            <NavbarTop/>
            <NavbarMiddle/>
            <NavbarLinks/>
            <FaqsBox/>
            <Footer5/>
        </div>
    )
}