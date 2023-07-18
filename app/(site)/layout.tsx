import SiteHeader from "@/components/SiteHeader";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <SiteHeader />
            {children}
            {/* <SiteFooter /> */}
        </div>
    )
}