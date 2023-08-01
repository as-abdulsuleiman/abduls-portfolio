/** @format */

"use client";

import { Input } from "@/components/ui/input";
import { Paperclip, Contact as ContactIcon, Loader2 } from "lucide-react";
import { FC, useRef, ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { ContactValidator } from "@/lib/validators/contact";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import * as yup from "yup";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/constant";
import { useStorage } from "@/hooks/use-storage";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/config";
import axios from "axios";

interface ContactProps {
  viewport: boolean;
}

type FormData = yup.InferType<typeof ContactValidator>;

const Contact: FC<ContactProps> = ({ viewport }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<
    File | Blob | Uint8Array | ArrayBuffer | null
  >(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    getValues,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(ContactValidator),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      resume: "",
    },
  });
  const { resume } = getValues();

  const { uploading } = useStorage({
    file: selectedFile,
    fileName: fileName,
    storageLocation: "documents",
    setValue: setValue,
    setSelectedFile: setSelectedFile,
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const payload = await ContactValidator.validate(data);
      await addDoc(collection(db, "clients"), {
        ...payload,
      });
      const res = await handleFormSpree(payload);
      if (res.data.ok) {
        return toast({
          title: "Message sent successfully.",
          description:
            "Your enquiry has been recieved. I'll get back to you as soon as possible!",
          variant: "default",
        });
      }
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Could not send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      reset();
      setLoading(false);
      setSelectedFile(null);
      setFileName("");
    }
  };

  const handleFormSpree = async (data: FormData) => {
    return await axios({
      method: "POST",
      url: `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_CLIENT_ID}`,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      data: {
        ...data,
      },
    });
  };

  const handleOnchangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const mySelectedFile = e?.target?.files[0];
      setFileName(mySelectedFile?.name);
      setSelectedFile(mySelectedFile);
    }
  };

  return (
    <motion.section
      className="h-full lg:h-screen flex flex-col justify-start"
      id="contact"
    >
      <motion.div
        variants={staggerContainer({
          delayChildren: 0.1,
          staggerChildren: 0.1,
        })}
        className="mb-[100px] md:mb-[190px]"
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: "some",
        }}
      >
        <motion.div
          variants={fadeIn({
            direction: "up",
            type: "tween",
            delay: 0,
            duration: 1,
          })}
          className="flex items-center justify-center border-[1px] px-[1px] rounded-2xl py-[2.5px] bg-primary-black bg-gradient-to-tl from-primary-black via-zinc-400/5 to-zinc-900 border-[#717070] w-[93px] drop-shadow-md shadow-lg"
        >
          <ContactIcon className="h-3 w-3" color="#D8D3CB" />
          <div className="ml-[7px] text-[9px] mt-[1.4px] text-[#D8D3CB] font-medium">
            CONTACT
          </div>
        </motion.div>
        <div className="pt-[40px]">
          <motion.div
            variants={fadeIn({
              direction: "up",
              type: "tween",
              delay: 0.2,
              duration: 1,
              opacity: viewport ? 0 : 1,
            })}
            className="text-[#D8D3CB] text-3xl md:text-4xl "
          >
            {`Let's Work`} {""}
            <span className="text-[#32DD89]">Together!</span>
          </motion.div>
          <motion.div
            variants={fadeIn({
              direction: "up",
              type: "tween",
              delay: 0.3,
              duration: 1,
              opacity: viewport ? 0 : 1,
            })}
            className="font-sans text-[17px] pt-[30px] text-[#D8D3CB] font-semibold"
          >
            a.s.abdulsuleiman@gmail.com
          </motion.div>
          <div className="pt-[40px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <motion.div
                variants={fadeIn({
                  direction: "up",
                  type: "tween",
                  delay: 0.4,
                  duration: 1,
                  opacity: viewport ? 0 : 1,
                })}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6 md:gap-y-4"
              >
                <Input
                  className="bg-transparent"
                  id="name"
                  {...register("fullName", { required: true })}
                  placeholder="Your full name"
                  type="text"
                  label="FULL NAME"
                  error={errors?.fullName?.message}
                />
                <Input
                  className="bg-transparent"
                  placeholder="Your email address"
                  type="email"
                  label="EMAIL"
                  error={errors.email?.message}
                  {...register("email", { required: true })}
                />
              </motion.div>
              <motion.div
                variants={fadeIn({
                  direction: "up",
                  type: "tween",
                  delay: 0.4,
                  duration: 1,
                  opacity: viewport ? 0 : 1,
                })}
                className="grid grid-cols-1 gap-4 mt-8"
              >
                <Textarea
                  className="bg-transparent"
                  rows={6}
                  label="MESSAGE"
                  placeholder="Write your message here..."
                  {...register("message")}
                />
              </motion.div>
              <motion.div
                variants={fadeIn({
                  direction: "up",
                  type: "tween",
                  delay: 0.6,
                  duration: 1,
                  opacity: viewport ? 0 : 1,
                })}
                className="mt-8 max-w-[200px] flex ml-auto"
              >
                <div
                  className="flex cursor-pointer items-center ml-auto w-full justify-end"
                  onClick={() => {
                    if (inputRef.current) {
                      inputRef?.current.click();
                    }
                  }}
                >
                  <Paperclip className="h-3 w-3" color="#D8D3CB" />
                  <div className="ml-2 text-[12px] truncate text-[#D8D3CB] font-semibold">
                    {uploading
                      ? "Uploading file..."
                      : resume && fileName
                      ? fileName
                      : "ADD AN ATTACHMENT"}
                  </div>
                  <Input
                    ref={inputRef}
                    onChange={handleOnchangeFile}
                    accept=".pdf,.doc"
                    className={cn(
                      "focus-visible:ring-none border-none cursor-pointer hidden"
                    )}
                    type="file"
                  />
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn({
                  direction: "up",
                  type: "tween",
                  delay: 0.7,
                  duration: 1,
                  opacity: viewport ? 0 : 1,
                })}
              >
                <Button
                  disabled={isSubmitting || !isValid}
                  type="submit"
                  size="default"
                  className="mt-6 mx-auto md:ml-0 md:mr-auto md:mt-3 w-[90%] md:w-[32%] flex rounded-3xl text-[13px] font-light hover:scale-105 transition-transform ease-out duration-200 border-[#2CDB86] bg-[#2CDB86] text-[#1C1C23] hover:bg-[#2CDB86]"
                >
                  {loading ? (
                    <div className="flex items-center">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <div className="ml-2">Sending...</div>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </motion.div>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
