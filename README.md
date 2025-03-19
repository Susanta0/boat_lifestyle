# Boat Lifestyle MERN Project

## Project Description

This project is a web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It is designed to manage and showcase boat lifestyle products.

## Tech Stack

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Chakra UI](https://img.shields.io/badge/Chakra_UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=white)

## File Structure

The project directory is structured as follows:

```
boat_lifestyle/
├── client/
│   ├── node_modules/
│   ├── public/
│   │   ├── images/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── CategoriesProductCard/
│   │   │   │   ├── ProductCard.jsx
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Footer1.jsx
│   │   │   │   ├── Footer2.jsx
│   │   │   │   ├── SocialMedia.jsx
│   │   │   ├── NavDetails/
│   │   │   │   ├── Cart.jsx
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── NavCategories.jsx
│   │   │   │   ├── Search.jsx
│   │   │   │   ├── SearchResult.jsx
│   │   │   ├── BestOfBoat.jsx
│   │   │   ├── BestSeller.jsx
│   │   │   ├── Blogs.jsx
│   │   │   ├── BlogsDetails.jsx
│   │   │   ├── Categories.jsx
│   │   │   ├── DisplayProducts.jsx
│   │   │   ├── Fecility.jsx
│   │   │   ├── ImageSlider.jsx
│   │   │   ├── IsError.jsx
│   │   │   ├── JoinTribe.jsx
│   │   │   ├── LifeStyle.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Off.jsx
│   │   │   ├── Press.jsx
│   │   │   ├── ProductCardSkeleton.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── ProductsNameViewAll.jsx
│   │   │   ├── Sale.jsx
│   │   │   ├── TopPicks.jsx
│   │   ├── context/
│   │   │   ├── AuthContextProvider.jsx
│   │   ├── pages/
│   │   │   ├── AdressPage.jsx
│   │   │   ├── AllProducts.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── OrderDetails.jsx
│   │   │   ├── Payment.jsx
│   │   │   ├── ProductCollection.jsx
│   │   │   ├── SingleProduct.jsx
│   │   │   ├── HomePage.js
│   │   │   ├── ProductPage.js
│   │   ├── protect/
│   │   │   ├── Protect.jsx
│   │   ├── routes/
│   │   │   ├── Routes.jsx
│   │   ├── utils/
│   │   │   ├── categoriesImages.js
│   │   │   ├── JionTribeSkeleton.jsx
│   │   │   ├── NoOrders.jsx
│   │   │   ├── VideoCarouselSkeleton.jsx
│   │   │   ├── videosData.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.js
│   ├── vercel.json
│   ├── vite.config.js
├── cms/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── categoriesField/
│   │   │   │   ├── Fields.jsx
│   │   │   ├── products/
│   │   │   │   ├── CategoriesCard.jsx
│   │   │   │   ├── EachCategoriesProducts.jsx
│   │   │   │   ├── ProductList.jsx
│   │   │   │   ├── ProductsCategory.jsx
│   │   │   │   ├── ProductTable.jsx
│   │   │   │   ├── Search.jsx
│   │   │   ├── users/
│   │   │   │   ├── userList.jsx
│   │   │   ├── IsLoading.jsx
│   │   ├── context/
│   │   │   ├── AuthContextProvider.jsx
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── ProductForm.jsx
│   │   │   ├── UserDetails.jsx
│   │   ├── protectRoute/
│   │   │   ├── Protect.jsx
│   │   ├── routes/
│   │   │   ├── AllRoutes.jsx
│   │   ├── utils/
│   │   │   ├── AllCategoriesObjects.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.js
│   ├── vercel.json
│   ├── vite.config.js
├── server/
│   ├── node_modules/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   ├── controllers/
│   │   │   ├── address.controllers.js
│   │   │   ├── cart.controllers.js
│   │   │   ├── order.controllers.js
│   │   │   ├── payment.controllers.js
│   │   │   ├── products.controllers.js
│   │   │   ├── user.controllers.js
│   │   ├── middleware/
│   │   │   ├── authmiddleware.js
│   │   ├── models/
│   │   │   ├── address.model.js
│   │   │   ├── cart.model.js
│   │   │   ├── order.model.js
│   │   │   ├── products.model.js
│   │   │   ├── users.model.js
│   │   ├── routes/
│   │   │   ├── address.routes.js
│   │   │   ├── cart.routes.js
│   │   │   ├── order.routes.js
│   │   │   ├── payment.routes.js
│   │   │   ├── product.routes.js
│   │   │   ├── user.routes.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
├── README.md
```

## Guidance

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd boat_lifestyle
   ```

### Client Setup

Navigate to the `client` directory and install dependencies:

```bash
cd client
npm install
```

#### Client Dependencies

- `@fontsource/metropolis`: Font source for Metropolis.
- `axios`: Promise-based HTTP client for the browser and Node.js.
- `lucide-react`: React components for Lucide icons.
- `react`: JavaScript library for building user interfaces.
- `react-dom`: Entry point of the DOM-related rendering paths.
- `react-icons`: Include popular icons in your React projects easily.
- `react-router-dom`: Declarative routing for React.
- `react-toastify`: React notification library.

#### Client Dev Dependencies

- `@eslint/js`: ESLint configuration.
- `@types/react`: TypeScript definitions for React.
- `@types/react-dom`: TypeScript definitions for React DOM.
- `@vitejs/plugin-react`: Vite plugin for React.
- `autoprefixer`: Parse CSS and add vendor prefixes.
- `eslint`: Pluggable JavaScript linter.
- `eslint-plugin-react`: React specific linting rules for ESLint.
- `eslint-plugin-react-hooks`: ESLint rules for React Hooks.
- `eslint-plugin-react-refresh`: ESLint plugin for React Refresh.
- `globals`: Global variables for ESLint.
- `postcss`: Tool for transforming CSS with JavaScript.
- `tailwindcss`: Utility-first CSS framework.
- `vite`: Next generation frontend tooling.

### CMS Setup

Navigate to the `cms` directory and install dependencies:

```bash
cd ../cms
npm install
```

#### CMS Dependencies

- `@chakra-ui/react`: Chakra UI component library.
- `@emotion/react`: Library for writing CSS styles with JavaScript.
- `@tailwindcss/vite`: Tailwind CSS plugin for Vite.
- `axios`: Promise-based HTTP client.
- `dotenv`: Loads environment variables from a `.env` file.
- `lucide-react`: React components for Lucide icons.
- `next-themes`: Theme management for Next.js.
- `react`: JavaScript library for building user interfaces.
- `react-dom`: Entry point of the DOM-related rendering paths.
- `react-icons`: Include popular icons in your React projects easily.
- `react-router-dom`: Declarative routing for React.

#### CMS Dev Dependencies

- `@eslint/js`: ESLint configuration.
- `@types/react`: TypeScript definitions for React.
- `@types/react-dom`: TypeScript definitions for React DOM.
- `@vitejs/plugin-react`: Vite plugin for React.
- `autoprefixer`: Parse CSS and add vendor prefixes.
- `eslint`: Pluggable JavaScript linter.
- `eslint-plugin-react`: React specific linting rules for ESLint.
- `eslint-plugin-react-hooks`: ESLint rules for React Hooks.
- `eslint-plugin-react-refresh`: ESLint plugin for React Refresh.
- `globals`: Global variables for ESLint.
- `postcss`: Tool for transforming CSS with JavaScript.
- `tailwindcss`: Utility-first CSS framework.
- `vite`: Next generation frontend tooling.

### Server Setup

Navigate to the `server` directory and install dependencies:

```bash
cd ../server
npm install
```

#### Server Dependencies

- `bcrypt`: Library to help you hash passwords.
- `cors`: Middleware for enabling CORS.
- `dotenv`: Loads environment variables from a `.env` file.
- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `jsonwebtoken`: JSON Web Token implementation.
- `mongoose`: MongoDB object modeling tool.
- `nodemon`: Utility that monitors for any changes in your source and automatically restarts your server.
- `razorpay`: Razorpay API client.

### Running the Project

1. Start the frontend development server:
   ```bash
   cd client
   npm start
   ```
2. Start the CMS development server:
   ```bash
   cd ../cms
   npm start
   ```
3. Start the server:
   ```bash
   cd ../server
   npm start
   ```

### Deployment Links

- [Client Deployment](https://boat-lifestyle-chi.vercel.app/)
- [CMS Deployment](https://boatcms.vercel.app/)

### Contact

For any inquiries, please contact us at [susanta721467@gmail.com](mailto:susanta721467@gmail.com).

### Additional Information

- Ensure MongoDB is running on your local machine or configure the connection string in `client/.env` and `server/.env`.
- For any issues or contributions, please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file.
