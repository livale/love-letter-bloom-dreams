
import { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const heartsContainerRef = useRef<HTMLDivElement>(null);
  const flowersContainerRef = useRef<HTMLDivElement>(null);

  // Section data with text and images
  const sections = [
    {
      id: 1,
      title: "Happy 13th Month Anniversary! ❤️",
      text: "Happy Anniversary ke-13, Sayanggkuuu ❤️ Ga kerasa yaa sayang, kita udah ngelewatin satu tahun dan sekarang udah masuk ke bulan pertama di tahun kedua kita. Waktu cepet banget yaa jalannya, padahal rasanya baru kemarin aku nulis surat buat anniversary yang ke-12, sekarang udah ke-13 aja heheee.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
      background: "bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100"
    },
    {
      id: 2,
      title: "Our Battlefield Together 💪",
      text: "Sekarang kita lagi sama-sama di medan perang yaa sayangg, berjuang buat ningkatin ilmu, berjuang buat nyari kerja, semuanya demi masa depan kita berdua. Aku tau ini ga gampang, LDR sambil ngejar mimpi itu rasanya campur aduk. Ada hari di mana semangat banget, ada juga hari di mana rasanya cape dan pengen nyerah aja. Tapi tiap kali aku inget kamu, rasa cape itu langsung ilang gitu aja. Kamu itu beneran sumber semangat terbesarku, sayang.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      background: "bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100"
    },
    {
      id: 3,
      title: "I'm So Proud of You 🌟",
      text: "Aku liat perjuangan kamu dari jauh sini, gimana gigihnya kamu belajar hal baru, belum lagi sambil ngerjain project om kamu, dan gimana kamu tetap semangat buat terus berjuang ngirim-ngirim lamaran kerja. Sumpah, aku bangga banget sama kamu sayangg. Kamu itu cewe yang kuat dan hebat. Jangan pernah ngerasa sendirian yaa pas lagi susah. Kalau kamu ngerasa down atau sedih gegara dapet penolakan, lampiasin semua ke aku yaa. Aku siap jadi tempat sampah buat semua keluh kesah kamu, kapan pun itu. Aku pengennya kamu selalu inget, ada aku di sini yang selalu dukung kamu 100%.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      background: "bg-gradient-to-br from-purple-100 via-indigo-50 to-blue-100"
    },
    {
      id: 4,
      title: "My Promise to Be Better 🙏",
      text: "Di samping itu, aku juga sadar kalau aku masih banyak kurangnya. Aku tau kita kadang-kadang sering berantem gegara aku yang keras kepala pengen ini itu tanpa mikirin perasaan kamu. Maaf yaa sayang, kalau sifatku yang itu sering bikin kamu sedih atau cape. Aku janji, aku lagi belajar buat jadi lebih baik lagi, belajar buat lebih ngertiin kamu. Makasih yaa udah sabar banget ngadepin aku selama ini.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop",
      background: "bg-gradient-to-br from-indigo-100 via-blue-50 to-cyan-100"
    },
    {
      id: 5,
      title: "Let's Always Be Open 💬",
      text: "Trus satu lagi yaa sayang, aku pengennya kalau kamu lagi sedih, moodnya tiba-tiba berubah, atau ada apapun yang ngeganjel di hati, langsung bilang ke aku yaa. Biar aku ga salah sangka dan ga mikir kamu tiba-tiba jutek sama aku, padahal kamunya lagi ada masalah. Aku justru lebih seneng kalau kamu terbuka, jadi aku bisa lebih ngertiin kamu. Jangan dipendem sendiri yaa, sayang.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop",
      background: "bg-gradient-to-br from-cyan-100 via-teal-50 to-emerald-100"
    },
    {
      id: 6,
      title: "Our Future Dreams ✨",
      text: "Kadang aku suka senyum-senyum sendiri ngebayangin nanti kalau kita udah sama-sama dapet kerjaan yang kita impiin. Mungkin LDR ini cuma \"Training Arc\" kita aja sayangg, buat ngebuktiin seberapa kuat kita. Aku yakin banget, setelah ini semua, bakalan ada \"Happy Ending Arc\" di mana kita bisa ketemu tiap hari tanpa harus dibatesin jarak lagi. Ga sabar banget nungguin momen itu, di mana kita bisa ngejar mimpi-mimpi kita yang lain bareng-bareng.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      background: "bg-gradient-to-br from-emerald-100 via-green-50 to-lime-100"
    },
    {
      id: 7,
      title: "Missing You So Much 💕",
      text: "Aku kangen banget sama kamu, cantikku. Kangen jalan-jalan ga jelas sama kamu, kangen makan mie ayam bareng, kangen ketawa-ketawa sampe sakit perut, kangen semua hal-hal sederhana yang biasa kita lakuin bareng. Tapi gapapa, aku simpen dulu rasa kangen ini, buat jadi bahan bakar semangat aku di sini.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop",
      background: "bg-gradient-to-br from-lime-100 via-yellow-50 to-orange-100"
    },
    {
      id: 8,
      title: "We Can Do This Together 💪💕",
      text: "Kita pasti bisa lewatin ini semua bareng-bareng, sayang. Jangan pernah ragu sama hubungan kita dan sama diri kamu sendiri yaa. Kamu itu hebat, dan kamu pantes dapetin semua yang terbaik. Semangat terus yaa cantiknya aku satu-satunyaa! I love you more and more every single day, sayanggkuuu.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
      background: "bg-gradient-to-br from-orange-100 via-red-50 to-pink-100"
    },
    {
      id: 9,
      title: "Our Song 🌼",
      text: "Btw, ini lagu yang sering aku dengerin, trus langsung keinget kamu.\n\n\"dandelions\" - Ruth B.\n\n'Cause I'm in a field of dandelions\nWishing on every one that you'd be mine, mine\nAnd I see forever in your eyes\nI feel okay when I see you smile, smile'\n\nAkuu sayang kamu selaluu, cintakuuu 💖",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      background: "bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100"
    }
  ];

  // Initialize animations
  useEffect(() => {
    // Animate sections on scroll
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(section.querySelector('.section-content'), 
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Parallax effect on images
        gsap.to(section.querySelector('.parallax-image'), {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }
    });

    // Show/hide scroll to top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Falling hearts animation
  useEffect(() => {
    const createHeart = () => {
      if (!heartsContainerRef.current) return;
      
      const heart = document.createElement('div');
      heart.innerHTML = '💖';
      heart.className = 'absolute text-2xl pointer-events-none z-10';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = Math.random() * 3 + 2 + 's';
      heart.style.opacity = '0.7';
      
      heartsContainerRef.current.appendChild(heart);
      
      gsap.to(heart, {
        y: '100vh',
        rotation: 360,
        duration: 5,
        ease: "none",
        onComplete: () => heart.remove()
      });
    };

    const heartInterval = setInterval(createHeart, 3000);
    return () => clearInterval(heartInterval);
  }, []);

  // Falling flowers animation
  useEffect(() => {
    const createFlower = () => {
      if (!flowersContainerRef.current) return;
      
      const flowers = ['🌸', '🌺', '🌻', '🌷', '🌹'];
      const flower = document.createElement('div');
      flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
      flower.className = 'absolute text-xl pointer-events-none z-10';
      flower.style.left = Math.random() * 100 + 'vw';
      flower.style.opacity = '0.6';
      
      flowersContainerRef.current.appendChild(flower);
      
      gsap.to(flower, {
        y: '100vh',
        rotation: Math.random() * 360,
        x: (Math.random() - 0.5) * 200,
        duration: Math.random() * 3 + 4,
        ease: "none",
        onComplete: () => flower.remove()
      });
    };

    const flowerInterval = setInterval(createFlower, 2000);
    return () => clearInterval(flowerInterval);
  }, []);

  // Auto-play music
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const playAudio = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Auto-play prevented by browser');
        }
      };
      
      // Try to play after a short delay
      setTimeout(playAudio, 1000);
    }
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background music */}
      <audio
        ref={audioRef}
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="https://www.soundjay.com/misc/sounds/magic-chime-02.mp3" type="audio/mpeg" />
      </audio>

      {/* Music control button */}
      <button
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white/90 transition-all duration-300"
      >
        {isPlaying ? '🔊' : '🔇'}
      </button>

      {/* Hearts container */}
      <div ref={heartsContainerRef} className="fixed inset-0 pointer-events-none z-10" />
      
      {/* Flowers container */}
      <div ref={flowersContainerRef} className="fixed inset-0 pointer-events-none z-10" />

      {/* Sections */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          ref={el => sectionsRef.current[index] = el!}
          className={`min-h-screen flex items-center justify-center relative overflow-hidden ${section.background}`}
        >
          <div className="section-content container mx-auto px-6 py-20">
            <div className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center ${
              index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2'
            }`}>
              {/* Text content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                  {section.title}
                </h2>
                <div className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line font-medium">
                  {section.text}
                </div>
                {section.id === 8 && (
                  <div className="text-2xl md:text-3xl font-bold text-pink-600 mt-8 animate-pulse">
                    I love you more and more every single day! 💕
                  </div>
                )}
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={section.image}
                    alt={`Memory ${section.id}`}
                    className="parallax-image w-full h-80 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Floating hearts around images */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-pink-500 text-2xl animate-bounce"
                    style={{
                      top: `${Math.random() * 80}%`,
                      left: `${Math.random() * 80}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: '2s'
                    }}
                  >
                    💕
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section separator */}
          {index < sections.length - 1 && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce text-pink-400">
              💕
            </div>
          )}
        </section>
      ))}

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-pink-500 text-white rounded-full p-4 shadow-lg hover:bg-pink-600 transition-all duration-300 hover:scale-110"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Index;
