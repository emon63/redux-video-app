import { useParams } from 'react-router-dom';
import Player from '../../components/description/Player'
import VideoDescription from '../../components/description/VideoDescription'
import RelatedVideoList from '../../components/list/RelatedVideoList'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchVideo } from '../../features/video/videoSlice';
import Loading from '../../components/ui/Loading';


const Video = () => {
    const { video, isLoading, isError, error } = useSelector((state) => state.video);
    const { videoId } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchVideo(videoId))
    }, [dispatch, videoId])

    const { id, link, title, tags } = video

    let content = null;
    if (isLoading) {
        content = <Loading></Loading>
    }
    if (!isLoading && isError) {
        content = (<div className="col-span-12">{error}</div>);
    }
    if (!isLoading && !isError && !video?.id) {
        content = (<div className="col-span-12">No Video Is Found</div>);
    }
    if (!isLoading && !isError && video?.id) {
        content = (<div class="grid grid-cols-3 gap-2 lg:gap-8">
            <div class="col-span-full w-full space-y-8 lg:col-span-2">
                {/* <!-- video player --> */}
                <Player link={link} title={title}></Player>

                {/* <!-- video description --> */}
                <VideoDescription video={video}></VideoDescription>
            </div>

            {/* <!-- related videos --> */}
            <RelatedVideoList currentVideoId={id} tags={tags}></RelatedVideoList>
        </div>)
    }



    return (
        <section class="pt-6 pb-20">
            <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                {content}
            </div>
        </section>
    );
};

export default Video;