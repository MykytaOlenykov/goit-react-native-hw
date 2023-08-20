import * as yup from "yup";
import { schemaErrorMessages } from "../constants";

export const passwordSchema = yup
  .string()
  .min(8, schemaErrorMessages.password.minLength)
  .max(255, schemaErrorMessages.password.maxLength)
  .required(schemaErrorMessages.password.required);
