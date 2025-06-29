import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";

const Page = async ({ params }: ParamsWithSearch) => {
    const { id } = await params;
    return (
        <div className="wrapper page">
            <Header subHeader="andy.short101@gmail.com" title="Andy | Divine Development" userImg="/assets/images/dummy.jpg" />
            
            <section className="video-grid">
                {dummyCards.map((card) => (
                    <VideoCard key={card.id} {...card} />
                ))}
            </section>

        </div>
    );
};

export default Page;
