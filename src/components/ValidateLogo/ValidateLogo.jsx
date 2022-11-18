import successLogo from "../../assets/success.svg";
import failedLogo from "../../assets/failed.svg";
import warningLogo from "../../assets/warning.svg";
import style from "./ValidateLogo.module.css";
import { SUCCESS, FAILED, WARNING } from "../../data/statusTypes";

const ValidateLogo = ({ LogoType }) => {
  if (LogoType === SUCCESS) {
    return <img src={successLogo} alt="" className={style.statusLogo} />;
  }
  if (LogoType === FAILED) {
    return <img src={failedLogo} alt="" className={style.statusLogo} />;
  }
  if (LogoType === WARNING) {
    return <img src={warningLogo} alt="" className={style.statusLogo} />;
  }
};

export default ValidateLogo;
