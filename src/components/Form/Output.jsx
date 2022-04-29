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
    return <p className="has-text-weight-medium mt-5">Something went wrong!</p>
  }

  console.log(generatedUrl);

  return (
    <> 
     {generatedUrl && (
        <div className="form mt-5">
          <p className="output-success">URL you pasted has been successfully shortened!</p>
          <div className="output-box mt-5 is-flex is-align-items-center">
          <p className="shortened">{generatedUrl}</p>
           <CopyToClipboard text={generatedUrl} onCopy={() => setCopyUrl(true)}>
            <button className={copyUrl ? "button is-danger " : "button is-dark"}>{copyUrl ? <p>Copied !</p> : <p>Copy URL</p>}</button>
          </CopyToClipboard>
          
          </div>
        </div>
      )} 

  </>
  );
};

export default Output;
