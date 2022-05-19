export const userAction = (data) => (dispatch) => {

  try {
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

export const login = (loginData) => (dispatch) => {

  fetch('http://localhost:3004/users', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(loginData);
      result.map((d) => {
        return loginData.map((a) => {
          if (d.email === a.email || d.password === a.password) {
            console.log('Matched');
          }

        })
        
      })
    })
}

