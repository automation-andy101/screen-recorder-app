import VideoPlayer from "@/components/VideoPlayer";
import { getVideoById } from "@/lib/actions/video";
import { redirect } from "next/navigation";

const Page = async ({ params }: Params) => {
  const { videoId } = await params;
  const { user, video } = await getVideoById(videoId);

  if (!video) redirect('/404');

  return (
    <main className="wrapper Page">
      <VideoPlayer />
    </main>
  )
}

export default Page