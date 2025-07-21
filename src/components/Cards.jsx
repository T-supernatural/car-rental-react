import cards from "../data/cards";

const Cards = () => {
  return (
    <>
    <h1 className="capitalize font-light text-4xl text-center">Luxury ride for maximum <br /> satisfaction. enjoy.</h1>
      <div className="flex flex-wrap justify-center gap-14 px-4 py-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transition-transform hover:-translate-y-1"
          >
            <img
              className="p-8 rounded-t-lg h-64 w-full object-contain"
              src={card.image}
              alt={card.name}
            />

            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {card.name}
              </h5>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {card.type}
              </p>

              {/* Stars */}
              <div className="flex items-center mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(card.rating)
                        ? "text-yellow-300"
                        : "text-gray-200 dark:text-gray-600"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
                <span className="ml-3 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
                  {card.rating}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${card.price}/day
                </span>
                <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700">
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
