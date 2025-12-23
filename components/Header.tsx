export default function Header() {
  return (
    <div className="bg-blue-400 text-shadow-2xs text-white flex justify-between items-center min-h-20 px-20">
      <p className="text-3xl">Sokol Dentistry</p>
      <div className="flex-col justify-center items-start text-md">
        <p>(718)745-6699</p>
        <p>Brooklyn, NY</p>
      </div>
    </div>
  );
}