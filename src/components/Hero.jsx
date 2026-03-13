import React, { useRef } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Package,
  Zap,
  Search,
  Globe,
  Award,
  Verified,
  Printer,
  Droplets,
  ScanLine
} from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import hero3 from "@/assets/bannerr/banner-2.jpg";
import hero1 from "@/assets/bannerr/hero-4.jpg";
import hero6 from "@/assets/bannerr/hero-5.jpg";
import hero2 from "@/assets/bannerr/hero-6.jpg";

const mainBanners = [
  {
    image: hero1,
    title: "Shop Printers for Home & Office",
    subtitle: "Find reliable printers, ink, toner, and accessories",
    description:
      "Browse a wide range of printing solutions for everyday use, office work, and business needs at great prices.",
    tag: "Top Picks",
    specs: [
      { icon: <Printer size={14} />, text: "Laser & Inkjet" },
      { icon: <Droplets size={14} />, text: "Ink & Toner" },
      { icon: <Package size={14} />, text: "Accessories" }
    ]
  },
  {
    image: hero2,
    title: "Everyday Printing Made Easy",
    subtitle: "Popular products for work, school, and business",
    description:
      "Shop compact printers, high-yield cartridges, and must-have printing supplies designed for smooth daily use.",
    tag: "Best Sellers",
    specs: [
      { icon: <Zap size={14} />, text: "Fast Printing" },
      { icon: <ScanLine size={14} />, text: "Sharp Output" },
      { icon: <Package size={14} />, text: "Easy Setup" }
    ]
  },
  {
    image: hero3,
    title: "Printers, Ink & Toner in One Place",
    subtitle: "Everything you need for better printing",
    description:
      "Upgrade your setup with dependable printers, genuine supplies, and practical accessories for home and office.",
    tag: "Featured Deals",
    specs: [
      { icon: <Droplets size={14} />, text: "Genuine Supplies" },
      { icon: <Printer size={14} />, text: "Trusted Models" },
      { icon: <Zap size={14} />, text: "Daily Performance" }
    ]
  },
  {
    image: hero6,
    title: "Upgrade Your Printing Setup",
    subtitle: "Smart choices for home, office, and workspace",
    description:
      "Discover printers and printing accessories that help you handle documents, labels, photos, and everyday tasks with ease.",
    tag: "New Arrivals",
    specs: [
      { icon: <Printer size={14} />, text: "Modern Printers" },
      { icon: <Package size={14} />, text: "Office Essentials" },
      { icon: <Award size={14} />, text: "Quality Products" }
    ]
  }
];

export default function Hero() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { openSearch } = useCart();

  return (
    <div className="w-full font-['Heebo'] bg-white relative">
      <div className="w-full h-[650px] md:h-[900px] relative group overflow-hidden">
        <button
          ref={prevRef}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-slate-900/10 flex items-center justify-center bg-white/20 backdrop-blur-md text-slate-900 z-50 hover:bg-slate-900 hover:text-white transition-all duration-500 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          ref={nextRef}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-slate-900/10 flex items-center justify-center bg-white/20 backdrop-blur-md text-slate-900 z-50 hover:bg-slate-900 hover:text-white transition-all duration-500 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
        >
          <ChevronRight size={20} />
        </button>

        <Swiper
          modules={[Pagination, Autoplay, EffectFade, Navigation]}
          effect="fade"
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          speed={1000}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            }
          }}
          className="h-full w-full"
        >
          {mainBanners.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className="relative w-full h-full bg-slate-100 overflow-hidden">
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute inset-0">
                    <div className="max-w-full mx-auto h-full px-6 lg:px-24 flex flex-col justify-center relative">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={isActive ? { opacity: 0.05 } : { opacity: 0 }}
                        className="absolute right-[10%] top-[20%] w-[350px] h-[350px] border-[30px] border-slate-900 rounded-full pointer-events-none hidden xl:block"
                      />

                      <div className="max-w-[650px] relative z-10">
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={isActive ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.2 }}
                          className="flex items-center gap-3 mb-6"
                        >
                          <span className="px-3 py-1 bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.25em] rounded-sm">
                            {item.tag}
                          </span>
                          <div className="h-px w-10 bg-slate-300" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                            Printer Mania
                          </span>
                        </motion.div>

                        <motion.h2
                          initial={{ opacity: 0, y: 20 }}
                          animate={isActive ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.4, duration: 0.7 }}
                          className="text-4xl md:text-6xl font-black text-slate-900 leading-[1] mb-4 tracking-tight"
                        >
                          {item.title}
                        </motion.h2>

                        <motion.h3
                          initial={{ opacity: 0, y: 15 }}
                          animate={isActive ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.6 }}
                          className="text-lg md:text-xl font-bold text-[#4f46e5] mb-6"
                        >
                          {item.subtitle}
                        </motion.h3>

                        <motion.p
                          initial={{ opacity: 0, y: 15 }}
                          animate={isActive ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.8 }}
                          className="text-slate-600 text-[14px] md:text-[16px] leading-relaxed mb-10 font-medium max-w-[500px]"
                        >
                          {item.description}
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={isActive ? { opacity: 1 } : {}}
                          transition={{ delay: 1 }}
                          className="flex flex-wrap gap-6 mb-12"
                        >
                          {item.specs.map((spec, i) => (
                            <div key={i} className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-[#4f46e5] bg-white">
                                {spec.icon}
                              </div>
                              <span className="text-[11px] font-black uppercase tracking-widest text-slate-800">
                                {spec.text}
                              </span>
                            </div>
                          ))}
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={isActive ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 1.2 }}
                          className="flex items-center gap-5"
                        >
                          <Link
                            to="/shop"
                            className="px-10 py-4 bg-slate-900 text-white text-[12px] font-black uppercase tracking-widest hover:bg-[#4f46e5] transition-all rounded-sm flex items-center gap-3 relative group overflow-hidden"
                          >
                            <span className="relative z-10">Shop Now</span>
                            <ArrowRight
                              size={18}
                              className="relative z-10 group-hover:translate-x-1 transition-transform"
                            />
                            <div className="absolute inset-0 bg-[#4f46e5] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                          </Link>

                          <button
                            onClick={openSearch}
                            className="flex items-center gap-2.5 text-[12px] font-black uppercase tracking-widest text-slate-900 group bg-white/50 backdrop-blur-sm px-6 py-4 rounded-sm border border-slate-200 hover:bg-slate-900 hover:text-white transition-all"
                          >
                            <Search size={16} />
                            <span>Search Products</span>
                          </button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-4 h-7 border-2 border-slate-300 rounded-full flex justify-center p-1"
          >
            <div className="w-1 h-1.5 bg-slate-400 rounded-full" />
          </motion.div>
        </div>
      </div>

      <div className="w-full border-b border-slate-100 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
          {[
            {
              icon: <Verified size={48} />,
              title: "Genuine Products",
              desc: "Shop printers, ink, toner, and accessories from trusted and reliable brands.",
              color: "#3b82f6"
            },
            {
              icon: <Globe size={48} />,
              title: "Nationwide Shipping",
              desc: "Fast and dependable delivery to help you get your printing supplies on time.",
              color: "#4F46E5"
            },
            {
              icon: <Award size={48} />,
              title: "Quality Selection",
              desc: "Carefully selected products for home users, offices, and business printing needs.",
              color: "#6366f1"
            },
            {
              icon: <Zap size={48} />,
              title: "Easy Shopping",
              desc: "Find the right printer and supplies quickly with a simple and smooth buying experience.",
              color: "#f59e0b"
            }
          ].map((feat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center py-16 px-10 group cursor-default transition-colors hover:bg-slate-50/50 ${i !== 3 ? "lg:border-r" : ""
                } border-slate-100 border-b sm:border-b-0`}
            >
              <div
                className="mb-4 transition-transform duration-500"
                style={{ color: feat.color }}
              >
                {feat.icon}
              </div>
              <h4 className="font-black text-slate-900 text-[15px] capitalize mb-3">
                {feat.title}
              </h4>
              <p className="text-slate-500 text-[13px] leading-relaxed font-medium max-w-[220px]">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .custom-bullet {
          width: 30px !important;
          height: 2px !important;
          border-radius: 0 !important;
          background: #cbd5e1 !important;
          opacity: 1 !important;
          margin: 0 4px !important;
          transition: all 0.5s ease !important;
        }
        .swiper-pagination-bullet-active {
          background: #4f46e5 !important;
          width: 50px !important;
        }
        .swiper-pagination {
          bottom: 100px !important;
          left: 96px !important;
          text-align: left !important;
          width: auto !important;
        }
        @media (max-width: 1024px) {
          .swiper-pagination {
            left: 50% !important;
            transform: translateX(-50%) !important;
            bottom: 40px !important;
            text-align: center !important;
          }
        }
      `}</style>
    </div>
  );
}