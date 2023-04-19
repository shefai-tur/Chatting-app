import React from 'react'
import { Link } from 'react-router-dom'
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton, } from "react-uploader";
const ProfileImgUpload = () => {
    const uploader = Uploader({
        apiKey: "free" // Get production API keys from Upload.io
      });
      const options = { multi: true };
  return (
    
    <div className="bg-primary w-full h-screen flex justify-center items-center ">
    <div className="bg-page h-72 w-96 mx-auto">
      <h1 className="text-white text-2xl font-bold font-pop ml-16 pt-10">
        Profile Picture Change
      </h1>
      <div className="pt-10 ml-10">
      <UploadButton                                                                                                                                                                                                                                                                                                     tton uploader={uploader}
                options={options}
                onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}>
    {({onClick}) =>
      <button onClick={onClick} className="bg-primary hover:bg-white hover:text-primary duration-75 px-2.5 py-1.5 rounded-md text-white text-lg font-bold ">
        Upload a file...
      </button>
    }
  </UploadButton>
       
        <button className="bg-primary hover:bg-white hover:text-primary px-2.5 py-1.5 rounded-md text-white text-lg font-bold  ml-5">
          <Link to="/home">Back to Home</Link>
        </button>
      </div>
    </div>
  </div>
  )
}

export default ProfileImgUpload