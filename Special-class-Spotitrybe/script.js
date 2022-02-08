const urlApi = "https://api.spotify.com";
const clientId = "0ef4abbe600949448f31f1682a0ee8c9";
const clientSecret = 'db6cc6e5d65a41548a7d0ab1c3ee53cb';
let token;

const categoriesSect = document.querySelector('.genre-cards');
const playlistSect = document.querySelector('.playlist-cards');
const musicSect = document.querySelector('.tracks-cards');
const playerSect = document.querySelector('.player');
const musicName = document.querySelector('#music-name');

//REQUESTS

const getToken = async () => {
  const requestInfo = {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  };
  const response = await fetch(`https://accounts.spotify.com/api/token`, requestInfo);
  const data = await response.json();
  return data.access_token;
}

const getCategories = async (token) => {
  const requestInfo = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };
  const response = await fetch(`${urlApi}/v1/browse/categories?locale=en&limit=40`, requestInfo);
  const data = await response.json();
  return data.categories.items;
}

const getPlaylists = async (token, id) => {
  const requestInfo = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };
  const response = await fetch(`${urlApi}/v1/browse/categories/${id}/playlists?limit=50`, requestInfo);
  const data = await response.json();
  return data.playlists.items;
}

const getTracks = async (token, id) => {
  const requestInfo = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }
  const response = await fetch(`${urlApi}/v1/playlists/${id}`, requestInfo);
  const data = await response.json();
  return data.tracks.items;
}

//HELPERS

const createCustomElement = (elem, elemClass, text) => {
  const newElem = document.createElement(elem);
  newElem.className = elemClass;
  newElem.innerText = text;
  return newElem;
}

const createImageElement = (elemClass, src, alt) => {
  const newImg = document.createElement('img');
  newImg.className = elemClass;
  newImg.src = src;
  newImg.alt = alt;
  return newImg;
}

const clearList = (section) => {
  section.innerHTML = '';
}

const clearSelectedItem = (parentElem) => {
  const selectedElem =  document.querySelector(`${parentElem} .item-selected`);
  if (selectedElem) selectedElem.classList.remove('item-selected');
}

const getElementOrClosest = (sectionClass, target) =>
  target.classList.contains('sectionClass')
    ? target
    : target.closest(sectionClass);

//HANDLERS

const selectItemPlaylist = async ({target}) => {
  const clicked = getElementOrClosest('.text-card', target);
  const id = clicked.id;
  clearList(musicSect);
  clearSelectedItem('.playlist-cards');
  clicked.classList.add('item-selected');
  const tracks = await getTracks(token, id);
  renderTracks(tracks);
};

const selectGenreItem = async ({target}) => {
  const clicked = getElementOrClosest('.genre', target);
  const id = clicked.id;
  clearList(playlistSect);
  clearSelectedItem('.genre-cards');
  clicked.classList.add('item-selected');
  const playlists = await getPlaylists(token, id);
  renderPlaylists(playlists);
};

const selectItemTrack = ({target}) => {
  const clicked = getElementOrClosest('.tracks-cards', target);
  clearSelectedItem('.tracks-cards');
  clicked.classList.add('item-selected');
  musicName.innerHTML = clicked.querySelector('.track-card').innerText;
  if (!clicked.value) musicName.innerHTML = 'Preview unavailable';
  playerSect.querySelector('source').src = clicked.value;
  playerSect.load();
}

//RENDERS

const renderTracks = (tracks) => {
  tracks.forEach((track) => {
    const {track: {album: {name, id}, preview_url }} = track;
    const newSect = document.createElement('section');
    newSect.className = 'tracks-cards text-card';
    newSect.id = id;
    newSect.value = preview_url;
    const newP = createCustomElement('p', 'track-card', name);
    newSect.appendChild(newP);
    newSect.addEventListener('click', selectItemTrack);
    musicSect.appendChild(newSect);
  })
}

const renderPlaylists = (playlists) => {
  playlists.forEach((playlist) => {
    const {name, id} = playlist;
    const newSect = document.createElement('section');
    newSect.className = 'playlist-cards text-card';
    newSect.id = id;
    const newP = createCustomElement('p', 'playlist-card', name);
    newSect.appendChild(newP);
    newSect.addEventListener('click', selectItemPlaylist);
    playlistSect.appendChild(newSect);
  })
}

const createGenreCards = async () => {
  const categories = await getCategories(token);
  categories.forEach((cat) => {
    const { icons, name, id } = cat;
    const newSect = createCustomElement('section', 'genre', '');
    newSect.id = id;
    const newImg = createImageElement('genreImg', icons[0].url, name);
    const newP = createCustomElement('p', 'genre-card', name);
    newSect.appendChild(newImg);
    newSect.appendChild(newP);
    newSect.addEventListener('click', selectGenreItem);
    categoriesSect.appendChild(newSect);
  })
}

window.onload = async () => {
  token = await getToken();
  await createGenreCards();
}