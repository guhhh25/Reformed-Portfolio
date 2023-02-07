import { FunctionComponent } from "react";

interface SideBarProps {
  item: string[] | [];
}

const SideBar = (props: SideBarProps) => {
  const { item } = props;

  return (
    <div className="bg-[#b10303] h-screen w-64 text-white">
      {item.map((item, key) => {
        return (
          <div
            key={1}
            className="flex w-full items-center justify-between px-12 py-4 text-xl"
          >
            <p>{item.Title}</p>
            <p>{item.Icon}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
