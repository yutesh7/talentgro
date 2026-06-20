import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const VideoGallery = () => {
  const videos = [
    {
      title: 'Disha for India Overview',
      src: 'https://dishaforindia.org/wp-content/themes/dishaforindia/assets/images/gallery/MyVideo.mp4',
    }
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
            <span className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4 block">Watch & Learn</span>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue dark:text-white mb-6">
              Video Gallery
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Discover our journey, mission, and the impact we create through video stories.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-md border border-slate-100 dark:border-zinc-800"
            >
              <div className="relative aspect-video bg-black group">
                <video 
                  className="w-full h-full object-cover" 
                  controls 
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-blue dark:text-white">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
