import VideoDetailHeader from "@/components/VideoDetailHeader";
import VideoPlayer from "@/components/VideoPlayer";
import { getVideoById } from "@/lib/actions/video";
import { redirect } from "next/navigation";

const Page = async ({ params }: Params) => {
  const { videoid } = await params;
  const { user, video } = await getVideoById(videoid);

  if (!video) redirect('/404');

  return (
    <main className="wrapper Page">
      <VideoDetailHeader {...video} userImg={user?.image} username={user?.name} ownerId={video.userId} />

      <section className="video-details">
        <div className="content">
          <VideoPlayer videoId={video.videoId} />
        </div>
      </section>
      
    </main>
  )
}

export default Page