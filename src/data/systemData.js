import { SUCCESS, WARNING, FAILED } from "./statusTypes";

export const report = [
  {
    title: "Testing/swagger GUI",
    status: SUCCESS,
  },
  {
    title: "Login/SSO",
    status: SUCCESS,
  },
  {
    title: "Audio to whisper script",
    status: FAILED,
  },
  {
    title: "Audio Transcribing",
    status: SUCCESS,
  },
  {
    title: "Reset & forgotten password",
    status: WARNING,
  },
  {
    title: "Notifications",
    status: FAILED,
  },
];
