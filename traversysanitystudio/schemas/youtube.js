import React from "react";
import getYouTubeId from "get-youtube-id";

const YouTubePreview = ({ value }) => {
  const id = getYouTubeId(value.url);
  const url = `https://www.youtube.com/embed/${id}`;
  if (!id) {
    return <div>Missing YouTube URL</div>;
  }
  return (
    <iframe
      title="YouTube Preview"
      width="560"
      height="315"
      src={url}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
};

export default {
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "url",
      title: "YouTube Video URL",
      type: "url",
    },
  ],
  preview: {
    select: {
      url: "url",
      title: "title",
    },
    component: YouTubePreview,
  },
};
