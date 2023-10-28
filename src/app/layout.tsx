// app/layout.tsx
import { Box, Stack } from "@chakra-ui/react";
import { Providers } from "./providers";
import SmallWithLogoLeft from "../../public/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}