import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [champ, setChamp] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const [searchText, setSearchText] = useState("");
  const [playerResults, setPlayerResults] = useState({});
  const [error, setError] = useState(false);

  const cards = import.meta.env.VITE_CARDS;
  const clashuser = import.meta.env.VITE_CLASHUSER;
  const userChest = import.meta.env.VITE_USERCHEST;
  const clan = import.meta.env.VITE_CLAN;
  const champs = import.meta.env.VITE_CHAMPS;

  // console.log(playerName);

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

  // setPlayer('payku')

  // const getPlayerName = async (playerName) => {

  //   const url = `http://localhost:3307/lol/player`;
  //   const respuesta = await axios.get(url,{
  //     params: {
  //       playerName: playerName
  //     }
  //   });

  // }

  // const getPlayerName =  () => {
  //   axios.get('http://localhost:3307/lol/player',{
  //       params: {
  //         playerName: searchText
  //       }
  //     })
  //     .then((respuesta)=>{console.log(respuesta.data)})
  //     .catch((error)=>{console.log(error)})
  //     // console.log(playerName + 'entro');
  // }

  const getPlayerName = async () => {
    
      if (searchText === "") {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 4000);
      } else {
        const url = `https://blogporta.herokuapp.com/lol/player`;
        const respuesta = await axios.get(url, {
          params: {
            playerName: searchText,
          },
        });
        // console.log(respuesta.data);
        setPlayerResults(respuesta.data);
      }
    
  };

  // useEffect(() => {
  //   // getCards();
  //   // getuser();
  //   // getUserChest()
  //   // getUserClan()
  //   // getAllChamps(player);
  //   getPlayerName(playerName);
  // }, []);

  //  console.log(player)

  return (
    <div className="as">
      <p>Hola mundo desde vite</p>
      {/* <p>{data}</p> */}

      <input type="text" onChange={(e) => setSearchText(e.target.value)} />

      <button onClick={getPlayerName}>Enviar </button>


      {/* {error ? (
        <p>Ingrese un nombre de jugador correcto</p>
      ) : (
        <>
          <p>{playerResults.name}</p>
          <p>{playerResults.id}</p>
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/profileicon/${playerResults.profileIconId}.png`}
            alt=""
          />
        </>
      )} */}






      {
        Object.keys(playerResults).length > 0 ? (
          <>
            <p>{playerResults.name}</p>
            <p>{playerResults.id}</p>
            <img
            src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/profileicon/${playerResults.profileIconId}.png`}
            alt=""
          />
          </>
        ) : ('no hay resultados')
      }

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
