"use client";

/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import axios from "axios";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import "../../app/globals.css";
import { Inter } from "next/font/google";

// components
import Navbar from "../../app/components/Navbar";
import Foot from "../../app/components/Foot";

const rubik = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hendersen",
  description: "Hendersen Taxand",
};

interface Props {
  dirs: string[];
}

const Upload: NextPage<Props> = ({ dirs }) => {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();
  const [selected, setSelected] = useState(false);

  const handleUpload = async () => {
    if (selected) {
      setUploading(true);
      try {
        if (!selectedFile) return;
        const formData = new FormData();
        formData.append("myImage", selectedFile);
        const { data } = await axios.post("/api/image", formData);
        // console.log(data);
      } catch (error: any) {
        console.log(error.response?.data);
      }
      setUploading(false);
    }
    alert("上传成功！Image Uploaded!");
    location.reload();
  };

  return (
    <main>
      <Navbar />

      <div className="max-w-4xl mx-auto p-20 space-y-6">
        <label>
          <input
            type="file"
            hidden
            onChange={({ target }) => {
              if (target.files) {
                const file = target.files[0];
                setSelectedImage(URL.createObjectURL(file));
                setSelectedFile(file);
                setSelected(true);
              }
            }}
          />
          <div className="w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer shadow-lg shadow-slate-700">
            {selectedImage ? (
              <img src={selectedImage} alt="" />
            ) : (
              <span>Select Image</span>
            )}
          </div>
        </label>
        <div>{selectedFile?.name}</div>
        <div>请注意文件大小不得超过5MB</div>
        <button
          onClick={handleUpload}
          disabled={uploading || !selected}
          style={{ opacity: uploading ? ".5" : "1" }}
          className="bg-red-600 p-3 w-32 rounded text-white "
        >
          {uploading ? "Uploading.." : "Upload"}
        </button>

        <div className=" grid md:grid-cols-3">
          {dirs.map((item) => (
            <div key={item}>
              <Link href={"/images/" + item}>
                <div>
                  <img
                    src={"/images/" + item}
                    alt=""
                    width={100}
                    className="h-20 object-scale-down m-5"
                  />
                </div>
              </Link>
              <div className="text-gray-500 text-sm hover:underline mx-5">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Foot />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const props = { dirs: [] };
  try {
    const dirs = await fs.readdir(path.join(process.cwd(), "/public/images"));
    props.dirs = dirs as any;
    return { props };
  } catch (error) {
    return { props };
  }
};

export default Upload;
