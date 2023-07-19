import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const getVariant = (tag: string) => {
	switch (tag) {
		case "routes":
			return "green";
		case "controllers":
			return "orange";
		case "models":
			return "blue";
		case "views":
			return "destructive";
		case "components":
			return "secondary";
		default:
			return "outline";
	}
}