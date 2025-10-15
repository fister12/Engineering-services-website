import Image from 'next/image';

const galleryItems = [
  { type: "image", src: "/Screenshot 2025-10-15 145831.png", alt: "Construction project overview" },
  { type: "image", src: "/Screenshot 2025-10-15 145917.png", alt: "Engineering work in progress" },
  { type: "video", src: "/GalleryVideo.mp4", alt: "Equipment demonstration" },
  { type: "video", src: "/videoplayback.mp4", alt: "Construction site operations" },
  { type: "video", src: "/videoplayback (1).mp4", alt: "Heavy equipment in action" },
];export default function Gallery() {
  return (
    <section id="gallery" className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-yellow-600 text-center">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map((item, idx) => (
          <div key={idx} className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 hover:scale-105 transition-transform">
            {item.type === "image" ? (
              <Image src={item.src} alt={item.alt} width={400} height={300} className="w-full h-56 object-cover" />
            ) : (
              <video src={item.src} controls className="w-full h-56 object-cover" />
            )}
          </div>
        ))}
      </div>
            <p className="text-center text-gray-400 mt-4">Our recent projects and equipment demonstrations</p>
    </section>
  );
}
