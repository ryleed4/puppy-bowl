const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-ET-WEB-AM";

export const fetchAllPuppies = async () => {
  try {
    const responce = await fetch(`${APIURL}/players`);
    const players = await responce.json();
    return players.data.players;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSinglePup = async (id) => {
  try {
    const responce = await fetch(`${APIURL}/player/${id}`);
    const singleDog = await responce.json();
    return singleDog;
  } catch (error) {
    console.log(error);
  }
};

export const postPuppy = async (name, breed) => {
  try {
    const responce = await fetch(`${APIURL}/player`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        breed,
      }),
    });
    const createdPup = await responce.json();
    return createdPup;
  } catch (error) {
    console.log(error);
  }
};

export const removePuppy = async (id) => {
  try {
    const responce = await fetch(`${APIURL}/players/${id}`, {
      method: "DELETE",
    });
    const player = await responce.json();
  } catch (error) {
    console.log(error);
  }
};
