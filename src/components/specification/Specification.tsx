import Videos from "./Videos";

export default function Specification() {
  return (
    <section className="pt-40">
      <div className="title uppercase w-full flex justify-center text-center text-2xl">
        <p>
          from project specifications, <br /> scratch and wireframes
          <span className="text-gray-500">
            {" "}
            to <br /> product launch and <br /> maintenance
          </span>
        </p>
      </div>
      <Videos />
    </section>
  );
}
