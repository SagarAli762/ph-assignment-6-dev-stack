import bannerImg from "@/assets/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="container mx-auto mt-8 px-4 sm:px-6 lg:px-0 text-center lg:text-start">
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          items-center
          gap-8
          lg:gap-12
          rounded-[16px]
          bg-[#15171D]
          p-6
          sm:p-8
          md:p-10
          lg:p-[56px]
          
        "
      >
        {/* Content */}
        <div className="space-y-5 sm:space-y-6 max-w-[475px] lg:max-w-none mx-auto ">
          <p className="text-[12px] sm:text-[14px] font-bold text-[#C2F800]">
            WORKOUT LIBRARY
          </p>

          <h1
            className="
              text-[32px]
              leading-[1.1]
              sm:text-[42px]
              md:text-[50px]
              lg:text-[60px]
              lg:leading-16
              font-bold
              text-white
            "
          >
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="max-w-[600px] text-[14px] leading-6 text-gray-400 sm:text-[16px]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <button
            className="
              rounded-[6px]
              bg-[#C2F800]
              px-5
              py-3
              text-[11px]
              font-bold
              text-black
              transition
              hover:bg-[#b0e600]
              sm:px-6
              sm:py-3
              sm:text-[12px]
            "
          >
            BROWSE WORKOUTS
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src={bannerImg}
            alt="Workout banner"
            className="h-auto w-full max-w-[280px] sm:max-w-[350px] md:max-w-[420px] lg:max-w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
