// const url = 'http://localhost:5000/api';
// const baseurl = 'https://bitebuddy-hehl.onrender.com';
const baseurl = 'http://localhost:3050';

export const apiClient = async (route, method, body) => {
  try {
    if (body) {
      const response = await fetch(`${baseurl}${route}`, {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        // credentials: 'include',
        body: JSON.stringify(body),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
      return response;
    } else {
      const response = await fetch(`${baseurl}${route}`, {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        // credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
      return response;
    }
  } catch (err) {
    return err;
  }
};
