const galleryItems = [
    { type: "image", src: "/gallery1.jpg", alt: "Excavator at work" },
    { type: "image", src: "/gallery2.jpg", alt: "Construction site" },
    { type: "image", src: "/gallery3.jpg", alt: "Plumbing installation" },
    { type: "video", src: "/GalleryVideo.mp4", alt: "Equipment in action" },
    { type: "image", src: "/gallery4.jpg", alt: "Finished building" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-yellow-600 text-center">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map((item, idx) => (
          <div key={idx} className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-900">
            {item.type === "image" ? (
              <img src={item.src} alt={item.alt} className="w-full h-56 object-cover" />
            ) : (
              <video src={item.src} controls className="w-full h-56 object-cover" />
            )}
          </div>
        ))}
      </div>
      <p className="text-center text-gray-500 mt-4">Get the best in services for your projects!</p>
    </section>
  );
}
