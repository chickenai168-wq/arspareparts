const socialLinks = [
  ["Shopee", "https://shopee.co.th/arspareparts"],
  ["TikTok", "https://www.tiktok.com/@arspareparts?_r=1&_t=ZS-9A7zrrFblIq"],
  ["Lazada", "https://s.lazada.co.th/s.ZQTWKH"],
  ["Facebook", "https://www.facebook.com/share/1dNU2tcJm5/"],
] as const;

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="brand" href="/">AR SPARE PARTS</a>
        <nav className="nav" aria-label="เมนูหลัก">
          <a href="/">หน้าแรก</a><a href="/arx">โช๊ค ARX</a><a href="/catalog">อะไหล่ทั้งหมด</a><a href="/guide">วิธีเลือกสินค้า</a>
        </nav>
        <div className="socials">{socialLinks.map(([name, href]) => <a key={name} href={href} target="_blank" rel="noreferrer">{name}</a>)}</div>
      </header>

      <section className="hero">
        <p className="eyebrow">ARX PERFORMANCE SHOCK ABSORBER</p>
        <h1>โช๊คหลัง ARX<br/><span>PERFORMANCE UNLEASHED</span></h1>
        <p>ปรับ REBOUND และ PRELOAD สปริงได้ เลือกให้ตรงกับสไตล์รถของคุณ ทั้งโช๊คเดี่ยว 300 มม. และโช๊คคู่ 320 มม.</p>
        <div className="actions"><a className="primary" href="/arx">ดูโช๊ค ARX</a><a href="/catalog">ดูอะไหล่ทั้งหมด ↗</a></div>
      </section>

      <section className="section">
        <p className="eyebrow">EXPLORE PARTS</p><h2>หมวดหมู่สินค้า</h2>
        <div className="grid">{["โช๊คหลัง","ชุดกุญแจ","คันสตาร์ท","ปั๊มเชื้อเพลิง","คาร์บูเรเตอร์","มอเตอร์สตาร์ท","คลัตช์","คอยล์ไฟ","ข้อเหวี่ยง","ระบบเบรก"].map((x,i)=><a className="card" href="/catalog" key={x}><small>{String(i+1).padStart(2,"0")}</small><strong>{x}</strong><span>ดูสินค้า ↗</span></a>)}</div>
      </section>

      <section className="buy"><p className="eyebrow">BEFORE YOU BUY</p><h2>อะไหล่ที่ใช่ เริ่มจากข้อมูลรถที่ชัด</h2><p>รถชื่อรุ่นเดียวกันอาจมีปีผลิต รุ่นย่อย และจุดยึดต่างกัน ดูภาพและข้อมูลในหน้าสินค้า แล้วเทียบกับอะไหล่เดิมก่อนสั่ง</p><a href="/guide">อ่านวิธีเลือกสินค้า ↗</a></section>
      <footer>AR Spare Parts · ตรวจสอบรุ่นรถและจุดยึดก่อนสั่งซื้อ</footer>
    </main>
  );
}
