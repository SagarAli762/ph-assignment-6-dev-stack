import Image from "next/image";
import { FaCheck, FaBookmark } from "react-icons/fa";
interface ILibraryDetailProps {
  params: Promise<{
    id: number;
  }>;
}

const LibraryDetailsCard = async ({ params }: ILibraryDetailProps) => {
  const { id } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const library = await res.json();
  console.log(library);
  const {
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    sets,
    reps,
    rating,
    description,
    instructions,
  } = library;

  return (
    <div className="container mx-auto">
      <div className="w-full rounded-xl bg-[#0F1115] p-3 sm:p-5 lg:p-8">
        <div
          className="
          flex
          flex-col
          gap-5
          md:flex-row
          md:items-start
          lg:gap-6
        "
        >
          {/*IMAGE  */}
          <div
            className="
            relative
            w-full
            shrink-0
            overflow-hidden
            rounded-lg
            sm:rounded-xl
            md:w-[42%]
            lg:w-[46%]
          "
          >
            <Image
              src={image}
              alt={name}
              width={600}
              height={700}
              className="
              h-auto
              max-h-[500px]
              w-full
              object-cover
              object-center
              sm:max-h-[600px]
              lg:max-h-[650px]
            "
            />
          </div>

          {/* DETAILS */}
          <div className="min-w-0 flex-1">
            {/* Title */}
            <h2
              className="
              text-xl
              font-bold
              uppercase
              leading-tight
              text-white
              sm:text-2xl
              lg:text-xl
              xl:text-2xl
            "
            >
              {name}
            </h2>

            {/* Description */}
            <p
              className="
              mt-2
              text-xs
              leading-5
              text-gray-400
              sm:text-sm
            "
            >
              {description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-3 flex flex-wrap gap-2">
              {muscleGroups.map((muscle: string[], idx: number) => (
                <span
                  key={idx}
                  className="
                  badge
                  badge-sm
                  border-none
                  bg-[#C2F800]
                  px-3
                  text-[10px]
                  font-bold
                  uppercase
                  text-black
                "
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/*INFO TABLE*/}
            <div
              className="
              mt-4
              overflow-hidden
              rounded-xl
              border
              border-[#242832]
              bg-[#15181F]
            "
            >
              <div className="divide-y divide-[#242832]">
                {/* Equipment */}
                <div className="flex items-center justify-between gap-4 px-3 py-2.5 text-[10px] sm:px-4">
                  <span className="uppercase text-gray-400">Equipment</span>
                  <span className="text-right text-gray-200">{equipment}</span>
                </div>

                {/* Difficulty */}
                <div className="flex items-center justify-between gap-4 px-3 py-2.5 text-[10px] sm:px-4">
                  <span className="uppercase text-gray-400">Difficulty</span>
                  <span className="text-gray-200">{difficulty}</span>
                </div>

                {/* Sets */}
                <div className="flex items-center justify-between px-3 py-2.5 text-[10px] sm:px-4">
                  <span className="uppercase text-gray-400">Sets</span>
                  <span className="text-gray-200">{sets}</span>
                </div>

                {/* Reps */}
                <div className="flex items-center justify-between px-3 py-2.5 text-[10px] sm:px-4">
                  <span className="uppercase text-gray-400">Reps</span>
                  <span className="text-gray-200">{reps}</span>
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between px-3 py-2.5 text-[10px] sm:px-4">
                  <span className="uppercase text-gray-400">Duration</span>
                  <span className="text-gray-200">{duration} min</span>
                </div>

                {/* Calories */}
                <div className="flex items-center justify-between px-3 py-2.5 text-[10px] sm:px-4">
                  <span className="uppercase text-gray-400">Calories</span>
                  <span className="text-gray-200">{caloriesBurned} kcal</span>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between px-3 py-2.5 text-[10px] sm:px-4">
                  <span className="uppercase text-gray-400">Rating</span>
                  <span className="text-gray-200">{rating}</span>
                </div>
              </div>
            </div>

            {/*  INSTRUCTIONS  */}
            <div className="mt-5">
              <h3 className="text-xs font-bold uppercase text-white sm:text-sm">
                Instructions
              </h3>

              <ol className="mt-3 list-decimal space-y-2 pl-4 text-[10px] leading-4 text-gray-400 sm:text-xs">
                {instructions.map((instruction: string[], idx: number) => (
                  <li key={idx} className="pl-1">
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>

            {/*BUTTONS */}
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                className="
                btn
                btn-sm
                border-none
                bg-[#C2F800]
                px-4
                text-[10px]
                font-bold
                text-black
                hover:bg-[#b4e900]
              "
              >
                <FaCheck size={10} />
                Add to today's plan
              </button>

              <button
                className="
                btn
                btn-sm
                border
                border-[#343944]
                bg-transparent
                px-4
                text-[10px]
                font-normal
                text-gray-300
                hover:bg-[#20232B]
              "
              >
                <FaBookmark size={10} />
                Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryDetailsCard;
