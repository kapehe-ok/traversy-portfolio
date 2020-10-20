import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import groq from "groq";

export default function Content() {
  const [contentData, setContent] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        groq`*[_type == "content"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setContent(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">
          My Content Page!
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my page of content
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentData &&
            contentData.map((content, index) => (
              <article>
                <Link
                  to={"/content/" + content.slug.current}
                  key={content.slug.current}
                >
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                    key={index}
                  >
                    <img
                      src={content.mainImage.asset.url}
                      alt={content.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                        {content.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
