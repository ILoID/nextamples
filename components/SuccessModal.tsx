"use client";

import FullExample from "./examples/FullExample";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";

interface SuccessModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    content: {
        code: string;
        summary: string;
        title: string;
        text: string;
        author: string;
        category: string;
        subcategory: string;
        complexity: string;
        tags: string[];
    };
};

const SuccessModal: React.FC<SuccessModalProps> = ({
    isOpen,
    setIsOpen,
    content
}) => {
    const handlePreview = (example: any) => {
        // TODO: Implement
        console.log(example)
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="h-[70%]">
                <DialogHeader className="flex flex-col pt-20 space-y-12">
                    <DialogTitle className="text-4xl text-center">
                        Thank you for your contribution!
                    </DialogTitle>
                    <DialogDescription className="text-lg text-primary text-center">
                        Your example has been submitted successfully. We appreciate your contribution to the community!
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center space-y-8">
                    <p className="w-[70%] text-muted-foreground text-center">
                        Would you like a preview of your example before it goes live?
                    </p>
                    <Button className="w-[70%]" onClick={() => handlePreview(content)} variant="ctasky">
                        Show Preview
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SuccessModal;