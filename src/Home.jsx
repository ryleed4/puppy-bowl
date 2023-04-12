import { fetchAllPuppies, removePuppy } from "./api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
const AllPuppiesDiv = () => {
  const navigate = useNavigate();
  const [allPuppies, setAllPuppies] = useState([]);
  useEffect(() => {
    async function getAllPuppies() {
      const APIdata = await fetchAllPuppies();
      console.log(APIdata);
      setAllPuppies(APIdata);
    }
    getAllPuppies();
  }, []);
  return (
    <div id="all-puppies-div">
      {allPuppies.map((pup) => {
        return (
          <div className="single-pup-card" key={pup.id}>
            <h3 className="pup-name">{pup.name}</h3>
            <p className="pup-id">{pup.id}</p>
            <img src={pup.imageUrl} />
            <button
              className="detail-button"
              onClick={() => {
                navigate(`/${pup.id}`);
              }}
            >
              See details
            </button>
            <button
              className="delete-button"
              onClick={async () => {
                await removePuppy(button.id);
                const players = await fetchAllPuppies();
                setAllPuppies(players);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default AllPuppiesDiv;
