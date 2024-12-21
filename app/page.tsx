import JokeGeneratorForm from "@/components/JokeGeneratorForm";

export default function Home() {
  return (
    <div className='h-screen overflow-hidden w-full flex items-center justify-center bg-gradient-to-b from-gray-800 to-black'>
     <JokeGeneratorForm/>
    </div>
  );
}
