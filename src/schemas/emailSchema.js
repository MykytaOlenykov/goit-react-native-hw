import * as yup from "yup";
import { schemaPatterns, schemaErrorMessages } from "../constants";

export const emailSchema = yup
  .string()
  .min(4, schemaErrorMessages.email.minLength)
  .max(255, schemaErrorMessages.email.maxLength)
  .matches(schemaPatterns.email, schemaErrorMessages.email.matches)
  .required(schemaErrorMessages.email.required);
