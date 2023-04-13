const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-ET-WEB-AM";

export const fetchAllPuppies = async () => {
  try {
    const response = await fetch(`${APIURL}/players`);
    const players = await response.json();
    return players.data.players;
  } catch (error) {
    console.err(error);
  }
};

export const fetchSinglePup = async (id) => {
  try {
    const response = await fetch(`${APIURL}/players/${id}`);
    const singleDog = await response.json();
    return singleDog;
  } catch (error) {
    console.err(error);
  }
};

export const postPuppy = async (name, breed) => {
  try {
    const response = await fetch(`${APIURL}/players`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        breed,
      }),
    });
    const createdPup = await response.json();
    return createdPup;
  } catch (error) {
    console.err(error);
  }
};

export const removePuppy = async (id) => {
  try {
    const response = await fetch(`${APIURL}/players/${id}`, {
      method: "DELETE",
    });
    const player = await response.json();
  } catch (error) {
    console.err(error);
  }
};
