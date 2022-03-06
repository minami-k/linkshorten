import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import "./form.css";

const Output = ({ inputValue }) => {
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [copyUrl, setCopyUrl] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setGeneratedUrl(res.data.result.full_short_link);
    } catch (err) {
      setErr(err)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    if (inputValue) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const backToNormal = setTimeout(() => {
      setCopyUrl(false);
    }, 1500);

    return () => clearTimeout(backToNormal);
  }, [copyUrl]);

  if(loading){
    return <p className="has-text-weight-medium mt-5">Loading......</p>
  }
  if(err){
    return <p>Something went wrong!</p>
  }

  console.log(generatedUrl);

  return (
    <> 
     {generatedUrl && (
        <div className="form">
           <CopyToClipboard text={generatedUrl} onCopy={() => setCopyUrl(true)}>
            <button className={copyUrl ? "copyUrl" : ""}>Copy new URL</button>
          </CopyToClipboard>
          <p>{generatedUrl}</p>
         
        </div>
      )} 

  </>
  );
};

export default Output;
