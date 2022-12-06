var client_id = "96e2fb099ba745a4b6852e5a424d21a7";
var redirect_uri = window.origin + "/index.html";
let token: string | null = null;

export const logIn = () => {
  var scope = "user-read-private user-read-email";

  var url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  //   url += "&state=" + encodeURIComponent(state);

  window.location.href = url;
};
export const logout = () => {
  token = "";
  sessionStorage.removeItem("token");
};

export const initAuth = () => {
  if (window.location.hash) {
    const params = new URLSearchParams(window.location.hash.slice(1));
    token = params.get("access_token");
    token && sessionStorage.setItem("token", JSON.stringify(token));
  }

  const storageToken = sessionStorage.getItem("token");
  if (storageToken) {
    token = JSON.parse(storageToken);
  }
};

export const getToken = () => {
    return token
}
