import React from "react"
import PropTypes from "prop-types"


const YoutubeEmbed = ({embedId, title}) => {
  return (
    <div className=" relative overflow-hidden w-full pt-[56.25%]">
        <iframe className="absolute top-0 left-0 bottom-0 right-0 w-full h-full border-none rounded-xl"
        width={1280}
        height={480}
        src={`https://www.youtube.com/embed/${embedId}`}
        frameborder="0" 
        allowFullScreen
        title={title}
        />
    </div>
  )
}
YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};
export default YoutubeEmbed;