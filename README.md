# ☕ My Mug Match Coffee

**My Mug Match Coffee** is a personalized coffee recommendation website where users can discover, save, and share their favorite coffee drinks and nearby coffee shops. Users take a quiz to receive custom coffee recommendations and explore local coffee spots using the **Google Places API**. The app also delivers daily coffee facts from **API Ninja Facts API** to keep coffee lovers informed and engaged.

## 🚀 Live Demo  
🔗 **[Check out the live website here!](https://my-mug-match-coffee.onrender.com/)**

---

## 📌 Features

### 🔐 User Authentication  
✅ Secure **signup & login** with bcrypt-hashed passwords and JWT authentication.  
✅ Persistent login using tokens stored in local/session storage.  
✅ Protected routes requiring authentication.

### ☕ Coffee Recommendation System  
✅ Take a **personalized coffee quiz** to get recommendations.  
✅ View details about each recommended coffee drink.  
✅ Save favorite coffee drinks to your account.  
✅ Saved drinks persist in a PostgreSQL database.

### 📍 Find Nearby Coffee Shops (Google Places API)  
✅ Search for **coffee shops near your location**.  
✅ View shop details, including **name, rating, price range, and address**.  
✅ Click on a shop to get more information, such as **opening hours and reviews**.  

### 📜 Daily Coffee Facts (API Ninja Facts API)  
✅ Receive a new **coffee-related fact every day**.  
✅ Coffee facts are dynamically fetched and displayed in the UI.

### 📊 User Dashboard & Favorites  
✅ View your **coffee recommendations and saved favorites**.  
✅ Remove coffee drinks from favorites.  
✅ Explore **recommended coffee shops**.

### 🎨 Frontend (React + TailwindCSS)  
✅ **Responsive & mobile-friendly UI** using TailwindCSS.  
✅ Smooth navigation powered by **React Router**.  
✅ API requests handled with **Axios**, including **loading states and error handling**.

### 🛡️ Deployment & Security  
✅ **Backend** deployed on **Render** with a **PostgreSQL** database.  
✅ **Frontend** deployed on **Netlify/Vercel**.  
✅ API keys and sensitive credentials **secured in `.env` files**.

---

## 🛠️ Technologies Used  

### **Frontend**  
- React  
- React Router  
- TailwindCSS  
- Axios  

### **Backend**  
- Node.js  
- Express.js  
- PostgreSQL  
- Sequelize ORM  
- bcryptjs (password hashing)  
- JWT (authentication)  
- Axios (for API calls)  

### **APIs Integrated**  
- **Google Places API** (for finding coffee shops)  
- **API Ninja Facts API** (for daily coffee facts)  

---

## 📜 Getting Started  
  
### **1️⃣ Clone the Repository**
`git clone https://github.com/your-username/my-mug-match-coffee.git`

`cd my-mug-match-coffee`
### **2️⃣ Install Dependencies**

### **Install backend dependencies**
`cd server`
`npm install`

### **Install frontend dependencies**
`cd ../client`
`npm install`
### **3️⃣ Set Up Environment Variables**
Create a .env file in both server/ and client/ directories and add the necessary environment variables (Google Places API key, API Ninja Facts API key, database URL, JWT secret, etc.).

### **4️⃣ Run the Project Locally**
sh
Copy
Edit
### **Start the backend**
`cd server`
`npm run dev`

### **Start the frontend**
`cd ../client`
`npm run dev`
The app should now be running locally! Open your browser and go to http://localhost:3000.

## 📌 Future Improvements
🔹 Allow users to leave reviews for coffee shops.
🔹 Implement social sharing for recommendations.
🔹 Introduce more customization options in the quiz.

## ⭐ Support & Feedback
If you like this project, consider giving it a ⭐ on GitHub! If you have any feedback or suggestions, feel free to open an issue.