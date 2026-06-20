import { motion } from 'framer-motion';

const PhotoGallery = () => {
  const photos = [
    '/images/uploaded-banner.jpg',
    'https://dishaforindia.org/wp-content/uploads/2021/08/gallery-2-3.jpg',
    'https://dishaforindia.org/wp-content/uploads/2021/08/gallery-2-4.jpg',
    'https://dishaforindia.org/wp-content/uploads/2021/08/gallery-2-5.jpg',
    'https://dishaforindia.org/wp-content/uploads/2023/04/disha-1.jpg',
    'https://dishaforindia.org/wp-content/uploads/2023/04/disha-3.jpg',
    'https://dishaforindia.org/wp-content/uploads/2023/05/1-2.jpg',
    'https://dishaforindia.org/wp-content/uploads/2023/05/2-1.jpg',
    'https://dishaforindia.org/wp-content/uploads/2023/05/3-1.jpg'
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4 block">Our Memories</span>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue dark:text-white mb-6">
              Photo Gallery
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Glimpses of our events, programs, and the smiling faces of the lives we've touched.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-sm group cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
