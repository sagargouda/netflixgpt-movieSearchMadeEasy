import useGetTrailerVideo from "../customHooks/useGetTrailerVideo";
import {useSelector} from "react-redux";

function VideoBackground({movieId}) {

//  we will use that trailer id and dynamically set trailer id in youtube
    const youtube = useSelector(store=>store.movies?.trailerVideo)

   useGetTrailerVideo(movieId)
    return (
        <div>

            <iframe className="w-screen h-screen aspect-video  md:w-screen md:h-screen md:aspect-video "  src={"https://www.youtube.com/embed/" + youtube?.key  + "?&autoplay=1&mute=1"}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                   ></iframe>

        </div>
    );
}

export default VideoBackground;