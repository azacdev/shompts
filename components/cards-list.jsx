import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardsList({ data, handleToggleClick }) {
  return (
    <div className="max-w-7xl mx-auto md:px-8">
      <HoverEffect items={data} />
    </div>
  );
}
