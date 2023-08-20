import * as yup from "yup";
import { schemaErrorMessages } from "../constants";

export const nameSchema = yup
  .string()
  .trim()
  .min(2, schemaErrorMessages.name.minLength)
  .max(255, schemaErrorMessages.name.maxLength)
  .required(schemaErrorMessages.name.required);
