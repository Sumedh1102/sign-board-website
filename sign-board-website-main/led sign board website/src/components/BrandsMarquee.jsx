const brands = [
  {
    name: "Tata Motors",
    text: "TATA MOTORS",
    style: 'text-base font-bold text-blue-700',
  },
  {
    name: 'Cashify',
    text: 'CASHIFY',
    style: 'text-base font-medium text-gray-600 tracking-wide ',
  },
  {
    name: 'Jsw',
    text: 'JSW',
    style: 'text-2xl font-black text-blue-800',
    prefix: '',
    prefixStyle: 'text-blue-600 text-sm mr-1',
  },
  {
    name: 'Samsung',
    text: 'SAMSUNG',
    style: 'text-base font-bold text-gray-800 tracking-wider',
  },

];

const BrandsMarquee = () => {
  return (
    <section className="py-12 bg-white border-t border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
