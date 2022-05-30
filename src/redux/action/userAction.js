import * as ActionType from '../ActionType'

export const userAction = (data) => (dispatch) => {

  try {
    // fetch('http://192.168.43.200:8000/users', {
      fetch('http://localhost:3004/users', {
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
};

export const login = (loginData, navigation) => (dispatch) => {
  let flag = 0, id=0;
  // fetch('http://192.168.43.200:8000/users', {
    fetch('http://localhost:3004/users', {

    method: 'GET',
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      result.map((d) => { 
        if (d.email == loginData.email && d.password == loginData.password) {
          flag = 1;
          id = d.id;
          console.log("match");
        }
      })
      if (flag === 1) {
        dispatch({type: ActionType.SIGNIN_SUCCESS, payload: id})
        navigation.navigate("Home")
      } else {
        dispatch({type: ActionType.SIGNIN_ERROR, payload: "Wrong email/password"})
      }
    })  
    
}

