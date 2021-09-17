/** @format */

// import Options from "./Options/Options";
import ApplicationSettings from "./ApplicationSettings";
import RoadMap from "./RoadMap/RoadMap";
import WaitingRoom from "../../UI/WaitngRoom";

import { useApplication } from "./ApplicationContext";

export default function Application() {
  const { career, group, order } = useApplication();

  return (
    <div className='application'>
      <ApplicationSettings />
      {career ? (
        <RoadMap career={career} group={group} order={order} />
      ) : (
        <WaitingRoom text={"Selecciona una carrera"} />
      )}
    </div>
  );
}
