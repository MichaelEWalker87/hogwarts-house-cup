export const getCharacter = () => {
  try {
    return fetch (`https://www.potterapi.com/v1/characters?key=$2a$10$yK${process.env.REACT_APP_API_KEY}`)
    .then(respose => respose.json())
  } catch (error) {
    console.error(error);
  }
}
