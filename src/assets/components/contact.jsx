

export default function Contact(){
    return(
        <>
            <section id="contact" className="contact">
                <div className="mx-auto">
                    <div className="contact-box bg-primary px-5 xs:px-6 md:px-12 lg:px-14 2lg:px-20 xl:px-24 2xl:px-40 h-[500px] lg:h-[600px] 2lg:h-[700px] 4k:h-[1200px] relative flex items-center justify-center">
                        <div id="contact" className="bg-tertiary py-6 px-10 md:py-12 lg:py-10 2xl:py-12 4k:py-24 lg:px-40 2lg:px-44 2xl:px-52 4k:px-72 flex flex-col justify-center items-center gap-8 md:gap-12 lg:gap-14 2xl:gap-16 4k:gap-20 absolute -bottom-36 mx-auto w-[90%]" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                            <div id="kontak" className="flex flex-col gap-4 lg:gap-0 items-center justify-center leading-tight">
                                <p className="contact-font text-white text-[34px] lg:text-[60px] 3lg:text-[64px] xl:text-[72px] 2xl:text-[78px] 4k:text-[98px] text-center">Get In Touch</p>
                                <p className="contact-font text-white text-[34px] lg:text-[60px] 3lg:text-[64px] xl:text-[72px] 2xl:text-[78px] 4k:text-[98px] text-center">With Us</p>
                            </div>
                            <form action="" className="flex flex-col items-center justify-center gap-6 2xl:gap-8 4k:gap-10 w-full">
                                <input type="text" placeholder="Enter Your Name Here" className="contact-font py-2 px-5 lg:py-1 lg:px-2 2lg:py-4 4k:py-8 2lg:px-6 4k:px-10 text-[20px] 2lg:text-[24px] 2xl:text-[28px] 4k:text-[40px] w-full"/>
                                <input type="email" name="" id="" placeholder="Enter Your Email Address" className="contact-font py-2 px-5 lg:py-1 lg:px-2 2lg:py-4 4k:py-8 2lg:px-6 4k:px-10 text-[20px] 2lg:text-[24px] 2xl:text-[28px] 4k:text-[40px] w-full"/>
                                <textarea name="message" id="" placeholder="Enter Your Message Address" className="contact-font w-full py-2 px-5 lg:py-1 lg:px-2 2lg:py-4 4k:py-8 2lg:px-6 4k:px-10 text-[20px] 2lg:text-[24px] 2xl:text-[28px] 4k:text-[40px]"></textarea>
                                <button type="submit" className="flex items-center justify-center transition-all ease-in-out duration-300 hover:scale-95 py-2 px-10 lg:py-1 lg:px-3 2lg:py-4 4k:py-6 2lg:px-14 xl:px-16 4k:px-24 text-white contact-font2 bg-secondary rounded-md cursor-pointer text-[18px] lg:text-[16px] 2lg:text-[24px] 2xl:text-[26px] 4k:text-[32px]">Send</button>
                            </form>
                            <p className="contact-font2 text-white lg:text-[16px] 2lg:text-[14px] 3lg:text-[18px] 2xl:text-[22px] 4k:text-[30px] text-center font-light">* By clicking the <span className="font-bold">"Send"</span> button, your information can be viewed by the owner of Homelens.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}