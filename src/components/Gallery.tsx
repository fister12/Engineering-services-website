import Image from 'next/image';

const galleryItems = [
  { type: "image", src: "/Screenshot 2025-10-15 145831.png", alt: "Construction project overview" },
  { type: "image", src: "/Screenshot 2025-10-15 145917.png", alt: "Engineering work in progress" },
  { type: "video", src: "/GalleryVideo.mp4", alt: "Equipment demonstration" },
  { type: "video", src: "/videoplayback.mp4", alt: "Construction site operations" },
  { type: "video", src: "/videoplayback (1).mp4", alt: "Heavy equipment in action" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
            Our <span className="text-yellow-500">Work</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
            Recent projects and equipment demonstrations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx} 
              className="group rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                {item.type === "image" ? (
                  <Image 
                    src={item.src} 
                    alt={item.alt} 
                    width={400} 
                    height={300} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                ) : (
                  <video 
                    src={item.src} 
                    controls 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                )}
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
