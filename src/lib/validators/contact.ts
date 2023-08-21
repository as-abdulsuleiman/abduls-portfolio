/** @format */

import * as Yup from "yup";

export const ContactValidator = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().optional(),
  resume: Yup.string().optional(),
});
