/*
 * Copyright © 2023 Opera Norway AS. All rights reserved.
 *
 * This file is an original work developed by Opera.
 */

import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type ReactNode } from "react";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: `Duane Irvin - Full-stack developer and computer engineer`,
} satisfies Metadata;

export default function RootLayout(props: {
  children: ReactNode;
  rankings: ReactNode;
}) {
  return (
    <html lang="en" className="w-full min-w-[theme(screens.tiny)]">
      <body
        className={`${inter.className} ${inter.variable} w-full bg-neutral-800 text-base text-white`}
      >
        {props.children}
      </body>
    </html>
  );
}
