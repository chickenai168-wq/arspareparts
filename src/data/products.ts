export type Product = { id:string; slug:string; name:string; category:string; fitment:string; spec?:string; featured?:boolean };

export const products: Product[] = [
 {id:'MP-0134',slug:'arx-single-shock-300-titanium-black',name:'โช๊คหลัง ARX 300 มม. สีไทเท-ดำ',category:'โช๊คหลัง',fitment:'MIO / FINO / CLICK / LEAD / GIORNO',spec:'โช๊คเดี่ยว 300 มม. · ปรับ PRELOAD และ REBOUND',featured:true},
 {id:'MP-0142',slug:'arx-wave-320-black-red',name:'โช๊คหลัง ARX WAVE 320 มม. ดำ-สปริงแดง',category:'โช๊คหลัง',fitment:'WAVE family',spec:'โช๊คคู่ 320 มม. · ปรับ PRELOAD และ REBOUND',featured:true},
 {id:'MP-0135',slug:'arx-single-shock-300-titanium-red',name:'โช๊คหลัง ARX 300 มม. สีไทเท-แดง',category:'โช๊คหลัง',fitment:'MIO / FINO / CLICK / LEAD / GIORNO',spec:'โช๊คเดี่ยว 300 มม. · ปรับ PRELOAD และ REBOUND',featured:true},
 {id:'MP-0138',slug:'arx-wave-320-black-black',name:'โช๊คหลัง ARX WAVE 320 มม. ดำ-สปริงดำ',category:'โช๊คหลัง',fitment:'WAVE family',spec:'โช๊คคู่ 320 มม. · ปรับ PRELOAD และ REBOUND',featured:true},
];

export const categories = [
 ['โช๊คหลัง',16],['ชุดกุญแจ',80],['คันสตาร์ท',16],['ปั๊มเชื้อเพลิง',50],['คาร์บูเรเตอร์',25],['มอเตอร์สตาร์ท',26],['คลัตช์',22],['คอยล์ไฟ',20],['ข้อเหวี่ยง',14],['ระบบเบรก',4]
] as const;

export const getProduct = (slug:string) => products.find(p=>p.slug===slug);
