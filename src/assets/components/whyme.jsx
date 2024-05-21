import WhymeCard from "./whyme-card";
import WhymeCard2 from "./whyme-card2";


export default function Whyme() {
    return(
        <>
            <section className="whyme">
                <div className="mx-auto">
                    <div className="whyme-box bg-primary py-36 3lg:pb-12 xl:pb-14 4k:pb-48 px-5 xs:px-6 md:px-12 lg:px-14 2lg:px-20 xl:px-24 2xl:px-40">
                        {/* laptop-desktop*/}
                        <WhymeCard />
                        {/* Mobile-tablet */}
                        <WhymeCard2 />
                    </div>
                </div>
            </section>
        </>
    )
}