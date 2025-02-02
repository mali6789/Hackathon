import Footer7 from "@/components/Footer/footer-1/footer6";
import NavbarLinks from "@/components/Navigation/Links/links";
import NavbarMiddle from "@/components/Navigation/Middle/page";
import NavbarTop from "@/components/Navigation/Top/page";
import SingleProductCard from "@/components/Single-Product-Page/product";
import SingleProductPage from "@/components/Single-Product-Page/single";

export default function SingleProduct(){
    return (
        <div>
            <NavbarTop/>
            <NavbarMiddle/>
            <NavbarLinks/>
            <SingleProductPage/>
            <SingleProductCard/>
            <Footer7/>
        </div>
    )
}