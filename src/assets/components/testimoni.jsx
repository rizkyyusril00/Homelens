import TestimoniSlider from "./testimoni-slider";
import SliderCube from "./testimoni-slider-cube";


export default function Testimoni() {
    return(
        <>
            <section className="testimoni overflow-hidden">
                <div className="mx-auto">
                    <div className="testimoni-box py-[70px] lg:py-[120px] bg-secondary px-5 xs:px-6 md:px-12 lg:px-14 2lg:px-20 xl:px-24 2xl:px-40">
                        <p className="testimonials-font text-[40px] xs:text-[50px] md:text-[70px] xl:text-[80px] 4k:text-[90px] text-white mb-14" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">Testimonials</p>
                        <TestimoniSlider />
                        <SliderCube  />
                    </div>
                </div>
            </section>
        </>
    )
}