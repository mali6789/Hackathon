import AllProduct from "@/components/All-Product/prod";
import Footer2 from "@/components/Footer/footer-1/footer2";
import NavbarLinks from "@/components/Navigation/Links/links";
import NavbarMiddle from "@/components/Navigation/Middle/page";
import NavbarTop from "@/components/Navigation/Top/page";
import Newsletter from "@/components/newsletter-intagram/new";

const Product = () => {
  return (
    <div>
      <NavbarTop/>
      <NavbarMiddle/>
      <NavbarLinks/>
      <AllProduct/>
      <Newsletter/>
      <Footer2/>
    </div>
  );
};

export default Product;