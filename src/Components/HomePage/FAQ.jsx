import React from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FAQData } from "../../helpers/FAQData";

const FAQ = () => {
  return (
    <div className="py-12">
      <div>
        <section className="mb-5 w-max">
          <h1 className="font-bold text-5xl mb-3">FAQ</h1>
          <div className="h-3 bg-colorButtonBg rounded-full w-full"></div>
        </section>

        <Splide
          options={{
            autoplay: true,
            rewind: true,
            width: "100%",
            height: "350px",
            gap: "50px",
            arrows: false,
          }}
        >
          {FAQData.map((faq) => (
            <SplideSlide>
              <div className="flex flex-col rounded-3xl bg-slate-300 h-full p-10 text-slate-600">
                <h1
                  className="text-3xl font-bold mb-4"
                  dangerouslySetInnerHTML={{ __html: faq.question }}
                ></h1>

                {faq.content.map((text) => (
                  <p
                    className="font-semibold"
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
