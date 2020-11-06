export const getCharacter = () => {
  return fetch (`https://www.potterapi.com/v1/characters?key=${process.env.REACT_APP_API_KEY}`)
  .then(respose => respose.json())
}