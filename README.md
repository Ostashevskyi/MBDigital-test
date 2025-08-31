# 📚 Learny – Online Courses Platform  

Learny is an online learning platform where users can browse courses, watch video previews, and purchase access to materials.  
The project is built with **React + Redux Toolkit + TypeScript**, using **json-server** as a mock backend.  

---

## 🚀 How to Run the Project Locally  

1. Install dependencies  
```bash
npm install
```
2. Start the frontend (React + Vite)
```bash
npm run dev
```

- Vite → [http://localhost:5173](http://localhost:5173)  

3. Start the mock server (json-server)  
```bash
npm run server
```

The server will run on [http://localhost:5000](http://localhost:5000).  
Data comes from `data/courses.json`.  
- `GET /courses` → list of courses  

---

## 🛠️ Technologies
- ⚛️ **React 19**  
- 🎨 **CSS Modules**  
- 📦 **Redux Toolkit** (state management)  
- 🔄 **Redux Async Thunks** (API requests)  
- 🎬 **react-content-loader** (skeleton loaders)  
- 🗄 **json-server** (mock API)  
- 🧩 **TypeScript** (static typing) 

## 💡 Features
- Fetch and display a list of courses from API (`/courses`)  
- Watch course previews in a video modal  
- Local authentication (via `localStorage`)  
- Add/remove courses from the cart  
- Error handling with a **Try again** button  
- Skeleton loaders while fetching