import ExploreFilter from "@/components/explore/ExploreFilter";
import ExploreContent from "@/components/explore/ExploreContent";

const ExplorePage = () => {
    return (
        <main className="min-h-screen overflow-y-auto">
            <ExploreFilter />
            <ExploreContent />
        </main>
    );
};

export default ExplorePage;