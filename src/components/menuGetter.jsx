import MakeKey from "./MakeKey.jsx";


const menuGetter = async () => {

      const apiKey = await MakeKey();

    
        try {
            const response = await fetch(`https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu`, {
                method: "GET",
                headers: {"x-zocom": `${apiKey.key}`
            }});

            if (!response.ok) {
              throw new Error("Något gick fel vid hämtning av menyn..");
            }
            const data = await response.json();

            
            return data.items 
          } catch (err) {
            console.error()
          }


        }
    



export default menuGetter;