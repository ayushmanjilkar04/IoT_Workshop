# Create a React Vite App

 Run the following command to create a new React app using Vite:

```
npm create vite@latest
```

 Then follow the prompts:

 1. Enter your **project name**.
2. Select **React** as the framework.
3. Select **JavaScript** as the variant.
4. Select **Oxlint** as the linter.

 ## Start the Project

 Navigate to your project directory:

```
cd <project-name>
```

 Install the project dependencies:

```
npm install
```

 ## Install Tailwind CSS

 Install Tailwind CSS and its Vite plugin:

```
npm install tailwindcss @tailwindcss/vite
```

 Configure the Tailwind CSS Vite plugin in your `vite.config.js` file:

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

 Then import Tailwind CSS into your main CSS file, such as `src/index.css`:

```
@import "tailwindcss";
```

 You can now use Tailwind CSS utility classes in your React components:

```
<h1 className="text-3xl font-bold text-blue-600">
  Hello, Tailwind CSS!
</h1>
```

 ## Install Axios

 Axios is a JavaScript library used to make HTTP requests to APIs. It can be used to perform operations such as **GET, POST, PUT, PATCH, and DELETE** requests.

 Install Axios using npm:

```
npm install axios
```

 After installation, import Axios into the React component where you want to make API requests:

```
import axios from 'axios'
```

 ### Example: GET Request Using Axios

```
import axios from 'axios'

axios.get('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })
```

 Axios also supports `async/await`:

```
import axios from 'axios'

const fetchUsers = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )

    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}
```

 ## useState Hook

 `useState` is a React Hook used to create and manage **state** inside a functional component.

 Import it from React:

```
import { useState } from 'react'
```

 ### Example

```
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  )
}

export default App
```

 Here:

 - `count` is the current state value.
- `setCount` is the function used to update the state.
- `useState(0)` sets the initial value to `0`.
- Calling `setCount()` causes the component to re-render with the updated value.

 ## useEffect Hook

 `useEffect` is a React Hook used to perform **side effects** in a component.

 Common uses include:

 - Fetching data from an API.
- Running code when a component loads.
- Updating the document title.
- Setting up timers or event listeners.

 Import it from React:

```
import { useEffect } from 'react'
```

 ### Example

```
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    console.log('Component loaded')
  }, [])

  return <h1>Hello React</h1>
}

export default App
```

 The empty dependency array `[]` means the effect runs once when the component is mounted.

 ## Using Axios with useState and useEffect

 A common React pattern is to use:

 - **`useState`** to store API data.
- **`useEffect`** to call the API when the component loads.
- **Axios** to make the API request.

 Example:

```
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        )

        setUsers(response.data)
      } catch (error) {
        setError('Failed to fetch users')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600">
        Users
      </h1>

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default App
```

 ### How This Example Works

```
const [users, setUsers] = useState([])
```

 Creates a state variable called `users` with an initial empty array.

```
useEffect(() => {
  // API request
}, [])
```

 Runs the API request when the component is first loaded.

```
const response = await axios.get(...)
```

 Sends a GET request using Axios.

```
setUsers(response.data)
```

 Stores the API response in the `users` state.

 When the state changes, React re-renders the component and displays the users.

 ## Run the Development Server

 Start the development server:

```
npm run dev
```

 Vite will provide a local development URL, usually similar to:

```
http://localhost:5173
```

 Open this URL in your browser to view the application.

 ## Recommended VS Code Extensions

 For a better React and Tailwind CSS development experience, the following Visual Studio Code extensions are recommended.

 ### 1\. ES7+ React/Redux/React-Native Snippets

 This extension provides useful shortcuts for quickly creating React components and common React code patterns.

 #### Installation

 1. Open **Visual Studio Code**.
2. Open the **Extensions** panel.
3. Search for **ES7+ React/Redux/React-Native Snippets**.
4. Install the extension.
5. Restart VS Code if required.

 ### 2\. Tailwind CSS IntelliSense

 Install the **Tailwind CSS IntelliSense** extension to get autocomplete, syntax highlighting, and linting support for Tailwind CSS utility classes.

 #### Installation

 1. Open **Visual Studio Code**.
2. Open the **Extensions** panel.
3. Search for **Tailwind CSS IntelliSense**.
4. Install the extension.
5. Restart VS Code if required.

 The extension provides:

 - **Autocomplete** for Tailwind CSS classes.
- **Syntax highlighting** for Tailwind utility classes.
- **Linting** for Tailwind CSS.
- **Hover previews** showing the CSS generated by Tailwind classes.

 For example, when you start typing:

```
<div className="text-">
```

 Tailwind CSS IntelliSense will suggest available utility classes such as:

```
text-center
text-lg
text-blue-600
```

 ## Summary

 A typical React application created with Vite can use the following technologies together:

 - **Vite** — Fast development and build tool.
- **React** — Builds the user interface.
- **Tailwind CSS** — Provides utility-first styling.
- **Axios** — Makes HTTP/API requests.
- **useState** — Manages component state.
- **useEffect** — Handles side effects such as API calls.
- **VS Code extensions** — Improve React and Tailwind development.