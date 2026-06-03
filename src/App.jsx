import { RouterProvider } from "react-router-dom"
import router from "./router"
import { ThemeProvider } from "./components/common/ThemeProvider"
import "@fontsource-variable/jetbrains-mono";
import { ReactLenis } from 'lenis/react'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ReactLenis root>
        <RouterProvider router={router} />
      </ReactLenis>
    </ThemeProvider>
  )
}

export default App;
