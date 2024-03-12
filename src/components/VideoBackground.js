import useGetTrailerVideo from "../customHooks/useGetTrailerVideo";

function VideoBackground({movieId}) {
    const youtube = useGetTrailerVideo(movieId)
    return (
        <div>

            <iframe  src={"https://www.youtube.com/embed/" + youtube?.key}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                   ></iframe>

        </div>
    );
}

export default VideoBackground;