const CategoryPage = ({ params }: { params: { category: string, subcategory: string } }) => {
    const decodedCategory = decodeURIComponent(params.category);
    const decodedSubcategory = decodeURIComponent(params.subcategory);

    return (
        <div>
            <h1 className="">
                {decodedCategory} - {decodedSubcategory}
            </h1>
        </div>
    );
};

export default CategoryPage;