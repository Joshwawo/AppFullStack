import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [champ, setChamp] = useState([]);
  const cards = import.meta.env.VITE_CARDS;
  const clashuser = import.meta.env.VITE_CLASHUSER;
  const userChest = import.meta.env.VITE_USERCHEST;
  const clan = import.meta.env.VITE_CLAN;
  const champs = import.meta.env.VITE_CHAMPS;

  const getCards = async () => {
    // const url = `${cards}?user=${clashuser}&chest=${userChest}&clan=${clan}`;
    const url = cards;

    const respuesta = await axios.get(url);
    // console.log(respuesta.data.items)
    setData(respuesta.data.items);
  };

  const getuser = async () => {
    const url = clashuser;
    const respuesta = await axios.get(url);
    // console.log(respuesta.data)
  };

  const getUserChest = async () => {
    const url = userChest;
    const respuesta = await axios.get(url);
    // setData(respuesta.data.items)
    console.log(respuesta.data.items);
  };

  const getUserClan = async () => {
    const url = clan;
    const respuesta = await axios.get(url);
    // console.log(respuesta.data)
  };

  const getAllChamps = async () => {
    const url = champs;
    const respuesta = await axios.get(url);
    // console.log(respuesta.data)
    // setData(respuesta.data)
    // setData(Object.values(data.data))
    setChamp(Object.values(respuesta.data.data));
  };

  useEffect(() => {
    // getCards();
    // getuser();
    // getUserChest()
    // getUserClan()
    getAllChamps();
  }, []);

  // console.log(data)

  // console.log(data.data)
  // console.log(Object.values(data.data))
  // Object.value(data.data)
  // data.data === undefined ? console.log("no hay data")
  // : (Object.values(data.data))

  // console.log(data.data)
  // console.log(champ)

  console.log(data);

  return (
    <div className="as">
      <p>Hola mundo desde vite</p>
      {/* <p>{data}</p> */}

      <div className=" grid grid-cols-2 gap-4">
        {champ.map((champ, index) => {
          return (
            <div key={champ.key}>
              {/* <img src={`https://ddragon.leagueoflegends.com/cdn/12.15.1/img/champion/${champ.image.full}`} alt="" /> */}
              {/* <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg`} alt="" /> */}
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg`}
                alt=""
              />
              <p>{champ.name}</p>
              <p>{champ.version}</p>
              <p>{champ.tags}</p>
              <p>{champ.title}</p>
              <p>{champ.partype}</p>
              <p>{champ.blurb}</p>
            </div>
          );
        })}
      </div>

      <div className=" grid grid-cols-7">
        {/* {
        data.map((card, index)=>{
          // console.log(card)
          return(
            <div key={index} className=""   >
              <p>{card.index}</p>
              <p>{card.name}</p>

            </div>
          )
        })
      } */}
      </div>
    </div>
  );
}

export default App;
