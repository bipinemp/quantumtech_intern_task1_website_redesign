"use client";

import { ContactSchema, TContact } from "@/types/contactType";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<TContact>({
    resolver: zodResolver(ContactSchema),
  });

  function onSubmit() {
    const data = getValues();
    alert(`${data.name}, your message has been sent.`);
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 rounded-lg border border-input shadow-md flex flex-col gap-5"
    >
      <div className="flex items-center gap-3 bg-zinc-50 p-3 rounded-lg">
        <span className="p-4 rounded-full bg-primary">
          <Send className="size-10 text-background" />
        </span>
        <p className="text-[0.9rem] opacity-80">
          Write us a few words about your project and we’ll prepare a proposal
          for you within 24 hours
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-black pl-2 opacity-80 underline underline-offset-4">
          Required Information
        </h3>
        <div className="flex flex-col gap-5">
          <div className="w-full flex items-center gap-4 justify-between">
            <div className="w-full flex flex-col gap-1">
              <Input {...register("name")} placeholder="Your name*" />
              <span className="text-xs pl-2 text-destructive">
                {errors?.name?.message && errors?.name?.message}
              </span>
            </div>

            <div className="w-full flex flex-col gap-1">
              <Input {...register("email")} placeholder="Email Address*" />
              <span className="text-xs pl-2 text-destructive">
                {errors?.email?.message && errors?.email?.message}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <Input {...register("number")} placeholder="Contact Number" />
            <span className="text-xs pl-2 text-destructive">
              {errors?.number?.message && errors?.number?.message}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-bold opacity-80 text-[0.9rem] pl-2">
              Project requirements
            </h3>
            <Textarea
              rows={5}
              {...register("requirement")}
              placeholder="Enter your project summary details"
            />
            <span className="text-xs pl-2 text-destructive">
              {errors?.requirement?.message && errors?.requirement?.message}
            </span>
          </div>

          <Button>Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
