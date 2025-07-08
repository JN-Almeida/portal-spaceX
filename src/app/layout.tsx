import type { Metadata } from "next";
import { Geist, Geist_Mono, Saira } from "next/font/google";
import { ApolloProviderWrapper } from "@/providers/apollo-provider";
import "./globals.css";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SpaceX Portal - Space Missions",
  description:
    "Portal for real-time monitoring of SpaceX missions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${saira.variable} antialiased vsc-initialized`}
      >
        <ApolloProviderWrapper>{children}</ApolloProviderWrapper>
      </body>
    </html>
  );
}
