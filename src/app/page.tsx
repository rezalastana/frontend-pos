import { Button } from "flowbite-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="font-bold text-4xl tracking-widest">POS</h1>
            <p className="italic text-lg">Point Of Silaturahmi</p>

            <div className="pt-10">
                <Link href={"/login"}>
                    <Button
                        outline
                        gradientDuoTone="cyanToBlue"
                        className="text-lg tracking-widest"
                    >
                        LOGIN
                    </Button>
                </Link>
            </div>
        </div>
    );
}
