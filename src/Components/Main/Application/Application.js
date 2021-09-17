/** @format */

// import Options from "./Options/Options";
import ApplicationSettings from "./ApplicationSettings";
import RoadMap from "./RoadMap/RoadMap";
import WaitingRoom from "../../UI/WaitngRoom";

import { useApplication } from "./ApplicationContext";
import { CAREERS } from "../../../config";

export default function Application() {
  const { career, group, order, triggerActionCareer } = useApplication();

  return (
    <div className='application'>
      <ApplicationSettings />
      {career ? (
        <RoadMap career={career} group={group} order={order} />
      ) : (
        <>
          <WaitingRoom text={"Selecciona una carrera"} />
          <div className='group--button'>
            {CAREERS.map((item, key) => (
              <button
                className='btn'
                onClick={() => triggerActionCareer(item)}
                key={key}>
                {item}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
