import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FaStar, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";
import face1 from "../assets/face1.png";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Startup Founder",
    rating: 5,
    review:
      "XpertSwap ne meri legal aur advisory needs ka solution ek hi jagah pe diya. Bahut hi smooth experience tha!",
  },
  {
    name: "Ankita Mehra",
    role: "Tech Entrepreneur",
    rating: 4,
    review:
      "Mentor booking system aur startup guides ne meri journey easy bana di. Thoda aur personalized hota toh 5 stars de deti.",
  },
  {
    name: "Aman Tiwari",
    role: "Founder, LegalEase",
    rating: 5,
    review:
      "Unhone mujhe proper license & document planning diya — bina kisi headache ke. Highly recommended!",
  },
  {
    name: "Neha Gupta",
    role: "Legal Consultant",
    rating: 4,
    review:
      "Client dashboard and AI legal bot se kaam bahut easy ho gaya. Great initiative!",
  },
  {
    name: "Kunal Verma",
    role: "Startup Enthusiast",
    rating: 5,
    review:
      "Jo bhi naya startup start karna chahta hai, unke liye perfect jagah hai XpertSwap.",
  },
  {
    name: "Meera Joshi",
    role: "Freelance Developer",
    rating: 4,
    review:
      "Legal docs aur mentor guidance dono ek hi platform par milna rare hota hai. Kudos to the team!",
  },
  {
    name: "Yash Malhotra",
    role: "UI/UX Designer",
    rating: 5,
    review:
      "Design aur functionality ka combo is platform pe kamaal ka hai. Interface bhi user-friendly hai!",
  },
  {
    name: "Shruti Agarwal",
    role: "Startup Coach",
    rating: 5,
    review:
      "Startups ke liye roadmap banana pehle kabhi itna easy nahi tha. XpertSwap ne kaafi madad ki!",
  },
  {
    name: "Nikhil Saxena",
    role: "Business Strategist",
    rating: 4,
    review:
      "Legal docs aur mentor booking process dono hi streamline hai. Bas thoda zyada AI input hota toh better hota.",
  },
  {
    name: "Pooja Bansal",
    role: "Women Entrepreneur",
    rating: 5,
    review:
      "Female founders ke liye mentorship aur legal support ikathe milna rare hota hai — this platform nails it!",
  }
];

const TestimonialSection = () => {
  return (
    <motion.section
      className="w-full bg-gradient-to-r from-indigo-50 to-blue-50 py-12 px-4 md:px-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-indigo-800">
        What Our Users Say
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              className="w-full max-w-sm mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-600 p-6 flex flex-col items-center rounded-b-none rounded-t-3xl">
                <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden">
                  <img
                    src={face1}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="bg-white px-6 pt-4 pb-6 text-center rounded-t-none rounded-b-3xl">
                <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{testimonial.role}</p>

                <div className="flex justify-center mb-3 text-yellow-500">
                  {[...Array(5)].map((_, i) =>
                    i < testimonial.rating ? (
                      <FaStar key={i} />
                    ) : (
                      <FaRegStar key={i} />
                    )
                  )}
                </div>

                <p className="text-gray-700 text-sm mb-4">{testimonial.review}</p>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-700 transition">
                  View More
                </button>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};

export default TestimonialSection;