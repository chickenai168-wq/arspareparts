import type {Metadata} from 'next';
import {Analytics} from '@vercel/analytics/next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';

export const metadata:Metadata={metadataBase:new URL('https://arspareparts.com'),title:{default:'AR Spare Parts | อะไหล่มอเตอร์ไซค์',template:'%s | AR Spare Parts'},description:'AR Spare Parts — อะไหล่มอเตอร์ไซค์และโช๊คหลัง ARX เลือกสินค้าและตรวจสอบรายละเอียดก่อนสั่งซื้อ',openGraph:{title:'AR Spare Parts',description:'อะไหล่มอเตอร์ไซค์และโช๊คหลัง ARX',url:'https://arspareparts.com',siteName:'AR Spare Parts',locale:'th_TH',type:'website'},alternates:{canonical:'/'}};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="th"><body><SiteHeader/>{children}<footer className="footer"><b>AR SPARE PARTS</b><span>ตรวจสอบรุ่นรถ ปีผลิต และจุดยึดกับอะไหล่เดิมก่อนสั่งซื้อ</span></footer><Analytics/></body></html>
}
