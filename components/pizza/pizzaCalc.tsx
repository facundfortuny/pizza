import PizzaDough from "./pizzaDough";
import PizzaTemp from "./pizzaTemp";

export default function Pizza() {
  return (
    <div className="flex min-h-full flex-col justify-center py-2 sm:px-6 lg:px-8">
      <PizzaDough />
      <PizzaTemp />
    </div>
  );
}
