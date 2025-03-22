"use client";

const Subtitle = () => {
  // const [age, setAge] = useState<number | null>(20);

  // useEffect(() => {
  const birthDate = new Date("2003-03-24");
  const currentDate = new Date();
  const calculatedAge = Math.floor(
    (currentDate.getTime() - birthDate.getTime()) /
      (365.25 * 24 * 60 * 60 * 1000)
  );
  // setAge(calculatedAge);
  // }, []);

  return (
    <div className="text-zinc-600 dark:text-zinc-400">
      <p>{calculatedAge}y/o Tech Enthusiast, India</p>
    </div>
  );
};

export default Subtitle;
