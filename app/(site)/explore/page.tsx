import ExploreFilter from "@/components/explore/ExploreFilter";
import ExploreContent from "@/components/explore/ExploreContent";

const ExplorePage = () => {
    return (
        <div className="min-h-screen overflow-y-auto">
            <ExploreFilter />
            <ExploreContent />
        </div>
    );
};

export default ExplorePage;