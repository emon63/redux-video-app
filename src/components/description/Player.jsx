
const Player = ({ link, title }) => {
    return (
        <iframe
            width="100%"
            class="aspect-video"
            src={link}
            title={title}
            frameborder=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    );
};

export default Player;