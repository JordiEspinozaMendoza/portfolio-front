import axios from "axios";

export const petition = async ({
  url,
  method,
  body,
  isImage = false,
  isServer = false,
  auth = true,
  dispatch,
  constants,
}) => {
  const { REQUEST, SUCCESS, FAILURE } = constants;
  try {
    dispatch({ type: REQUEST });
    // call api
    const { data } = await axios({
      baseURL: !isServer
        ? process.env.NEXT_PUBLIC_STRAPI_URL
        : process.env.NEXT_PUBLIC_API_SERVER,
      method,
      url,
      data: body,
      headers: {
        "Content-Type": !isImage ? "application/json" : "multipart/form-data",
        Authorization: auth
          ? `Bearer ${process.env.NEXT_PUBLIC_STRAPI_KEY}`
          : "",
      },
    });
    dispatch({ type: SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: FAILURE, payload: e });
  }
};
export const getAPIServerSideProps = async ({ url }) => {
  try {
    const response = await fetch(`${process.env.API_URL}${url}`, {
      cache: "no-cache",
    });
    const data = await response.json();
    return { data: data ? data : null, error: null, consoleError: null };
  } catch (error) {
    return {
      data: error.data ? error.data : null,
      error: error.error ? error.error : null,
    };
  }
};
