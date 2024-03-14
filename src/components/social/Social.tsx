import Media from "./Media";

export default function Social() {
  return (
    <div className="py-20">
      <p className="text-sm uppercase border-b-[2px] border-b-gray-500 pb-5 px-5 sm:px-16 lg:px-20 xl:px-28">
        Social media and contacts
      </p>
      <Media
        name={"facebook"}
        socialLink={"https://web.facebook.com/AllSafeMHR?_rdc=1&_rdr"}
      />
      <Media
        name={"instagram"}
        socialLink={"https://www.instagram.com/alls_afe/"}
      />
      <Media
        name={"linkedin"}
        socialLink={"https://www.linkedin.com/in/all-safe-757725247/"}
      />
      <Media name={"github"} socialLink={"https://github.com/MeshHassan"} />
    </div>
  );
}
