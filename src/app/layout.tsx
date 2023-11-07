// app/layout.tsx
import { Box, Stack } from "@chakra-ui/react";
import { Providers } from "./providers";
import SimpleSidebar from "../../public/simpleSidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <SimpleSidebar>
            {children}
          </SimpleSidebar>
        </Providers>
      </body>
    </html>
  );
}