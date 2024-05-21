import Arrow from '../img/arrow-about.png'
import AboutCard from './about-card'
import AboutSlider from './about-slider'
import AboutSliderMobile from './about-slider2'


export default function About() {
    return (
        <>
            <section id='aboutus' className="about">
                <div className="mx-auto">
                    <div className="about-box bg-primary py-20 lg:py-44">
                        {/* laptop-desktop */}
                        <div className='hidden lg:block'>
                            <div className="flex justify-between items-center lg:px-14 2lg:px-20 xl:px-24 2xl:px-40">
                                {/* box1 */}
                                <div className="w-1/2 relative">
                                    <p className="about-font text-white w-[40%] text-[70px] 2xl:text-[102px] 4k:text-[125px] leading-tight" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">About Us</p>
                                    <img src={Arrow} alt="" className='absolute left-24' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"/>
                                </div>
                                {/* box2 */}
                                <div className="w-1/2">
                                    <p className="about-font-desc text-white text-[22px] 3lg:text-[24px] 2xl:text-[30px] 4k:text-[42px]" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">Tincidunt sagittis mollis nec suspendisse sed felis massa urna nec. Urna quisque blandit turpis ultrices arcu ut sed. Ultricies diam est aliquet porta fermentum molestie morbi libero. Ultrices sit in elit eget nullam sem. Urna velit imperdiet habitant in.</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center pt-72 pb-[200px] gap-6 2xl:gap-7 4k:gap-10'>
                                <AboutCard topTag="+10 years" bottomTag="Experience" delay={"100"} />
                                <AboutCard topTag="+450" bottomTag="Customers" delay={"400"} />
                                <AboutCard topTag="+150K" bottomTag="portfolio photos" delay={"700"}/>
                            </div>
                            <div className='relative'>
                                <AboutSlider />
                            </div>
                        </div>
                        {/* mobile-tablet */}
                        <div className='block lg:hidden px-5 xs:px-6 md:px-12'>
                            <div className='flex flex-col gap-10'>
                                <p className="about-font-desc text-white text-[22px] md:text-[24px]" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">Tincidunt sagittis mollis nec suspendisse sed felis massa urna nec. Urna quisque blandit turpis ultrices arcu ut sed. Ultricies diam est aliquet porta fermentum molestie morbi libero. Ultrices sit in elit eget nullam sem. Urna velit imperdiet habitant in.</p>
                                <div className='relative'>
                                    <p className="about-font text-white w-[60%] md:w-[45%] text-[70px] md:text-[90px] leading-tight" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">About Us</p>
                                    <img src={Arrow} alt="" className='absolute left-24' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="150"/>
                                </div>
                                <div className='flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 pt-52 pb-[50px] md:pb-24'>
                                    <AboutCard topTag="+10 years" bottomTag="Experience"/>
                                    <AboutCard topTag="+450" bottomTag="Customers"/>
                                    <AboutCard topTag="+150K" bottomTag="Portfolio Photos"/>
                                </div> 
                                <AboutSliderMobile />                                   
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}