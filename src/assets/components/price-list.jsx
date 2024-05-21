import PriceSlider from "./price-slider";
import PriceSlider2 from "./price-slider2";


export default function Price(){
    return(
        <>
            <section className="price">
                <div className="mx-auto">
                    <div className="price-box py-[120px]">
                        <p id="price" className="price-font text-white text-[70px] xl:text-[80px] 4k:text-[90px] mb-14 xl:mb-[60px] 4k:mb-24 px-5 xs:px-6 md:px-12 lg:px-14 2lg:px-20 xl:px-24 2xl:px-40" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">Pricelist</p>
                        <PriceSlider />
                        <PriceSlider2 />
                    </div>
                </div>
            </section>
        </>
    )
}