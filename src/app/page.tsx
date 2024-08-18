import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:rounded-non rounded-full mx-auto" src="/zahid.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “my name is muhammad zahid i am studying class 11 i belong from ruknpur i am doing ai course which is top trending in the world.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Muhammad Zahid
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff ryk collage
      </div>
    </figcaption>
  </div>
</figure></div>
    </main>
  );
}
