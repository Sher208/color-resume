import { kv } from "@vercel/kv";
import { AiOutlineEye } from "react-icons/ai";
import { FC } from "react";

interface ViewCounterProps extends React.HTMLAttributes<HTMLDivElement> {}

const ViewCounter: FC<ViewCounterProps> = async ({ ...props }) => {
  const views = await kv.incr("views");

  return (
    <div {...props}>
      <div className="flex flex-row items-center">
        <div>
          <AiOutlineEye className="h-8 w-8" />
        </div>
        <div className="text-m font-semibold ml-2">
          {Intl.NumberFormat("en-us").format(views)}
        </div>
      </div>
    </div>
  );
};

export default ViewCounter;
