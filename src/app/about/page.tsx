import Footer3 from "@/components/Footer/footer-1/footer3";
import Group from "@/components/Group/group";
import ImageBlock from "@/components/Image-Block/image";
import NavbarLinks from "@/components/Navigation/Links/links";
import NavbarMiddle from "@/components/Navigation/Middle/page";
import NavbarTop from "@/components/Navigation/Top/page";
import PopularProducts from "@/components/our-popular-product/popular";
import TextBlock from "@/components/text-block/text";

export default function AboutUS(){
    return (
        <div>
            <NavbarTop/>
            <NavbarMiddle/>
            <NavbarLinks/>
            <TextBlock/>
            <ImageBlock/>
            <div className="absolute top-[1200px] lg:top-[913px] left-[70px] lg:left-[750px]">
                <p className="font-inter font-semibold text-[25px] lg:text-[32px] leading-[35.2px]">What makes our Brand Different</p>
            </div>
            <div className="absolute  top-[2300px] lg:top-[1371px]  left-[100px] lg:left-[320px]">
                <p className="font-inter font-semibold text-[28px] lg:text-[32px] leading-[35.2px]">Our Popular Products </p>
            </div>
            <Group/>
            <PopularProducts/>
            <Footer3/>
        </div>
    )
}