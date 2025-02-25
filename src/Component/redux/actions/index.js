export const SET_PROFILES = "SET_PROFILES";
export const SET_USER = "SET_USER";
export const EDIT_USER = "EDIT_USER";
export const EDIT_USERIMAGE = "EDIT_USERIMAGE";
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

export const editUser = (newData) => {
  return async (dispatch) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNGRjY2U3MDMzNzAwMTUzMTZkYjEiLCJpYXQiOjE3NDAzOTM5MzIsImV4cCI6MTc0MTYwMzUzMn0.1t8kxCm5d0UPnuFQqZs9G6-VZkPjsGpIMIhIadrrE4Q",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      if (resp.ok) {
        const newUser = await resp.json();
        dispatch({ type: EDIT_USER, payload: newUser });
      } else {
        throw new Error("Errore");
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const editUserImage = (file) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("profile", file);

      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/67bc4dcce703370015316db1/picture", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNGRjY2U3MDMzNzAwMTUzMTZkYjEiLCJpYXQiOjE3NDAzOTM5MzIsImV4cCI6MTc0MTYwMzUzMn0.1t8kxCm5d0UPnuFQqZs9G6-VZkPjsGpIMIhIadrrE4Q",
        },
        body: formData,
      });
      if (resp.ok) {
        const newPicture = await resp.json();
        dispatch({ type: EDIT_USERIMAGE, payload: newPicture });
      } else {
        throw new Error("Errore");
      }
    } catch (error) {
      console.error(error);
    }
  };
};
