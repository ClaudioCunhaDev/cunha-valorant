import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const IndividualAgent = () => {
  const [agent, setAgent] = useState();
  const params = useParams();
  const [res, setRes] = useState(false);
  const url = `https://valorant-api.com/v1/agents/${params.agentId}`;
  const [readMore, setReadMore] = useState(true);

  const getIndividualAgent = async () => {
    const response = await fetch(url);
    const body = await response.json();
    setAgent({
      displayName: body.data.displayName,
      image: body.data.displayIcon,
      description: body.data.description,
      abilities: body.data.abilities,
      role: body.data.role.displayName,
      roleDescription: body.data.role.description,
    });
  };

  useEffect(() => {
    getIndividualAgent();
    if (innerWidth > 1440) {
      setRes(true);
    }
  }, []);

  if (!agent) {
    return <h1 className="text-center">Ooops! Invalid agent</h1>;
  }

  return (
    <div className="p-3">
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="rounded-t-lg h-44 md:h-auto w-48 md:rounded-none md:rounded-l-lg"
          src={agent.image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {agent.displayName}
          </h5>
        </div>
        <div>
          <h5 className="p-3 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            abilities:
          </h5>
          <div className="md:grid md:grid-cols-3 md:gap-3 p-3">
            {agent?.abilities?.map((ele, i) => (
              <div className="ml-5" key={ele.displayName}>
                <p className="text-center text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  {ele.displayName}
                </p>
                <div className="w-full flex justify-center bg-slate-300">
                  <img
                    className="bg-slate-900 h-40 p-1"
                    src={ele.displayIcon}
                    alt=""
                  />
                </div>
                {!res ? (
                  <p className="text-sm font-bold tracking-tight text-gray-600 dark:text-white">
                    {readMore
                      ? `${ele.description.substring(0, 150)} ... `
                      : ele.description}
                    <button
                      onClick={() => setReadMore((prv) => !prv)}
                      className=" text-blue-500"
                    >
                      {readMore ? "Show more" : "Show less"}
                    </button>
                  </p>
                ) : (
                  <p>{ele.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

{
  /* <h1>{agent.displayName}</h1>
<p>{agent.description}</p>
<div>
  <p>Abilities:</p>
  <ul>
    {agent?.abilities?.map((ele) => (
      <div key={ele.displayName}>
        <li>{ele.displayName}</li>
        <p>{ele.description}</p>
        <img className="bg-black" src={ele.displayIcon} alt="" />
      </div>
    ))}
  </ul>
</div>
<p>{agent.role}</p>
<p>{agent.roleDescription}</p> */
}
