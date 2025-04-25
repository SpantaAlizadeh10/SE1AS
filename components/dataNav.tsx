// data.ts
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import type { LinkItem, SocialItem } from "./types";

export const links: LinkItem[] = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "/students", text: "Students" },
  { id: 3, url: "/teachers", text: "Teachers" },
  { id: 4, url: "/signup", text: "Signup" },
  { id: 5, url: "/profile", text: "Profile" },
  { id: 6, url: "/about", text: "About" },
];

export const social: SocialItem[] = [
  { id: 1, url: "https://www.twitter.com", icon: <FaFacebook /> },
  { id: 2, url: "https://www.twitter.com", icon: <FaTwitter /> },
  { id: 3, url: "https://www.twitter.com", icon: <FaLinkedin /> },
  { id: 4, url: "https://www.twitter.com", icon: <FaBehance /> },
];
