import { useEffect, useState } from "react";
import { fetchSinglePup } from "./api";
import { useParams } from "react-router-dom";
export default function SinglePuppy() {
  const { id } = useParams();
  const [puppy, setPuppy] = useState(null);
  useEffect(() => {
    async function getPuppy() {
      const puppyResponce = await fetchSinglePup(id);
      console.log("Use Effect puppy res: ", puppyResponce);
      setPuppy(puppyResponce.data.player);
    }
    getPuppy();
  }, []);

  return (
    <div>
      {puppy && (
        <div class="single-player-view" key={puppy.id}>
          <div class="header-info">
            <p class="pup-title">{puppy.name}</p>
            <p class="pup-number">#{puppy.id}</p>
          </div>
          <p>Team: {puppy.team ? puppy.team.name : "Unassigned"}</p>
          <p>Breed: {puppy.breed}</p>
          <img
            className="single-player-img"
            src={puppy.imageUrl}
            alt="photo of the puppy"
          />
          <button id="see-all">Back to all players</button>
        </div>
      )}
    </div>
  );
}
