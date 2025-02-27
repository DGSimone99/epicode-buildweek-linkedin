export const SET_PROFILES = "SET_PROFILES";
export const SET_USER = "SET_USER";
export const EDIT_USER = "EDIT_USER";
export const EDIT_USERIMAGE = "EDIT_USERIMAGE";
export const SET_OTHERUSER = "SET_OTHERUSER";
export const SET_NEWS = "SET_NEWS";
export const SET_EXPERIENCES = "SET_EXPERIENCES";
export const GET_POST = "GET_POST";
export const POST_POST = "POST_POST";
export const REMOVE_POST = "REMOVE_POST";
export const EDIT_POST = "EDIT_POST";
export const setProfilesAction = (data) => ({ type: SET_PROFILES, payload: data });
export const setUserAction = (data) => ({ type: SET_USER, payload: data });
export const setExperiences = (data) => ({ type: SET_EXPERIENCES, payload: data });
export const FETCH_JOBS_REQUEST = "FETCH_JOBS_REQUEST";
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const FETCH_JOBS_FAILURE = "FETCH_JOBS_FAILURE";
export const REMOVE_JOB = "REMOVE_JOB";

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

export const fetchGetPost = () => {
  return (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNGRjY2U3MDMzNzAwMTUzMTZkYjEiLCJpYXQiOjE3NDAzOTM5MzIsImV4cCI6MTc0MTYwMzUzMn0.1t8kxCm5d0UPnuFQqZs9G6-VZkPjsGpIMIhIadrrE4Q",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          dispatch({ type: GET_POST, payload: data });
        } else {
          alert("nessun post trovato");
        }
      })
      .catch((err) => console.error(err));
  };
};

export const removePost = (id) => {
  return (dispatch) => {
    fetch(`https://striveschool-api.herokuapp.com/api/posts/${id}`, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNGRjY2U3MDMzNzAwMTUzMTZkYjEiLCJpYXQiOjE3NDAzOTM5MzIsImV4cCI6MTc0MTYwMzUzMn0.1t8kxCm5d0UPnuFQqZs9G6-VZkPjsGpIMIhIadrrE4Q",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return null;
        }
        throw new Error("Errore");
      })
      .then(() => {
        dispatch({ type: REMOVE_POST, payload: id });
      })
      .catch((err) => console.error(err));
  };
};

export const sharePostImage = (postId, file) => {
  return (dispatch) => {
    const formData = new FormData();
    formData.append("post", file);

    fetch("https://striveschool-api.herokuapp.com/api/posts/" + postId, {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNGRjY2U3MDMzNzAwMTUzMTZkYjEiLCJpYXQiOjE3NDAzOTM5MzIsImV4cCI6MTc0MTYwMzUzMn0.1t8kxCm5d0UPnuFQqZs9G6-VZkPjsGpIMIhIadrrE4Q",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (!data) {
          alert("il post non è stato pubblicato");
        } else {
          dispatch(fetchGetPost());
        }
      })
      .catch((err) => console.error(err));
  };
};

export const fetchSharePost = (testo, file) => {
  return (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNGRjY2U3MDMzNzAwMTUzMTZkYjEiLCJpYXQiOjE3NDAzOTM5MzIsImV4cCI6MTc0MTYwMzUzMn0.1t8kxCm5d0UPnuFQqZs9G6-VZkPjsGpIMIhIadrrE4Q",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: testo }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          dispatch({ type: POST_POST, payload: data });
          const postId = data._id;
          if (file) {
            dispatch(sharePostImage(postId, file));
          } else {
            dispatch(fetchGetPost());
          }
        } else {
          alert("il post non è stato pubblicato");
        }
      })
      .catch((err) => console.error(err));
  };
};

/* export const fetchNews = () => {
  return (dispatch) => {
    fetch("https://newsdata.io/api/1/latest?apikey=pub_7197279c519a1bafb5c6febea5712936833b7&language=it")
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
}; */

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

export const fetchJobsRequest = () => ({ type: FETCH_JOBS_REQUEST });
export const fetchJobsSuccess = (jobs) => ({ type: FETCH_JOBS_SUCCESS, payload: jobs });
export const fetchJobsFailure = (error) => ({ type: FETCH_JOBS_FAILURE, payload: error });

export const fetchJobs = (searchType, value, location = "") => {
  return async (dispatch) => {
    dispatch(fetchJobsRequest());

    let apiUrl = "https://strive-benchmark.herokuapp.com/api/jobs?";
    const queryParams = [];

    if (searchType === "company") {
      queryParams.push(`company=${encodeURIComponent(value)}`);
    } else if (searchType === "category") {
      queryParams.push(`category=${encodeURIComponent(value)}&limit=10`);
    } else {
      queryParams.push(`search=${encodeURIComponent(value)}`);
    }

    apiUrl += queryParams.join("&");

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Errore nel recupero dei dati");

      const data = await response.json();
      if (!data || !data.data) throw new Error("Dati non validi");

      let jobs = data.data;

      if (location.trim()) {
        jobs = jobs.filter((job) => job.candidate_required_location?.toLowerCase().includes(location.toLowerCase()));
      }

      dispatch(fetchJobsSuccess(jobs));
    } catch (error) {
      console.error("Errore:", error);
      dispatch(fetchJobsFailure(error.message));
    }
  };
};

export const removeJob = (jobId) => ({
  type: REMOVE_JOB,
  payload: jobId,
});
