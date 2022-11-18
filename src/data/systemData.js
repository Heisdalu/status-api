import { SUCCESS, WARNING, FAILED } from "./statusTypes";
import { ValidateStatus } from "./ValidateStatus";

export const report = [
  {
    title: "Testing/swagger GUI",
    status: ValidateStatus(SUCCESS),
    statusLogo: SUCCESS,
  },
  {
    title: "Login/SSO",
    status: ValidateStatus(SUCCESS),
    statusLogo: SUCCESS,
  },
  {
    title: "Audio to whisper script",
    status: ValidateStatus(FAILED),
    statusLogo: FAILED,
  },
  {
    title: "Audio Transcribing",
    status: ValidateStatus(SUCCESS),
    statusLogo: SUCCESS,
  },
  {
    title: "Reset & forgotten password",
    status: ValidateStatus(WARNING),
    statusLogo: WARNING,
  },
  {
    title: "Notifications",
    status: ValidateStatus(FAILED),
    statusLogo: FAILED,
  },
];
