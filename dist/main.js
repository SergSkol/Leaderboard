"use strict";
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/storage.js */ "./src/modules/storage.js");
/* harmony import */ var _modules_API_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/API.js */ "./src/modules/API.js");
// import './style.css';



const storage = new _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
let gameId = storage.load() || '0ehWnnqlP8PtQkYB0OM0';
const myAPI = new _modules_API_js__WEBPACK_IMPORTED_MODULE_1__["default"](gameId);

if (!gameId) {
  gameId = myAPI.init();
}

const formUser = document.querySelector('#user');
const formScore = document.querySelector('#score');
const submitBtn = document.querySelector('#submit-button');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  myAPI.postScores(formUser.value, formScore.value);
});

const refreshBtn = document.querySelector('#refresh-button');
refreshBtn.addEventListener('click', () => {
  myAPI.getScores();
});

myAPI.getScores();


/***/ }),

/***/ "./src/modules/API.js":
/*!****************************!*\
  !*** ./src/modules/API.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ API)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/modules/storage.js");
/* harmony import */ var _showScores_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showScores.js */ "./src/modules/showScores.js");



class API {
  constructor(id) {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
    this.name = 'myNewGame';
    this.id = id;
  }

  getURL = () => this.url

  init = async () => {
    await fetch(`${this.url}games/`, {
      method: 'POST',
      body: JSON.stringify({
        name: this.name,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const dataStr = json.result;
        const dataArr = dataStr.split(' ');
        const id = dataArr[3];

        this.id = id;

        const storage = new _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        storage.save(id);
      });
  }

  getScores = async () => {
    await fetch(`${this.url}games/:${this.id}/scores/`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const dataArr = json.result;
        (0,_showScores_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dataArr);
      });
  }

  postScores = async (user, score) => {
    await fetch(`${this.url}games/:${this.id}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const submitResult = document.querySelector('.submit-result');
        submitResult.innerHTML = json.result;
        this.getScores();
      });
  }
}


/***/ }),

/***/ "./src/modules/showScores.js":
/*!***********************************!*\
  !*** ./src/modules/showScores.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showScores = (arr) => {
  const scoresListItems = document.querySelector('.scores-list-items');
  scoresListItems.innerHTML = '';
  arr.forEach((item) => {
    const scoresItem = document.createElement('li');
    scoresItem.classList.add('scores-list-item');
    scoresItem.innerHTML = `${item.user}: ${item.score}`;
    scoresListItems.appendChild(scoresItem);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showScores);


/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
class Storage {
  constructor() {
    this.storageKey = 'Leaderboard';
  }

  save = (data) => {
    if (typeof data !== 'undefined') {
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    }
  };

  load = () => {
    const json = localStorage.getItem(this.storageKey);
    if (typeof json === 'undefined') {
      return null;
    }
    const data = JSON.parse(json);
    return data;
  };
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUMyQztBQUNSOztBQUVuQyxvQkFBb0IsMkRBQU87QUFDM0I7QUFDQSxrQkFBa0IsdURBQUc7O0FBRXJCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJtQztBQUNNOztBQUUxQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSwyQ0FBMkM7QUFDM0MsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixtREFBTztBQUNuQztBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLG1CQUFtQixTQUFTLFNBQVMsUUFBUTtBQUM3QztBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwREFBVTtBQUNsQixPQUFPO0FBQ1A7O0FBRUE7QUFDQSxtQkFBbUIsU0FBUyxTQUFTLFFBQVE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSwyQ0FBMkM7QUFDM0MsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVSxJQUFJLFdBQVc7QUFDdkQ7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNYWDtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvQVBJLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvc2hvd1Njb3Jlcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL21vZHVsZXMvc3RvcmFnZS5qcyc7XG5pbXBvcnQgQVBJIGZyb20gJy4vbW9kdWxlcy9BUEkuanMnO1xuXG5jb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbmxldCBnYW1lSWQgPSBzdG9yYWdlLmxvYWQoKSB8fCAnMGVoV25ucWxQOFB0UWtZQjBPTTAnO1xuY29uc3QgbXlBUEkgPSBuZXcgQVBJKGdhbWVJZCk7XG5cbmlmICghZ2FtZUlkKSB7XG4gIGdhbWVJZCA9IG15QVBJLmluaXQoKTtcbn1cblxuY29uc3QgZm9ybVVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcicpO1xuY29uc3QgZm9ybVNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlJyk7XG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWJ1dHRvbicpO1xuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBteUFQSS5wb3N0U2NvcmVzKGZvcm1Vc2VyLnZhbHVlLCBmb3JtU2NvcmUudmFsdWUpO1xufSk7XG5cbmNvbnN0IHJlZnJlc2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVmcmVzaC1idXR0b24nKTtcbnJlZnJlc2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG15QVBJLmdldFNjb3JlcygpO1xufSk7XG5cbm15QVBJLmdldFNjb3JlcygpO1xuIiwiaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCBzaG93U2NvcmVzIGZyb20gJy4vc2hvd1Njb3Jlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQSSB7XG4gIGNvbnN0cnVjdG9yKGlkKSB7XG4gICAgdGhpcy51cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvJztcbiAgICB0aGlzLm5hbWUgPSAnbXlOZXdHYW1lJztcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cblxuICBnZXRVUkwgPSAoKSA9PiB0aGlzLnVybFxuXG4gIGluaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZmV0Y2goYCR7dGhpcy51cmx9Z2FtZXMvYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgfSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICBjb25zdCBkYXRhU3RyID0ganNvbi5yZXN1bHQ7XG4gICAgICAgIGNvbnN0IGRhdGFBcnIgPSBkYXRhU3RyLnNwbGl0KCcgJyk7XG4gICAgICAgIGNvbnN0IGlkID0gZGF0YUFyclszXTtcblxuICAgICAgICB0aGlzLmlkID0gaWQ7XG5cbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XG4gICAgICAgIHN0b3JhZ2Uuc2F2ZShpZCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldFNjb3JlcyA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBmZXRjaChgJHt0aGlzLnVybH1nYW1lcy86JHt0aGlzLmlkfS9zY29yZXMvYCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgY29uc3QgZGF0YUFyciA9IGpzb24ucmVzdWx0O1xuICAgICAgICBzaG93U2NvcmVzKGRhdGFBcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBwb3N0U2NvcmVzID0gYXN5bmMgKHVzZXIsIHNjb3JlKSA9PiB7XG4gICAgYXdhaXQgZmV0Y2goYCR7dGhpcy51cmx9Z2FtZXMvOiR7dGhpcy5pZH0vc2NvcmVzL2AsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1c2VyLFxuICAgICAgICBzY29yZSxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgfSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICBjb25zdCBzdWJtaXRSZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LXJlc3VsdCcpO1xuICAgICAgICBzdWJtaXRSZXN1bHQuaW5uZXJIVE1MID0ganNvbi5yZXN1bHQ7XG4gICAgICAgIHRoaXMuZ2V0U2NvcmVzKCk7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiY29uc3Qgc2hvd1Njb3JlcyA9IChhcnIpID0+IHtcbiAgY29uc3Qgc2NvcmVzTGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3Jlcy1saXN0LWl0ZW1zJyk7XG4gIHNjb3Jlc0xpc3RJdGVtcy5pbm5lckhUTUwgPSAnJztcbiAgYXJyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBzY29yZXNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBzY29yZXNJdGVtLmNsYXNzTGlzdC5hZGQoJ3Njb3Jlcy1saXN0LWl0ZW0nKTtcbiAgICBzY29yZXNJdGVtLmlubmVySFRNTCA9IGAke2l0ZW0udXNlcn06ICR7aXRlbS5zY29yZX1gO1xuICAgIHNjb3Jlc0xpc3RJdGVtcy5hcHBlbmRDaGlsZChzY29yZXNJdGVtKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93U2NvcmVzO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3RvcmFnZUtleSA9ICdMZWFkZXJib2FyZCc7XG4gIH1cblxuICBzYXZlID0gKGRhdGEpID0+IHtcbiAgICBpZiAodHlwZW9mIGRhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9XG4gIH07XG5cbiAgbG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBqc29uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5zdG9yYWdlS2V5KTtcbiAgICBpZiAodHlwZW9mIGpzb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoanNvbik7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=