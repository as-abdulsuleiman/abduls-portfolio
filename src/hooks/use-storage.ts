/** @format */

"use client";

import { useState, useEffect, SetStateAction, Dispatch } from "react";
import {
  UploadTask,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { projectStorage, ref } from "@/config";
import { UseFormSetValue } from "react-hook-form";
import { useToast } from "./use-toast";

type useStorageProps = {
  file: Blob | Uint8Array | ArrayBuffer | null;
  fileName: string;
  storageLocation: string;
  setValue: UseFormSetValue<{
    fullName: string;
    email: string;
    message: string | undefined;
    resume: string | undefined;
  }>;
  setSelectedFile: Dispatch<
    SetStateAction<File | Blob | Uint8Array | ArrayBuffer | null>
  >;
};

export const useStorage = ({
  file,
  fileName,
  storageLocation,
  setValue,
  setSelectedFile,
}: useStorageProps) => {
  const { toast } = useToast();
  const [uploading, setUploading] = useState<boolean>(false);
  let uploadTask: UploadTask | null;

  if (file) {
    const new_filename = `${new Date().getTime()}-${fileName}`;
    const storageRef = ref(
      projectStorage,
      `${storageLocation}/${new_filename}`
    );
    uploadTask = uploadBytesResumable(storageRef, file);
  }

  const getErrorMessage = (message: string) => {
    return toast({
      title: "Invalid File",
      description: message,
      variant: "destructive",
    });
  };

  useEffect(() => {
    if (file && uploadTask) {
      uploadTask.on(
        "state_changed",
        (snapshot: {
          bytesTransferred: number;
          totalBytes: number;
          state: string;
        }) => {
          setUploading(true);

          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error: any) => {
          setUploading(false);
          switch (error.code) {
            case "storage/unauthorized":
              getErrorMessage(
                `User doesn't have permission to access the object`
              );
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              getErrorMessage("User canceled the upload");
              // User canceled the upload
              break;
            // ...
            case "storage/unknown":
              getErrorMessage(
                "Unknown error occurred, inspect the server response"
              );
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL((uploadTask as UploadTask).snapshot.ref)
            .then((url: string) => {
              setValue("resume", url);
              uploadTask?.cancel();
              uploadTask = null;
              setUploading(false);
              setSelectedFile(null);
            })
            .catch((error) => {
              setUploading(false);
              switch (error.code) {
                case "storage/object-not-found":
                  getErrorMessage(`File doesn't exist`);
                  // File doesn't exist
                  break;
                case "storage/unauthorized":
                  getErrorMessage(
                    `User doesn't have permission to access the object`
                  );
                  // User doesn't have permission to access the object
                  break;
                case "storage/canceled":
                  getErrorMessage("User canceled the upload");
                  // User canceled the upload
                  break;
                // ...
                case "storage/unknown":
                  getErrorMessage(
                    "Unknown error occurred, inspect the server response"
                  );
                  // Unknown error occurred, inspect the server response
                  break;
              }
            });
        }
      );
    }
    return () => {
      if (file && uploadTask) {
        uploadTask.cancel();
        uploadTask = null;
      }
    };
  }, [file]);

  return { uploading };
};
