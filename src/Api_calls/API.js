export const getCharacter = async () => {
  const respose = await fetch('https://fe-cors-proxy.herokuapp.com', {
    headers: {
      "Target-URL": `https://potter-server.herokuapp.com/api/v1/characters`
    }
  })
  try {
    if (respose.ok) {
      return respose.json();
    }
  } catch (error) {
    console.log(error);
  }
}


