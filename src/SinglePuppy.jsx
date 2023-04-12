import { useEffect, useState } from "react";
import { fetchSinglePup } from "./api";
import { useParams } from "react-router-dom";
export default function SinglePuppy() {
  const { id } = useParams();
  const [puppy, setPuppy] = useState(null);
  useEffect(() => {
    async function getPuppy() {
      const puppyResponce = await fetchSinglePup(id);
      setPuppy(puppyResponce);
    }
    getPuppy();
    console.log(puppy);
  }, []);
  return (
    <div>
      {puppy && (
        <div class="single-player-view">
          <div class="header-info">
            <p class="pup-title">${puppy.name}</p>
            <p class="pup-number">#${puppy.id}</p>
          </div>
          <p>Team: ${puppy.team ? puppy.team.name : "Unassigned"}</p>
          <p>Breed: ${puppy.breed}</p>
          <img src={puppy.imageUrl} alt="photo of the puppy" />
          <button id="see-all">Back to all players</button>
        </div>
      )}
    </div>
  );
}
