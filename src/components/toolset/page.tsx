import { Cascader, CascaderProps, Divider, GetProp, Spin } from "antd";
import { lazy, ReactElement, Suspense, useState } from "react";
import Tools from "./tools.json";
import { LoadingOutlined } from "@ant-design/icons";

type DefaultOptionType = GetProp<CascaderProps, "options">[number];

type Option = {
  value: string;
  label: string;
  children?: Option[];
};

const filter = (inputValue: string, path: DefaultOptionType[]) =>
  path.some((option) =>
    (option.label as string).toLowerCase().includes(inputValue.toLowerCase()),
  );

function tool(name: string): any {
  return lazy(() => import(`./tools/${name}.tsx`));
}

export default (): ReactElement => {
  const [options] = useState<Option[]>(Tools);
  const [select, setSelect] = useState<string>("");

  const onChange = (value: any): void => {
    setSelect(value[value.length - 1]);
  };

  const Tool: any = tool(select);

  return (
    <>
      <Cascader
        placeholder="select tool"
        style={{ width: "100%" }}
        expandTrigger="hover"
        options={options}
        showSearch={{ filter }}
        onChange={onChange}
      />
      {select && (
        <>
          <Divider />
          <Suspense
            fallback={
              <Spin
                indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
              />
            }
          >
            <Tool />
          </Suspense>
        </>
      )}
    </>
  );
};
