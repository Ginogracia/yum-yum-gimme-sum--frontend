





const MakeKey = async () => {

    try {


        const response = await fetch(`https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/keys`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
 
        });



        const apiKey = await response.json();



        if (!response.ok) {
          throw new Error('Nyckeln kunde inte hämtas.');
        }

        return apiKey
    
      } catch (error) {
        console.error('Fel vid hämtning av apinycklen.', error);
      }

    }


export default MakeKey;
