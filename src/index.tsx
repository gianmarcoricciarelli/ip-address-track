import App from "./components/App/App"
import { AppContextProvider } from "./contexts/AppContext"
import "./index.css"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <AppContextProvider>
        <App />
    </AppContextProvider>,
)
