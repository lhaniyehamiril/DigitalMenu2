import { FindProductByIdResponse } from "@/packages/package-core/application/dtos";

export interface ProductDetailProps {
  initial: FindProductByIdResponse;
}

export function ProductDetailComponent({ initial }: ProductDetailProps) {
  return (
    <section className="w-full">
      <div className="max-w-[400px] mx-auto px-4">
        {/* Image */}
        <div className="mt-6 h-80 rounded-xl overflow-hidden bg-gray-100">
          <img
            src={initial.media}
            alt={initial.title ?? "product image"}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div dir="rtl" className="mt-4 space-y-3">
          <p className="text-lg font-bold text-right">
            {initial.title}
          </p>

          <p className="text-green-800 font-semibold text-right">
            {initial.price?.toLocaleString("fa-IR")} تومان
          </p>

          <p className="text-sm text-gray-700 text-right leading-relaxed">
            {initial.description}
          </p>
        </div>
      </div>
    </section>
  );
}
