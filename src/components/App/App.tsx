import { AppContext, IAppContext } from "../../contexts/AppContext"
import { Header } from "../Header/Header"
import { Context, useContext } from "react"

function App() {
    const { data } = useContext(AppContext as Context<IAppContext>)
    console.log(data)

    return (
        <div className="h-[100dvh] w-[100dvw]">
            <Header />
        </div>
    )
}

export default App
