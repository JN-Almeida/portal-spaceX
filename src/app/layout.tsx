import type { Metadata } from "next";
import { Saira } from "next/font/google";
import { ApolloProviderWrapper } from "@/providers/apollo-provider";
import "./globals.css";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
        <ApolloProviderWrapper>
          <main>{children}</main>
        </ApolloProviderWrapper>
      </body>
    </html>
  );
}
