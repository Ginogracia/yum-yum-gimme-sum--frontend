import MakeKey from "./MakeKey.jsx";


const receiptGetter = async (orderNumber) => {

      const apiKey = await MakeKey();

    
        try {
            const response = await fetch(`https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/receipts/${orderNumber}`, {
                method: "GET",
                headers: {"x-zocom": `${apiKey.key}`
            }});

            if (!response.ok) {
              throw new Error("Något gick fel vid hämtning av kvittot...");
            }

            const data = await response.json();
            
            return data
          } catch (err) {
            console.error()
          }


        }
    



export default receiptGetter;