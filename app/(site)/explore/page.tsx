import ExploreFilter from "@/components/explore/ExploreFilter";
import ExploreContent from "@/components/explore/ExploreContent";
import { FilterOptions } from "@/types";

const ExplorePage = ({ searchParams }: { searchParams: FilterOptions }) => {
    return (
        <div className="min-h-screen overflow-y-auto">
            <ExploreFilter />
            <ExploreContent filters={searchParams} />
        </div>
    );
};

export default ExplorePage;