export default function SideVideo() {
  return (
    <>
      <div className="mt-[450px] flex flex-col sm:flex-row justify-end items-end px-7 sm:px-16 lg:px-20 xl:px-28 border-t-2 border-gray-600 pt-36">
        <video width={180} height={180} autoPlay loop muted>
          <source src="/98912612.mp4" />
        </video>
        <div className="text-3xl max-w-[350px] uppercase font-Oswald">
          <p>
            we think and speak mainly swift, kotlin, node, react. that&apos;s
            everything
          </p>
          <p>you need!</p>
        </div>
      </div>
      <div className="line-circle py-14 mt-10 relative pt-28">
        <div className="absolute w-11/12 h-[1px] left-1/2 -translate-x-1/2 bg-white"></div>
      </div>
    </>
  );
}
