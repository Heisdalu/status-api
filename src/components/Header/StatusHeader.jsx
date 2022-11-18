import style from "./StatusHeader.module.css";
import GrittyLogo from "../../assets/Grit Grammar 1.png";

const StatusHeader = () => {
  return (
    <div className={style.header}>
      <a href="/home" className={style.headerLink}>
        <img
          src={GrittyLogo}
          alt="gritty grammar logo"
          className={style.grittyImg}
          width="113px"
          style={{ width: "100%", height: "auto" }}
        />
        <span className={style.status}>Status</span>
      </a>
    </div>
  );
};

export default StatusHeader;
