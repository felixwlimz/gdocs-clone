import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Provider } from "./Provider";

export const metadata: Metadata = {
  title: "Livedocs",
  description: "Your go-to collaborative text editor",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ 
       baseTheme : dark,
       variables : { 
        colorPrimary : '#3371ff',
        fontSize : '16px'
      },
     }}>
      <html lang="en">
        <body className={inter.className}>
          <Provider>
            {children}
          </Provider>
          </body>
      </html>
    </ClerkProvider>
  );
}
