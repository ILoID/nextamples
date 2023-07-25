import ExploreFilter from "@/components/explore/ExploreFilter";
import ExploreContent from "@/components/explore/ExploreContent";

const ExplorePage = ({ searchParams }: { searchParams: { category: string, tags: string, complexity: string, searchQuery: string, inCode: string, matchCase: string, inText: string } }) => {
    console.log(searchParams.tags)
    return (
        <div className="min-h-screen overflow-y-auto">
            <ExploreFilter />
            <ExploreContent filters={searchParams} />
        </div>
    );
};

export default ExplorePage;