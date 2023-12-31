import axios from "axios";
import { useEffect, useState } from "react";
import { GiveawayCard } from "./GiveawayCard";
import { apiURL } from "../../../api/config";


export const InactiveGiveaways = () => {
  const [giveaways, setGiveaways] = useState([]);

  const getGiveaways = async () => {
    const { data } = await axios.get(`${apiURL}giveaway/all/0`);
    setGiveaways(data);
  };

  useEffect(() => {
    getGiveaways();
  }, []);

  return giveaways.length > 0 ? (
    <div>
      <div>
        <h1 className="font-subTitles font-semibold text-2xl md:text-3xl mb-6 uppercase text-center">
          Sorteos anteriores
        </h1>
      </div>
      <div className="flex flex-col mt-8 items-left w-full">
        <div className="grid grid-cols-3 gap-4 mt-4 mb-12">
          {giveaways.map((giveaway) => {
            return <GiveawayCard giveaway={giveaway} key={giveaway.id} />;
          })}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
