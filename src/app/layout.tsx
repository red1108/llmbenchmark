// app/layout.tsx
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