import { useDispatch, useSelector } from "react-redux";
import RelatedVideoListItem from "./RelatedVideoListItem";
import { useEffect } from "react";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import Loading from "../ui/Loading";

const RelatedVideoList = ({ currentVideoId, tags }) => {
    const { relatedVideos, isLoading, isError, error } = useSelector(state => state.relatedVideos);
    console.log(currentVideoId, tags, relatedVideos)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRelatedVideos({ tags, id: currentVideoId }))
    }, [dispatch, tags, currentVideoId])
    let content = null;
    if (isLoading) {
        content = <Loading></Loading>
    }
    if (!isLoading && isError) {
        content = <div className="col-span-12">{error}</div>;
    }
    if (!isLoading && !isError && relatedVideos?.length === 0) {
        content = (<div className="col-span-12">No Related Video Is Found</div>);
    }
    if (!isLoading && !isError && relatedVideos?.length > 0) {
        content = (relatedVideos.map(video => <RelatedVideoListItem key={video.id} video={video}></RelatedVideoListItem>));
    }

    return (
        <div
            className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >
            {/* <!-- single related video --> */}
            {content}
        </div>
    );
};

export default RelatedVideoList;