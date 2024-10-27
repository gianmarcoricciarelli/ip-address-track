import { AppContext, IAppContext } from "../../contexts/AppContext"
import { ChangeEvent, Context, useContext, useEffect, useState } from "react"

export function Input() {
    const { setData } = useContext(AppContext as Context<IAppContext>)

    const [ipTyped, setIpTyped] = useState<string>("")

    function handleTypingOnInput(event: ChangeEvent<HTMLInputElement>) {
        setIpTyped(event.target.value)
    }

    function handleButtonClick() {
        handleSearch(undefined)
    }

    async function handleSearch(event: KeyboardEvent | undefined) {
        let keyPressed: string

        if (event) {
            keyPressed = event.code
        } else {
            keyPressed = "Enter"
        }

        if (keyPressed === "Enter") {
            const apiUrl = process.env.REACT_APP_API_URL
            const apiKey = process.env.REACT_APP_API_KEY

            const response = await fetch(
                `${apiUrl}?apiKey=${apiKey}&ip=79.51.26.153`,
                { method: "GET" },
            )

            if (response.ok) {
                const data = await response.json()
                setData(data)
            }
        }
    }

    useEffect(() => {
        document.addEventListener(
            "keypress",
            async (event) => await handleSearch(event),
        )

        return () => {
            document.removeEventListener(
                "keypress",
                async (event) => await handleSearch(event),
            )
        }
    }, [])

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
