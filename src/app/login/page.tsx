import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";

export default function Login() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Card className="max-w-lg flex-grow flex-shrink-0 flex-basis-auto">
                <h1 className="text-3xl text-center font-bold text-cyan-600 ">
                    LOGIN
                </h1>
                <p className="font-medium text-center mb-2">
                    Welcome, please enter your details
                </p>
                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            placeholder="example@example.com"
                            required
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput id="password1" type="password" required />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <Button gradientDuoTone="cyanToBlue" type="submit">
                        Submit
                    </Button>

                    {/* register page */}
                    <p className="mt-5 text-center">
                        Dont Have an account?{" "}
                        <Link
                            href={"/register"}
                            className="font-bold text-cyan-500 hover:text-cyan-700"
                        >
                            Register
                        </Link>
                    </p>
                </form>
            </Card>
        </div>
    );
}
