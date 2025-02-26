export const SET_PROFILES = "SET_PROFILES";
export const SET_USER = "SET_USER";
export const EDIT_USER = "EDIT_USER";
export const EDIT_USERIMAGE = "EDIT_USERIMAGE";
export const SET_OTHERUSER = "SET_OTHERUSER";
export const SET_NEWS = "SET_NEWS";
export const SET_EXPERIENCES = "SET_EXPERIENCES";
export const setProfilesAction = (data) => ({ type: SET_PROFILES, payload: data });
export const setUserAction = (data) => ({ type: SET_USER, payload: data });
export const setExperiences = (data) => ({ type: SET_EXPERIENCES, payload: data });

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

export const fetchOtherUser = (id) => {
  return (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/" + id, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNGRjY2U3MDMzNzAwMTUzMTZkYjEiLCJpYXQiOjE3NDAzOTM5MzIsImV4cCI6MTc0MTYwMzUzMn0.1t8kxCm5d0UPnuFQqZs9G6-VZkPjsGpIMIhIadrrE4Q",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          dispatch({ type: SET_OTHERUSER, payload: data });
        } else {
          alert("nessun profilo trovato");
        }
      })
      .catch((err) => console.error(err));
  };
};

/* export const fetchNews = () => {
  return (dispatch) => {
    fetch(
      "https://api.apitube.io/v1/news/everything?per_page=10&language=it&language=it&api_key=api_live_X28Ed0ZXn3jfoc9QFRKQBpR7XGLfV3d7YFBTJpcz7ScMVFZmDod"
    )
      .then((resp) => resp.json())
      .then((news) => {
        if (news) {
          console.log("SONO NEWS", news);
          dispatch({ type: SET_NEWS, payload: news });
        } else {
          alert("Nessuna notizia trovata");
        }
      })
      .catch((err) => console.error(err));
  };
};
 */
export const fetchExperience = () => {
  return (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/67bc4dcce703370015316db1/experiences", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNGRjY2U3MDMzNzAwMTUzMTZkYjEiLCJpYXQiOjE3NDAzOTM5MzIsImV4cCI6MTc0MTYwMzUzMn0.1t8kxCm5d0UPnuFQqZs9G6-VZkPjsGpIMIhIadrrE4Q",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          dispatch(setExperiences(data));
        } else {
          alert("errore nella fetch");
        }
      })
      .catch((err) => console.error(err));
  };
};
