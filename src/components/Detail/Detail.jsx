import style from "./Detail.module.css";
import SystemReport from "./SystemReport";
import { report } from "../../data/systemData";
import { ValidateStatus } from "../../data/ValidateStatus";

const Detail = () => {
  return (
    <section className={style.detail}>
      <h1 className={style.detailHeader}>All System Operation report</h1>
      <div className={style.mainDetail}>
        {report.map((el, i) => (
          <SystemReport
            title={el.title}
            name={el.statusLogo}
            status={el.status}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Detail;
