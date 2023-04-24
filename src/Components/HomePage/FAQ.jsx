import React from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FAQData } from "../../helpers/FAQData";

const FAQ = () => {
  return (
    <div className="py-12 esm:py-8">
      <div>
        <section className="mb-5 w-max">
          <h1 className="font-extrabold text-5xl esm:text-4xl mb-3">FAQ</h1>
        </section>

        <Splide
          options={{
            autoplay: true,
            rewind: true,
            width: "100%",
            gap: "50px",
            arrows: false,
            breakpoints: { 600: { height: "600px" }, 2000: "450px" },
            mediaQuery: "max",
          }}
        >
          {FAQData.map((faq, i) => (
            <SplideSlide key={i}>
              <div className="flex flex-col rounded bg-slate-100 h-full p-10 ">
                <h1
                  className="text-3xl font-bold mb-4 esm:text-2xl"
                  dangerouslySetInnerHTML={{ __html: faq.question }}
                ></h1>

                {faq.content.map((text) => (
                  <p
                    className="font-semibold text-gray-500 text-base esm:text-sm"
                    dangerouslySetInnerHTML={{ __html: text }}
                  ></p>
                ))}
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default FAQ;
