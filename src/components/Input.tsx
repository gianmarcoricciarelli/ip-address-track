import { ChangeEvent, useState } from "react"

export function Input() {
    const [ipTyped, setIpTyped] = useState<string>("")

    function handleTypingOnInput(event: ChangeEvent<HTMLInputElement>) {
        setIpTyped(event.target.value)
    }

    return (
        <div className="flex w-[40%] justify-center">
            <input
                className="flex-grow rounded-bl-[2rem] rounded-tl-[2rem] p-[1.8rem] text-[1.8rem] outline-none placeholder:text-dark-gray"
                type="text"
                placeholder="Search for aby IP address or domain"
                value={ipTyped}
                onChange={handleTypingOnInput}
            />
            <div className="flex flex-shrink-0 items-center justify-center rounded-br-[2rem] rounded-tr-[2rem] bg-very-dark-gray p-[2.4rem] text-white">
                <span className="material-symbols-outlined text-[1.8rem] text-white">
                    arrow_forward_ios
                </span>
            </div>
        </div>
    )
}
