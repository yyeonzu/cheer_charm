import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CheeringCharm from "../components/CheerCharm/CheeringCharm";
import CheeredCharm from "../components/CheerCharm/CheeredCharm";
import { GetCharm } from "../api/charm";

const CharmPage = () => {
  const [isDone, setIsDone] = useState();
  const params = useParams();
  useEffect(() => {
    GetCharm(params.charm_id)
      .then(res => {
        console.log(res.data.data);
        if (res.data.data.total_cheer === res.data.data.cur_cheer)
          setIsDone(true);
        else setIsDone(false);
      })
      .catch();
  }, []);
  return <>{isDone ? <CheeredCharm /> : <CheeringCharm />}</>;
};

export default CharmPage;
