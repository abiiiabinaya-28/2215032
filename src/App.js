import React, { useState } from "react";

export default function UrlShortenerUI() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  function handleShorten(e) {
    e.preventDefault();

    setShortUrl("https://short/" + Math.floor(Math.random() * 10000));
  }

  return (
    <div className=" flex">
      <div className="bg-white">
        <h1 className=" font-bold">URL Shortener</h1>
        
        <form onSubmit={handleShorten} className="space-y-3">
          <input
            type="url"
            placeholder="Enter long URL"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            required
            className="border "
          />
          <button
            type="submit"
            className="text-white"
            style={{backgroundColor:"green"}}
          >
            Shorten
          </button>
        </form>

        {shortUrl && (
          <div className="text-center">
            <p className="text-gray-600">Shortened URL:</p>
            <a
              href={shortUrl}
              target="_blank"
            
              className="text-blue-600 underline"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
  
