import * as ActionType from '../ActionType'

export const Product_Action = (pData) => (dispatch)=>{

    try {
        fetch('http://192.168.43.200:8000/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(pData),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', pData);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      } catch (e) {
        console.log(e);
      }
    
}