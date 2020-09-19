import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube videoId={id} />;
    },
  },
};

export default function SingleContent() {
  const [singleContent, setSingleContent] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
          asset->{
            _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
        }`
      )
      .then((data) => setSingleContent(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singleContent) return <div>Loading...</div>;

  return (
    <div className="bg-gray-200 min-h-screen p-12">
      <div className="container shadow-lg mx-auto bg-green-100 rounded-lg">
        <div className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h2 className="cursive text-3xl lg:text-6xl mb-4">
                {singleContent.title}
              </h2>
              <div className="flex justify-center text-gray-800">
                <img
                  src={urlFor(singleContent.authorImage).url()}
                  alt={singleContent.name}
                  className="w-10 h-10 rounded-full"
                />
                <h4 className="cursive flex items-center pl-2 text-2xl">
                  {singleContent.name}
                </h4>
              </div>
            </div>
          </div>
          <img
            src={singleContent.mainImage.asset.url}
            alt={singleContent.title}
            className="w-full object-cover rounded-t"
            style={{ height: "400px" }}
          />
        </div>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          <BlockContent
            serializers={serializers}
            blocks={singleContent.body}
            projectId="ph4hgpxb"
            dataset="production"
          />
        </div>
      </div>
    </div>
  );
}
