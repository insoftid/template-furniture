const TestimoniCard = ({ testimoni }) => {
  return (
    // <div className="w-10">
    <div className="p-5 flex flex-col gap-10 justify-between w-[327px] border border-slate-600 flex-shrink-0">
      <p className="font-noto-serif text-black text-center text-2xl underline">
        "{testimoni.text}"
      </p>
      <div className="flex gap-3 justify-center items-center">
        <img src={testimoni.profil} alt="" className="w-10 h-10 object-cover" />
        <div className="flex flex-col gap-1">
          <p className="font-poppins text-black text-center text-base break-words">
            {testimoni.name}
          </p>
          <div className="flex gap-2">
            {Array.from({ length: testimoni.rating }, (_, index) => (
              <svg
                width="15"
                height="15"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.38836 0.407637C4.61444 -0.135879 5.38556 -0.135879 5.61164 0.407637L6.66234 2.93395L9.38951 3.15297C9.97693 3.1999 10.2151 3.93267 9.7675 4.31621L7.68982 6.09613L8.32418 8.75719C8.46094 9.33048 7.83769 9.78316 7.33505 9.47633L5 8.05016L2.66495 9.47633C2.16231 9.78316 1.53906 9.32997 1.67582 8.75719L2.31018 6.09613L0.232504 4.31621C-0.215127 3.93267 0.0230716 3.1999 0.610492 3.15297L3.33766 2.93395L4.38836 0.407637Z"
                  fill="#F7B62C"
                />
              </svg>
            ))}
            {Array.from({ length: 5 - testimoni.rating }, (_, index) => (
              <svg
                width="15"
                height="15"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.38836 0.407637C4.61444 -0.135879 5.38556 -0.135879 5.61164 0.407637L6.66234 2.93395L9.38951 3.15297C9.97693 3.1999 10.2151 3.93267 9.7675 4.31621L7.68982 6.09613L8.32418 8.75719C8.46094 9.33048 7.83769 9.78316 7.33505 9.47633L5 8.05016L2.66495 9.47633C2.16231 9.78316 1.53906 9.32997 1.67582 8.75719L2.31018 6.09613L0.232504 4.31621C-0.215127 3.93267 0.0230716 3.1999 0.610492 3.15297L3.33766 2.93395L4.38836 0.407637Z"
                  fill="#5D5D7C"
                />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default TestimoniCard;
