import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dandelionsAudio from "../assets/dandelions.mp3";

import image1 from "../assets/images/1-anniversary.jpg";
import image2 from "../assets/images/2-battlefield.jpg";
import image3 from "../assets/images/3-proud.jpg";
import image4 from "../assets/images/4-promise.jpg";
import image5 from "../assets/images/5-open.jpg";
import image6 from "../assets/images/6-future.jpg";
import image7 from "../assets/images/7-missing-you.jpg";
import image8 from "../assets/images/8-together.jpg";
import image9 from "../assets/images/9-dandelions-field.jpg";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const heartsContainerRef = useRef<HTMLDivElement>(null);
  const flowersContainerRef = useRef<HTMLDivElement>(null);

  // Section data with text and images
  const sections = [
    {
      id: 1,
      title: "Happy 13th Month Anniversary! ❤️",
      text: "Happy Anniversary ke-13, Sayanggkuuu ❤️ Ga kerasa yaa sayang, kita udah ngelewatin satu tahun dan sekarang udah masuk ke bulan pertama di tahun kedua kita. Waktu cepet banget yaa jalannya, padahal rasanya baru kemarin aku nulis surat buat anniversary yang ke-12, sekarang udah ke-13 aja heheee.",
      image: image1,
      background: "bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100",
      layout: "center",
    },
    {
      id: 2,
      title: "Our Battlefield Together 💪",
      text: "Sekarang kita lagi sama-sama di medan perang yaa sayangg, berjuang buat ningkatin ilmu, berjuang buat nyari kerja, semuanya demi masa depan kita berdua. Aku tau ini ga gampang, LDR sambil ngejar mimpi itu rasanya campur aduk. Ada hari di mana semangat banget, ada juga hari di mana rasanya cape dan pengen nyerah aja. Tapi tiap kali aku inget kamu, rasa cape itu langsung ilang gitu aja. Kamu itu beneran sumber semangat terbesarku, sayang.",
      image: image2,
      background: "bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100",
      layout: "left",
    },
    {
      id: 3,
      title: "I'm So Proud of You 🌟",
      text: "Aku liat perjuangan kamu dari jauh sini, gimana gigihnya kamu belajar hal baru, belum lagi sambil ngerjain project om kamu, dan gimana kamu tetap semangat buat terus berjuang ngirim-ngirim lamaran kerja. Sumpah, aku bangga banget sama kamu sayangg. Kamu itu cewe yang kuat dan hebat. Jangan pernah ngerasa sendirian yaa pas lagi susah. Kalau kamu ngerasa down atau sedih gegara dapet penolakan, lampiasin semua ke aku yaa. Aku siap jadi tempat sampah buat semua keluh kesah kamu, kapan pun itu. Aku pengennya kamu selalu inget, ada aku di sini yang selalu dukung kamu 100%.",
      image: image3,
      background: "bg-gradient-to-br from-purple-100 via-indigo-50 to-blue-100",
      layout: "right",
    },
    {
      id: 4,
      title: "My Promise to Be Better 🙏",
      text: "Di samping itu, aku juga sadar kalau aku masih banyak kurangnya. Aku tau kita kadang-kadang sering berantem gegara aku yang keras kepala pengen ini itu tanpa mikirin perasaan kamu. Maaf yaa sayang, kalau sifatku yang itu sering bikin kamu sedih atau cape. Aku janji, aku lagi belajar buat jadi lebih baik lagi, belajar buat lebih ngertiin kamu. Makasih yaa udah sabar banget ngadepin aku selama ini.",
      image: image4,
      background: "bg-gradient-to-br from-indigo-100 via-blue-50 to-cyan-100",
      layout: "stack",
    },
    {
      id: 5,
      title: "Let's Always Be Open 💬",
      text: "Trus satu lagi yaa sayang, aku pengennya kalau kamu lagi sedih, moodnya tiba-tiba berubah, atau ada apapun yang ngeganjel di hati, langsung bilang ke aku yaa. Biar aku ga salah sangka dan ga mikir kamu tiba-tiba jutek sama aku, padahal kamunya lagi ada masalah. Aku justru lebih seneng kalau kamu terbuka, jadi aku bisa lebih ngertiin kamu. Jangan dipendem sendiri yaa, sayang.",
      image: image5,
      background: "bg-gradient-to-br from-cyan-100 via-teal-50 to-emerald-100",
      layout: "left",
    },
    {
      id: 6,
      title: "Our Future Dreams ✨",
      text: 'Kadang aku suka senyum-senyum sendiri ngebayangin nanti kalau kita udah sama-sama dapet kerjaan yang kita impiin. Mungkin LDR ini cuma "Training Arc" kita aja sayangg, buat ngebuktiin seberapa kuat kita. Aku yakin banget, setelah ini semua, bakalan ada "Happy Ending Arc" di mana kita bisa ketemu tiap hari tanpa harus dibatesin jarak lagi. Ga sabar banget nungguin momen itu, di mana kita bisa ngejar mimpi-mimpi kita yang lain bareng-bareng.',
      image: image6,
      background: "bg-gradient-to-br from-emerald-100 via-green-50 to-lime-100",
      layout: "overlay",
    },
    {
      id: 7,
      title: "Missing You So Much 💕",
      text: "Aku kangen banget sama kamu, cantikku. Kangen jalan-jalan ga jelas sama kamu, kangen makan mie ayam bareng, kangen ketawa-ketawa sampe sakit perut, kangen semua hal-hal sederhana yang biasa kita lakuin bareng. Tapi gapapa, aku simpen dulu rasa kangen ini, buat jadi bahan bakar semangat aku di sini.",
      image: image7,
      background: "bg-gradient-to-br from-lime-100 via-yellow-50 to-orange-100",
      layout: "right",
    },
    {
      id: 8,
      title: "We Can Do This Together 💪💕",
      text: "Kita pasti bisa lewatin ini semua bareng-bareng, sayang. Jangan pernah ragu sama hubungan kita dan sama diri kamu sendiri yaa. Kamu itu hebat, dan kamu pantes dapetin semua yang terbaik. Semangat terus yaa cantiknya aku satu-satunyaa! I love you more and more every single day, sayanggkuuu.",
      image: image8,
      background: "bg-gradient-to-br from-orange-100 via-red-50 to-pink-100",
      layout: "center",
    },
    {
      id: 9,
      title: "Song For You🌼",
      text: "Btw, ini lagu yang ku dengerin sambil bikin web ini buat kamu.\n\n\"dandelions\" - Ruth B.\n\n'Cause I'm in a field of dandelions\nWishing on every one that you'd be mine, mine\nAnd I see forever in your eyes\nI feel okay when I see you smile, smile'\n\nAkuu sayang kamu selaluu, cintakuuu 💖",
      image: image9,
      // image:
      // "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
      background: "bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100",
      layout: "stack",
    },
  ];

  // Initialize animations
  useEffect(() => {
    // Animate sections on scroll with different animations based on layout
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        const sectionData = sections[index];

        // Animate title - separate from content
        gsap.fromTo(
          section.querySelector(".section-title"),
          { opacity: 0, y: -30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Animate content based on layout with delays to avoid collisions
        if (sectionData.layout === "left" || sectionData.layout === "right") {
          const direction = sectionData.layout === "left" ? -100 : 100;

          gsap.fromTo(
            section.querySelector(".section-text"),
            { opacity: 0, x: direction },
            {
              opacity: 1,
              x: 0,
              duration: 1.2,
              ease: "power3.out",
              delay: 0.3,
              scrollTrigger: {
                trigger: section,
                start: "top 75%",
                end: "bottom 25%",
                toggleActions: "play none none reverse",
              },
            }
          );

          gsap.fromTo(
            section.querySelector(".section-image"),
            { opacity: 0, x: -direction, scale: 0.9 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              delay: 0.6,
              scrollTrigger: {
                trigger: section,
                start: "top 75%",
                end: "bottom 25%",
                toggleActions: "play none none reverse",
              },
            }
          );
        } else if (sectionData.layout === "center") {
          gsap.fromTo(
            section.querySelector(".section-content"),
            { opacity: 0, y: 50, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.5,
              ease: "power2.out",
              delay: 0.4,
              scrollTrigger: {
                trigger: section,
                start: "top 75%",
                end: "bottom 25%",
                toggleActions: "play none none reverse",
              },
            }
          );
        } else if (sectionData.layout === "stack") {
          gsap.fromTo(
            section.querySelector(".section-text"),
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              delay: 0.3,
              scrollTrigger: {
                trigger: section,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            }
          );

          gsap.fromTo(
            section.querySelector(".section-image"),
            { opacity: 0, scale: 0.8, rotation: 3 },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 1.3,
              ease: "back.out(1.7)",
              delay: 0.7,
              scrollTrigger: {
                trigger: section,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            }
          );
        } else if (sectionData.layout === "overlay") {
          gsap.fromTo(
            section.querySelector(".section-image"),
            { opacity: 0, scale: 1.1 },
            {
              opacity: 1,
              scale: 1,
              duration: 1.8,
              ease: "power2.out",
              delay: 0.2,
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );

          gsap.fromTo(
            section.querySelector(".section-text"),
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power2.out",
              delay: 0.8,
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Parallax effect on images - lighter effect to avoid conflicts
        gsap.to(section.querySelector(".parallax-image"), {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    });

    // Show/hide scroll to top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Falling hearts animation
  useEffect(() => {
    const createHeart = () => {
      if (!heartsContainerRef.current) return;

      const heart = document.createElement("div");
      heart.innerHTML = "💖";
      heart.className = "absolute text-2xl pointer-events-none z-10";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 3 + 2 + "s";
      heart.style.opacity = "0.7";

      heartsContainerRef.current.appendChild(heart);

      gsap.to(heart, {
        y: "100vh",
        rotation: 360,
        duration: 5,
        ease: "none",
        onComplete: () => heart.remove(),
      });
    };

    const heartInterval = setInterval(createHeart, 3000);
    return () => clearInterval(heartInterval);
  }, []);

  // Falling flowers animation
  useEffect(() => {
    const createFlower = () => {
      if (!flowersContainerRef.current) return;

      const flowers = ["🌸", "🌺", "🌻", "🌷", "🌹"];
      const flower = document.createElement("div");
      flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
      flower.className = "absolute text-xl pointer-events-none z-10";
      flower.style.left = Math.random() * 100 + "vw";
      flower.style.opacity = "0.6";

      flowersContainerRef.current.appendChild(flower);

      gsap.to(flower, {
        y: "100vh",
        rotation: Math.random() * 360,
        x: (Math.random() - 0.5) * 200,
        duration: Math.random() * 3 + 4,
        ease: "none",
        onComplete: () => flower.remove(),
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
          console.log("Auto-play prevented by browser");
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderLayout = (section: (typeof sections)[0], index: number) => {
    switch (section.layout) {
      case "center":
        return (
          <div className="section-content text-center max-w-4xl mx-auto space-y-12">
            <div className="section-image relative mx-auto w-80 h-80">
              <div className="relative overflow-hidden rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src={section.image}
                  alt={`Memory ${section.id}`}
                  className="parallax-image w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            <div className="section-text space-y-6">
              <div className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line font-medium max-w-3xl mx-auto">
                {section.text}
              </div>
              {section.id === 8 && (
                <div className="text-2xl md:text-3xl font-bold text-pink-600 mt-8 animate-pulse">
                  I love you more and more every single day! 💕
                </div>
              )}
            </div>
          </div>
        );

      case "left":
        return (
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="section-image relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src={section.image}
                  alt={`Memory ${section.id}`}
                  className="parallax-image w-full h-80 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            <div className="section-text space-y-6">
              <div className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line font-medium">
                {section.text}
              </div>
            </div>
          </div>
        );

      case "right":
        return (
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="section-text space-y-6 md:order-1">
              <div className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line font-medium">
                {section.text}
              </div>
            </div>
            <div className="section-image relative md:order-2">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src={section.image}
                  alt={`Memory ${section.id}`}
                  className="parallax-image w-full h-80 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        );

      case "stack":
        return (
          <div className="section-content max-w-4xl mx-auto space-y-12">
            <div className="section-text space-y-6 text-center">
              <div className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line font-medium">
                {section.text}
              </div>
            </div>
            <div className="section-image relative mx-auto max-w-2xl">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src={section.image}
                  alt={`Memory ${section.id}`}
                  className="parallax-image w-full h-80 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        );

      case "overlay":
        return (
          <div className="section-content relative max-w-5xl mx-auto">
            <div className="section-image relative h-96 md:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={section.image}
                alt={`Memory ${section.id}`}
                className="parallax-image w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="section-text absolute inset-0 flex items-center justify-center p-8">
                <div className="text-white text-center space-y-6 max-w-3xl">
                  <div className="text-lg md:text-xl leading-relaxed whitespace-pre-line font-medium backdrop-blur-sm bg-white/10 p-6 rounded-2xl">
                    {section.text}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
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
        <source src={dandelionsAudio} />
      </audio>

      {/* Music control button */}
      <button
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white/90 transition-all duration-300"
      >
        {isPlaying ? "🔊" : "🔇"}
      </button>

      {/* Hearts container */}
      <div
        ref={heartsContainerRef}
        className="fixed inset-0 pointer-events-none z-10"
      />

      {/* Flowers container */}
      <div
        ref={flowersContainerRef}
        className="fixed inset-0 pointer-events-none z-10"
      />

      {/* Sections */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          ref={(el) => {
            sectionsRef.current[index] = el;
          }}
          className={`min-h-screen relative overflow-hidden ${section.background}`}
        >
          {/* Title Section - Separate div above content */}
          <div className="section-title-container py-16 flex items-center justify-center">
            <h2 className="section-title text-4xl md:text-5xl font-bold text-gray-800 text-center font-dancing">
              {section.title}
            </h2>
          </div>

          {/* Content Section - Separate div below title */}
          <div className="content-container flex items-center justify-center min-h-[70vh] pb-16">
            <div className="container mx-auto px-6">
              {renderLayout(section, index)}
            </div>
          </div>

          {/* Floating hearts around sections */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-500 text-2xl animate-bounce pointer-events-none"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: "3s",
              }}
            >
              💕
            </div>
          ))}

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
