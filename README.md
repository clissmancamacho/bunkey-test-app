# BUNKEY FULL STACK MERN + Redux Test
---
# BASIC STEPS
## 1) Clone Project
---

# SETUP BACKEND

## 1) Go to backend folder

## 2) Install dependencies

```bash
npm install
```

### 3) Make in the root the .env file and paste this code with your own config:

```js
APP_NAME=YOUR_APP_NAME
PORT=YOUR_PORT
DB_HOST=YOUR_DB_HOST
```
### For example:

```js
APP_NAME=bunkeyAppTest
PORT=8105
DB_HOST=mongodb://localhost:27017/db_bunkey_test
```
---

# SETUP FRONTEND

## 1) Go to frontend folder

## 2) Install dependencies

```bash
npm install
```
### 3) Go to src/environments and config your environments vars:

```js
REACT_APP_API_URL=YOUR_API_URL
```
### For example:

```js
REACT_APP_API_URL=http://localhost:8105/api
```
---

# RUN PROJECT:

## 1) Go to root folder (You must see backend and frontend folders)

## 2) Run and wait a seconds for react and node building and react open a navigator tab with the frontend
```bash
npm start
```

### 4) Enjoy!
