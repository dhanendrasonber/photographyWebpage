import axios from 'axios';

//
// [{"key":"client_id","value":"176692766387-a17k03vkeg3jbkgh3rjslnnlv1if1v28.apps.googleusercontent.com","description":""},
// {"key":"client_secret","value":"w52R3qCi5iiCNY_ToEpUtplh","description":""},
// {"key":"refresh_token","value":"1/YEFQ_GC-IbEauYPBZ6HPleAV5IU0jkF_ytX0dmg8fNQ","description":""},
// {"key":"grant_type","value":"refresh_token","description":""}]


export function refreshTokenConfig() {
  return {
    baseURL: 'https://www.googleapis.com/oauth2/v4',
  };
}

export function refreshToken() {
  const parameters = {
    client_id: '176692766387-a17k03vkeg3jbkgh3rjslnnlv1if1v28.apps.googleusercontent.com',
    client_secret: 'w52R3qCi5iiCNY_ToEpUtplh',
    refresh_token: '1/YEFQ_GC-IbEauYPBZ6HPleAV5IU0jkF_ytX0dmg8fNQ',
    grant_type: 'refresh_token',
  };
  const path = '/token?client_id=176692766387-a17k03vkeg3jbkgh3rjslnnlv1if1v28.apps.googleusercontent.com&client_secret=w52R3qCi5iiCNY_ToEpUtplh&refresh_token=1/YEFQ_GC-IbEauYPBZ6HPleAV5IU0jkF_ytX0dmg8fNQ&grant_type=refresh_token';
  const authSession = axios.create(refreshTokenConfig());
  return authSession.post(path, parameters)
  .then((response) => {
    console.log('respsonse:', response);
    return response;
  });
}
