import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import "./globals.css";
import 'swiper/css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AceProject",
  description: "AceProject is an all-in-one project management solution for organizations to plan, track, and manage projects with task management, team collaboration, Gantt charts, and real-time dashboards.",
  keywords:" Ace, AceProject, project management, project management software, enterprise project management, task management, team collaboration, Gantt charts, performance tracking, project dashboards, project tracking software, organizational workflow, project planning tools, real-time project monitoring, team management software, enterprise collaboration tools, project reporting, project portfolio management, resource management, project scheduling, milestone tracking, deadline management, workflow automation, team productivity tools, project status tracking, project timeline software, collaboration platform, project analytics, task assignment, project management dashboard, team performance metrics, enterprise workflow solutions, project risk management, multi-project management, agile project management tools, project communication software, project management for businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
      <link rel="icon" href="/AceLogo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    
  );
}
