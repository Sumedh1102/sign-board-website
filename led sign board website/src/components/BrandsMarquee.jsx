const brands = [
  {
    name: 'Cafe Coffee Day',
    text: 'CAFE\nCOFFEE\nDAY',
    style: 'text-[10px] font-bold text-red-600 leading-tight tracking-tight text-center',
  },
  {
    name: "Domino's",
    text: "Domino's",
    style: 'text-base font-bold text-blue-700',
  },
  {
    name: 'SBI',
    text: 'SBI',
    style: 'text-2xl font-black text-blue-800',
    prefix: '●',
    prefixStyle: 'text-blue-600 text-sm mr-1',
  },
  {
    name: 'Skechers',
    text: 'SKECHERS',
    style: 'text-base font-bold text-gray-800 tracking-wider',
  },
  {
    name: 'Titan',
    text: 'TITAN',
    style: 'text-lg font-light text-gray-700 tracking-[0.3em]',
    hasIcon: true,
  },
  {
    name: 'Pantaloons',
    text: 'pantaloons',
    style: 'text-base font-medium text-gray-600 tracking-wide lowercase',
  },
  {
    name: 'Pizza Hut',
    text: 'Pizza Hut',
    style: 'text-base font-bold text-red-600 italic',
  },
];

const BrandsMarquee = () => {
  return (
    <section className="py-12 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
            Brands We've Worked With
          </span>
        </div>

        <div className="flex items-center justify-between gap-8 overflow-x-auto scrollbar-hide py-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex-shrink-0 flex items-center justify-center min-w-[100px] px-4 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer grayscale hover:grayscale-0"
            >
              {brand.prefix && (
                <span className={brand.prefixStyle}>{brand.prefix}</span>
              )}
              {brand.text.includes('\n') ? (
                <div className={brand.style}>
                  {brand.text.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              ) : (
                <span className={brand.style}>{brand.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsMarquee;
