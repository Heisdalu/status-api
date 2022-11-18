import Detail from "../Detail/Detail";
import style from "./MainStatus.module.css";

const MainStatus = () => {
  return (
    <div>
      <main className={style.mainContainer}>
        <div className={style.mainHeader}>
          <h1 className={style.title}>Grittygrammar is Running </h1>
          <p className={style.text}>
            API Status for gritty grammar in realtime.
          </p>
        </div>

        <Detail />
      </main>
    </div>
  );
};

export default MainStatus;
