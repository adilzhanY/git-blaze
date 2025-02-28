import Exercises from "@/components/Exercises";
import Navbar from "../../components/Navbar";
export default function Layout({children}:Readonly<{children: React.ReactNode}>){
    return (
        <main className="font-montserrat">
            <Navbar/>
            <Exercises/>
            {children}
        </main>
    )
}