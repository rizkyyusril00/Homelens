

export default function AboutCard({topTag, bottomTag, delay}) {

    return (
        <>
            <div className='flex flex-col items-center gap-2 md:gap-4 2xl:gap-6 4k:gap-8 md:items-end p-6 lg:py-6 lg:px-14 border-b-2 md:border-b-0 md:border-r-2 border-white transition-all duration-500 ease-in-out hover:scale-105' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={delay}>
                <p className='text-white about-list text-[34px] md:text-[38px] lg:text-[50px] 2xl:text-[58px] 4k:text-[72px] leading-tight'>{topTag}</p>
                <p className='text-white about-list2 text-[24px] md:text-[24px] lg:text-[24px] 2xl:text-[28px] 4k:text-[42px] leading-tight'>{bottomTag}</p>
            </div>
        </>
    )
}