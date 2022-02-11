const baseUrl = 'https://api.petfinder.com/v2/animals';
const urlByType = `https://api.petfinder.com/v2/types/`;
const urlToFindTypes = 'https://api.petfinder.com/v2/types';
const animalsParent = document.querySelector('.animals-parent');
const typeButtonsContainer = document.querySelector('.type-buttons-container');

const token = {
  "token_type":"Bearer",
  "expires_in":3600,
  "access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5SUdNUERRNUJmendQWXp2N3dEUWo3Z2N4Y0ZFNWU2VnVYVzZtMHZISHh4cjV2anJBTSIsImp0aSI6IjJkNDQxODRhYmNlYzEyOGU4NzU4MDc4MWU4ZGQ5ZDg0N2NkZWE2YWVlMWY5M2YwNzRmZTg3MDM1ZWIyOGYxYmNlMjM2NTkxMDU3NzkyMTJmIiwiaWF0IjoxNjQ0NTk3NTk3LCJuYmYiOjE2NDQ1OTc1OTcsImV4cCI6MTY0NDYwMTE5Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.B91VVUUoiZcsu4rBvlT2a7nbgVctHQroviDidVAyVZO4B9802ABfaNpcv1GzBvmqZ-EjB0zSHhF5O5-gbA8oobxxIrFMbPJLo-6ej625OgT_7_TFYWlDJ4t9D4yGf7yxB3JHY-9dlSerQ40OpS5B1skzoZT0P5NafS1I21vGRAPJ2ev-VA1mPVuAP2dA3hT4Dj_54oH_Tg863DqyC7Uh-FpvAaDTpl-kUJhPArilSuepGtAuFfQrtZVVpRlB3I11-u9NECVosNWrFYIB6-CaenHhs7E4Ty6lf9QBpo-z6hIc1fYS3XAxUkLa0ogvhTkmHN8Z4xBaSKZ_69RmxtyzRA",
}

//REQUESTS

const fetchApi = async (url) => {
  const requestInfo = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    }
  }
  try {
    const response = await fetch(url, requestInfo);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const getAnimalTypes = async () => {
  const requestInfo = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    }
  }
  const response = await fetch(urlToFindTypes, requestInfo);
  const data = await response.json();
  return data;
}