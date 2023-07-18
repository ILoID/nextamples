import CategoriesFilter from "@/components/categories/CategoriesFilter";
import CategoriesList from "@/components/categories/CategoriesList";

const CategoriesPage = () => {
    return (
        <div className="min-h-screen overflow-y-auto">
            <CategoriesFilter />
            <CategoriesList />
        </div>
    );
};

export default CategoriesPage;