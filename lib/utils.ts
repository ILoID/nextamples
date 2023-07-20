import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const getVariant = (tag: string) => {
	switch (tag) {
		case "routes":
			return "black";
		case "controllers":
			return "red";
		case "models":
			return "green";
		case "views":
			return "blue";
		case "components":
			return "indigo";
		default:
			return "outline";
	}
}