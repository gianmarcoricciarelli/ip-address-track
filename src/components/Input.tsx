import { ChangeEvent, useState } from "react"

export function Input() {
    const [ipTyped, setIpTyped] = useState<string>("")

    function handleTypingOnInput(event: ChangeEvent<HTMLInputElement>) {
        setIpTyped(event.target.value)
    }

    return (
        <input
            className="w-[33%] rounded-bl-[2.4rem] rounded-tl-[2.4rem] p-[1.8rem] text-[1.8rem] outline-none placeholder:text-dark-gray"
            type="text"
            placeholder="Search for aby IP address or domain"
            value={ipTyped}
            onChange={handleTypingOnInput}
        />
    )
}
