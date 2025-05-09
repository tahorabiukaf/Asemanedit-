'use client';
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <main className="p-4 max-w-6xl mx-auto">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">AsemanEdit</h1>
        <p className="text-lg text-gray-600 mb-6">
          آموزش ادیت حرفه‌ای با موبایل، سیستم و هوش مصنوعی. همین امروز یاد بگیر و بدرخش!
        </p>
        <Button>مشاهده دوره‌ها</Button>
      </section>

      <section className="grid md:grid-cols-3 gap-6 py-10">
        {[
          { title: "ادیت با موبایل", desc: "آموزش InShot، CapCut، Alight Motion و بیشتر." },
          { title: "ادیت با سیستم", desc: "آموزش فتوشاپ، پریمیر، افتر افکت از پایه تا پیشرفته." },
          { title: "ادیت با هوش مصنوعی", desc: "کار با Remini، Canva، Runway و ابزارهای AI دیگر." }
        ].map((item, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-gray-100 p-6 rounded-xl mt-10">
        <h2 className="text-2xl font-bold mb-4">عضویت در خبرنامه</h2>
        <p className="text-sm text-gray-600 mb-4">اولین نفر باش که از دوره‌های جدید باخبر می‌شی!</p>
        <div className="flex gap-2">
          <Input
            placeholder="ایمیل شما"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button>ثبت</Button>
        </div>
      </section>
    </main>
  );
}
