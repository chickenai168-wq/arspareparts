import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arspareparts.com"),
  title: {
    default: "AR Spare Parts | อะไหล่มอเตอร์ไซค์",
    template: "%s | AR Spare Parts",
  },
  description: "AR Spare Parts — อะไหล่มอเตอร์ไซค์และโช๊คหลัง ARX เลือกสินค้าและตรวจสอบรายละเอียดก่อนสั่งซื้อ",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
