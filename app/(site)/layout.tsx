import SiteHeader from "@/components/SiteHeader";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col space-y-2">
            <SiteHeader />
            {children}
            {/* <SiteFooter /> */}
        </main>
    )
}