import style from "./SystemReport.module.css";
import ValidateLogo from "../ValidateLogo/ValidateLogo";

const SystemReport = ({ name, title, status }) => {
  return (
    <div className={style.systemReport}>
      <p className={style.systemTitle}>{title}</p>
      <p className={`${style.systemStatus} ${style[status]}`}>{status}</p>
      <span className={style.systemReportLogo}>
        <ValidateLogo LogoType={name} />
      </span>
    </div>
  );
};

export default SystemReport;
