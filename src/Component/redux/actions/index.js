export const SET_PROFILES = "SET_PROFILES";
export const SET_USER = "SET_USER";
export const setProfilesAction = (data) => ({ type: SET_PROFILES, payload: data });
export const setUserAction = (data) => ({ type: SET_USER, payload: data });

export const fetchProfiles = () => {
  return (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNGRjY2U3MDMzNzAwMTUzMTZkYjEiLCJpYXQiOjE3NDAzOTM5MzIsImV4cCI6MTc0MTYwMzUzMn0.1t8kxCm5d0UPnuFQqZs9G6-VZkPjsGpIMIhIadrrE4Q",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          dispatch(setProfilesAction(data));
        } else {
          alert("nessun profilo trovato");
        }
      })
      .catch((err) => console.error(err));
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNGRjY2U3MDMzNzAwMTUzMTZkYjEiLCJpYXQiOjE3NDAzOTM5MzIsImV4cCI6MTc0MTYwMzUzMn0.1t8kxCm5d0UPnuFQqZs9G6-VZkPjsGpIMIhIadrrE4Q",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          dispatch(setUserAction(data));
        } else {
          alert("nessun profilo trovato");
        }
      })
      .catch((err) => console.error(err));
  };
};
