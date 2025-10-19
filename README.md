# Pizza Restaurant Project

## Project Overview

This is a modern web application built with vanilla JavaScript, Webpack, and responsive CSS that displays a catalog of pizzas from a restaurant. The project dynamically renders pizza items on the DOM with information about each pizza including name, description, ingredients, and prices for different sizes.

### Features

- **Dynamic Pizza Catalog**: Displays 20 different pizza options
- **Size Options**: Each pizza has two sizes available (mediana and familiar) with different prices
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Webpack Bundler**: Optimized build process with development server
- **Hot Module Replacement**: Real-time updates during development
- **Detailed Information**: Each pizza includes:
  - Name
  - Description
  - Ingredients list
  - Prices for different sizes

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Responsive design with media queries
- **JavaScript (ES6)**: Modern JavaScript with modules
- **Webpack 5**: Module bundler and build tool
- **Node.js & npm**: Package management

## Project Structure

```
pizza-restaurant/
├── src/
│   ├── index.js
│   ├── dataFood.js
│   ├── pizzaFunction.js
│   ├── template.html
│   └── styles/
│       └── styles.css
├── dist/
│   ├── index.html (generated)
│   └── main.js (generated)
├── webpack.config.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)

### Installation

1. **Clone or download the project**

```bash
   git clone <repository-url>
   cd pizza-restaurant
```

2. **Install dependencies**

```bash
   npm install
```

3. **Start the development server**

```bash
   npm start
```

The application will automatically open in your browser at `http://localhost:8080`

4. **Build for production**

```bash
   npm run build
```

The optimized files will be generated in the `dist` folder.

5. **Watch mode (optional)**

```bash
   npm run dev
```

Runs Webpack in watch mode for continuous compilation.

## npm Scripts

- `npm start` - Starts the Webpack dev server with hot reload
- `npm run build` - Creates an optimized production build
- `npm run dev` - Runs Webpack in watch mode for development

## File Descriptions

### `src/template.html`

Main HTML template that contains the structure of the application. Includes:

- A `div` with id `pizzas-container` where pizzas are rendered
- Meta tags for responsive design
- Link to stylesheets (handled by Webpack)

### `src/index.js`

Entry point of the application. Imports:

- CSS styles
- Pizza data
- The `renderPizzas` function
- Executes the function to display pizzas on page load

### `src/dataFood.js`

Contains the pizza data exported as a default export. This is a JSON array with 20 pizza objects, each containing:

- `id` (number): Unique identifier
- `nombre` (string): Pizza name in Spanish
- `descripcion` (string): Short description
- `ingredientes` (array): Array of main ingredients
- `tamaño` (object): Size options with prices
  - `mediana`: Medium size with price
  - `familiar`: Family size with price

Example pizza object:

```javascript
{
  "id": 1,
  "nombre": "Margarita",
  "descripcion": "La clásica italiana con tomate, mozzarella y albahaca fresca",
  "ingredientes": ["tomate", "mozzarella", "albahaca", "aceite de oliva"],
  "tamaño": {
    "mediana": { "name": "mediana", "precio": 8.5 },
    "familiar": { "name": "familiar", "precio": 14.0 }
  }
}
```

### `src/pizzaFunction.js`

Contains the `renderPizzas` function that:

- Fetches the pizzas container from the DOM
- Iterates through the pizzas array
- Creates HTML elements dynamically for each pizza:
  - Pizza name
  - Size options with prices
- Appends them to the container with proper structure

### `src/styles/styles.css`

Contains all styling for the application:

- Grid layout for pizza items
- Responsive design with mobile-first approach
- Media queries for different screen sizes:
  - Desktop (default): Multiple columns
  - Tablet (max-width: 768px): Adjusted columns
  - Mobile (max-width: 480px): Single column

### `webpack.config.js`

Webpack configuration file that defines:

- Entry point: `./src/index.js`
- Output: Bundled files in `./dist` folder
- Development server settings (port 8080, hot reload)
- Loaders for CSS, HTML, and image assets
- HtmlWebpackPlugin for HTML generation

### `package.json`

Project configuration file containing:

- Project metadata
- npm scripts
- Dependencies (webpack, loaders, plugins)
- DevDependencies for development tools

## How It Works

1. **Build Process**:

   - Webpack reads `src/index.js` as the entry point
   - CSS is processed through loaders and injected into the bundle
   - HtmlWebpackPlugin generates `dist/index.html`
   - All files are bundled into `dist/main.js`

2. **Runtime**:

   - When the page loads, `renderPizzas()` is called
   - For each pizza in the database, it creates:
     - A `div` with class `pizza-item` (main container)
     - A `p` element with the pizza name
     - A `div` with class `price-size` containing price information for each size
   - Each element is appended to the DOM
   - CSS styles are applied based on screen size

3. **Development**:
   - Dev server watches for file changes
   - Hot Module Replacement updates the browser automatically
   - Source maps (`eval-source-map`) enable easy debugging

## Responsive Breakpoints

The application adapts to different screen sizes:

```css
/* Desktop (default) */
Grid with multiple columns, optimal spacing

/* Tablet (max-width: 768px) */
@media (max-width: 768px) {
  Adjusted grid columns and reduced spacing
}

/* Mobile (max-width: 480px) */
@media (max-width: 480px) {
  Single column layout with minimal spacing
  Prices displayed vertically
}
```

## Example Usage

### Accessing Pizza Data

```javascript
import pizzas from "./dataFood";

// Get first pizza name
console.log(pizzas[0].nombre); // "Margarita"

// Get mediana price
console.log(pizzas[0].tamaño.mediana.precio); // 8.5

// Get ingredients
console.log(pizzas[0].ingredientes);
// ["tomate", "mozzarella", "albahaca", "aceite de oliva"]

// Iterate through all pizzas
pizzas.forEach((pizza) => {
  console.log(`${pizza.nombre}: ${pizza.descripcion}`);
});
```

## Development Tips

1. **Hot Reload**: Changes to CSS, JavaScript, or HTML are reflected immediately in the browser
2. **Debug Mode**: Use browser DevTools (F12) with source maps for easier debugging
3. **Build Optimization**: Use `npm run build` to create a production-ready bundle with minification
4. **Asset Handling**: Images and other assets are automatically processed by Webpack

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Port 8080 already in use

```bash
# Change port in webpack.config.js
devServer: {
  port: 3000,
}
```

### Module not found errors

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Webpack not recognized

```bash
# Install globally or use npx
npx webpack
```

## Future Improvements

- Add shopping cart functionality
- Implement filters by pizza type or price range
- Add pizza image support with lazy loading
- Create a backend API for data management
- Add user authentication and order history
- Implement payment processing (Stripe/PayPal)
- Add product search functionality
- Create an admin panel for pizza management

## Build Optimization

For production builds, consider:

- CSS minification with `mini-css-extract-plugin`
- JavaScript minification (automatic with production mode)
- Image optimization
- Code splitting for larger applications

## Deployment

To deploy this project:

1. Run `npm run build` to create production files in `dist/`
2. Deploy the `dist/` folder to your hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - Any static hosting service

## License

This project is open source and available under the MIT License.

## Author

Pizza Restaurant Project Team

## Support

For questions, issues, or suggestions, please open an issue on the project repository.

---

**Happy coding! 🍕**
