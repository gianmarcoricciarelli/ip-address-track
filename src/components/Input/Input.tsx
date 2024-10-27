import { AppContext, IAppContext } from "../../contexts/AppContext"
import {
    ChangeEvent,
    Context,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react"

export function Input() {
    const { setData } = useContext(AppContext as Context<IAppContext>)

    const [firstRender, setFirstRender] = useState(true)
    const [ipTyped, setIpTyped] = useState<string>("8.8.8.8")

    function handleTypingOnInput(event: ChangeEvent<HTMLInputElement>) {
        setIpTyped(event.target.value)
    }

    function handleButtonClick() {
        handleSearch(undefined)
    }

    const handleSearch = useCallback(
        async (event: KeyboardEvent | undefined, ip?: string) => {
            let keyPressed: string

            if (event) {
                keyPressed = event.code
            } else {
                keyPressed = "Enter"
            }

            if (keyPressed === "Enter") {
                const apiUrl = process.env.REACT_APP_API_URL
                const apiKey = process.env.REACT_APP_API_KEY

                if (ipTyped !== "" && keyPressed === "Enter") {
                    const response = await fetch(
                        `${apiUrl}?apiKey=${apiKey}&ip=${ip ? ip : ipTyped}`,
                        { method: "GET" },
                    )

                    if (response.ok) {
                        const data = await response.json()
                        setData(data)
                    }
                }
            }
        },
        [ipTyped, setData],
    )

    useEffect(() => {
        const keyPressedHandler = async (event: KeyboardEvent) =>
            await handleSearch(event)

        document.addEventListener("keypress", keyPressedHandler)

        if (firstRender) {
            handleSearch(undefined, process.env.REACT_APP_IP)
            setFirstRender(false)
        }

        return () => {
            document.removeEventListener("keypress", keyPressedHandler)
        }
    }, [firstRender, handleSearch, ipTyped])

    return (
        <div className="flex w-[40%] justify-center">
            <input
                className="flex-grow rounded-bl-[2rem] rounded-tl-[2rem] p-[1.8rem] text-[1.8rem] outline-none placeholder:text-dark-gray"
                type="text"
                placeholder="Search for aby IP address or domain"
                value={ipTyped}
                onChange={handleTypingOnInput}
            />
            <div
                className="flex flex-shrink-0 items-center justify-center rounded-br-[2rem] rounded-tr-[2rem] bg-very-dark-gray p-[2.4rem] text-white"
                onClick={handleButtonClick}
            >
                <span className="material-symbols-outlined text-[1.8rem] text-white">
                    arrow_forward_ios
                </span>
            </div>
        </div>
    )
}
