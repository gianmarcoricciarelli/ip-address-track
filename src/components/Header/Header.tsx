import { Input } from "../Input/Input"

export function Header() {
    return (
        <div className="relative flex h-[33%] w-full flex-col items-center justify-center bg-desktop-background bg-cover">
            <h1 className="absolute top-[9.2rem] text-[3.2rem] font-bold text-white">
                IP Address Tracker
            </h1>
            <Input />
        </div>
    )
}
