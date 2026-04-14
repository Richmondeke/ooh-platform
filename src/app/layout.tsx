import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "OOH! - Out Of Home Experience",
    description: "A premium digital experience for out-of-home media.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
