import { AppContext, IAppContext } from "../../contexts/AppContext"
import { Header } from "../Header/Header"
import { Map } from "../Map/Map"
import { Context, useContext } from "react"

function App() {
    const { data } = useContext(AppContext as Context<IAppContext>)
    console.log(data)

    return (
        <div className="h-[100dvh] w-[100dvw]">
            <Header />
            {data && (
                <Map latitude={data.latitude} longitude={data.longitude} />
            )}
        </div>
    )
}

export default App
