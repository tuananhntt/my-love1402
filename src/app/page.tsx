import { Metadata } from "next";
import Home from "./home";

export const metadata: Metadata = {
  title: "Happy Valentine's Day <3 💕",
  description: "Valentine's Day",
  openGraph: {
    title: "Happy Valentine's Day <3 💕",
    description: "Valentine's Day",
    url: "/letter2-removebg-preview-crop",
    siteName: "https://my-love1402.vercel.app/",
    images: [
      {
        url: "/letter2-removebg-preview-crop", // Ensure this is a valid URL
        width: 1200,
        height: 630,
        alt: "Valentine's Day",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  return <Home />;
}
