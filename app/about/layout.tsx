import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "custom layout",
  description: "Custom Layout",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h3 className=" bg-red-700 text-red-300 text-xl">Random Layout</h3>
        {children}
      </body>
    </html>
  );
}
