import SiteHeader from "@/components/SiteHeader";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col">
            <SiteHeader />
            {children}
            {/* <SiteFooter /> */}
        </main>
    )
}