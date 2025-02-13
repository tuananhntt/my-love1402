import { Metadata } from "next";
import Home from "./home";

export const metadata: Metadata = {
  title: "Happy Valentine's Day <3 💕",
  description: "Valentine's Day",
};

export default function HomePage() {
  return <Home />;
}
