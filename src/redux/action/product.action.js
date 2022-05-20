import * as ActionType from '../ActionType'

export const Product_Action = (pData) => (dispatch)=>{

    try {
        fetch('http://localhost:3004/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      } catch (e) {
        console.log(e);
      }
    
}