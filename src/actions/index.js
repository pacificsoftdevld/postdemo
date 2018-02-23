import request from '../helpers/request'

/*
|--------------------------------------------------
| Helpers
|--------------------------------------------------
*/
function __saveInfoUserInLocalStorage(info) {
  window.STORAGE.set('user', {...info})
}

function __saveHeadersInLocalStorage(headers) {
  window.STORAGE.set('headers', {...headers})
}

function __getHeadersInLocalStorage() {
  return window.STORAGE.get('headers')
}
