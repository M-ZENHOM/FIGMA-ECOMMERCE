import React from "react";

export default function ProductDescription() {
  return (
    <div className="w-full max-w-[727px] h-[324px]">
      <h2 className="text-base font-semibold pb-6">Detail</h2>
      <p className="text-black-500 text-sm w-full max-w-[727px] pb-10">
        Elevate your everyday style with our Men's Black T-Shirts, the ultimate
        wardrobe essential for modern men. Crafted with meticulous attention to
        detail and designed for comfort, these versatile black tees are a
        must-have addition to your collection. The classic black color never
        goes out of style. Whether you're dressing up for a special occasion or
        keeping it casual, these black t-shirts are the perfect choice,
        effortlessly complementing any outfit.
      </p>
      <ul className="text-black-500 text-sm list-disc px-5 space-y-1">
        <li>Premium Quality</li>
        <li>Versatile Wardrobe Staple</li>
        <li>Available in Various Sizes</li>
        <li>Tailored Fit</li>
      </ul>
    </div>
  );
}
