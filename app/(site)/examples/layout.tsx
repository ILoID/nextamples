import Sidebar from "@/components/examples/Sidebar";

export default function ExamplesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <Sidebar />
            {children}
        </div>
    )
}