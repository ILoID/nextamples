import CreateExampleForm from "@/components/examples/CreateExampleForm";
import { Separator } from "@/components/ui/separator";

const ContributePage = () => {
    return (
        <div className="min-h-screen overflow-y-auto p-4">
            <h1 className="text-3xl font-extrabold mb-2">
                Contribute an Example
            </h1>
            <p className="font-sans font-light mb-4">
                We believe in the power of community and shared knowledge. If you have a great example that you think others could 
                benefit from, please share it here! Your contributions help make our community a rich source of information and inspiration.
            </p>

            <Separator className="mb-4" />

            <CreateExampleForm />
        </div>
    );
};

export default ContributePage;