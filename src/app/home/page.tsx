import TopCategories from "@/components/Categories/cat";
import CompanyLogo from "@/components/Company-Logo/logo";
import Footer from "@/components/Footer/footer-1/footer1";
import HeroSection from "@/components/Hero-Section/hero";
import HotCategory from "@/components/hot-category/hot";
import NavbarLinks from "@/components/Navigation/Links/links";
import NavbarMiddle from "@/components/Navigation/Middle/page";
import NavbarTop from "@/components/Navigation/Top/page";
import OurProduct from "@/components/our-product/our";
import FeatureProduct from "@/components/Products/products";

export default function Home() {
  return(
    <div>
      <NavbarTop/>
      <NavbarMiddle/>
      <NavbarLinks/>
      <HeroSection/>
      <CompanyLogo/>
      <FeatureProduct/>
      <TopCategories/>
      <HotCategory/>
      <OurProduct/>
      <Footer/>
    </div>
  )
}