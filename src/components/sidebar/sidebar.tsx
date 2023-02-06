import { FunctionComponent } from "react";

interface SideBarProps {
  item: string[] | [];
}

const SideBar = (props: SideBarProps) => {
  const { item } = props;

  return (
    <div className="bg-[#b10303] h-full w-64">
      {item.map((item) => {
        return <div key={1}>{item.Title}</div>;
      })}
    </div>
  );
};

export default SideBar;
