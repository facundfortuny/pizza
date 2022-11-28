import BigaDough from "./bigaDough";
import BigaTemp from "./bigaTemp";

export default function Biga() {
  return (
    <div className="flex min-h-full flex-col justify-center py-2 sm:px-6 lg:px-8">
      <BigaDough />
      <BigaTemp />
    </div>
  );
}
