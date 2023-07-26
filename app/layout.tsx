import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/ui/themeProvider'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
	title: 'Nextamples',
	description: 'Next.js examples',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={cn("min-h-screen bg-background overflow-y-auto", roboto.className)}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{children}
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	)
}
