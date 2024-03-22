import { Cascader, CascaderProps, Col, GetProp, Row } from "antd";
import { ReactElement, useState } from "react";
import StringTools from "./assets/string-manipulation.json";
import TextArea from "antd/es/input/TextArea";

type DefaultOptionType = GetProp<CascaderProps, "options">[number];

type Option = {
  value: string;
  label: string;
  children?: Option[];
  disabled?: boolean;
  unit?: number;
};

type Data = {
  options?: string[];
  content?: string;
  output?: string;
};

const filter = (inputValue: string, path: DefaultOptionType[]) =>
  path.some((option) =>
    (option.label as string).toLowerCase().includes(inputValue.toLowerCase()),
  );

export default (): ReactElement => {
  const conversionOptions: Option[] = StringTools;

  const [data, setData] = useState<Data>();

  const functions = (key: string, data: string): string => {
    switch (key) {
      case "escape_html":
        return escape_html(data);
      case "unescape_html":
        return unescape_html(data);
      case "escape_xml":
        return escape_xml(data);
      case "unescape_xml":
        return unescape_xml(data);
      case "camel_case":
        return camel_case(data);
      case "snake_case":
        return snake_case(data);
      case "screaming_snake_case":
        return screaming_snake_case(data);
      case "capitalized_snake_case":
        return capitalized_snake_case(data);
      case "kebab_case":
        return kebab_case(data);
      case "pascal_case":
        return pascal_case(data);
      case "capitalize":
        return capitalize(data);
      case "lowercase":
        return lowercase(data);
      case "uppercase":
        return uppercase(data);
      case "str_sort":
        return str_sort(data);
      case "str_reverse":
        return str_reverse(data);
      case "str_shuffle":
        return str_shuffle(data);
      case "words_sort":
        return words_sort(data);
      case "words_reverse":
        return words_reverse(data);
      case "words_shuffle":
        return words_shuffle(data);
      case "lines_sort":
        return lines_sort(data);
      case "lines_reverse":
        return lines_reverse(data);
      case "lines_shuffle":
        return lines_shuffle(data);
      case "trim_start":
        return trim_start(data);
      case "trim_end":
        return trim_end(data);
      case "normalize_blank_space":
        return normalize_blank_space(data);
      case "trim_lines":
        return trim_lines(data);
      case "strip_html":
        return strip_html(data);
      case "extract_url":
        return extract_url(data);
      case "extract_email":
        return extract_email(data);
      default:
        throw new Error(`Unsupported function: ${key}`);
    }
  };

  // Escape/Unescape
  const escape_html = (data: string): string => {
    const htmlEntities: { [key: string]: string } = {
      '"': "&quot;",
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;",
    };

    return data.replace(/["&<>'/`=]/g, (c) => htmlEntities[c]);
  };

  const unescape_html = (data: string): string => {
    const htmlEntities: { [key: string]: string } = {
      "&quot;": '"',
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&#39;": "'",
      "&#x2F;": "/",
      "&#x60;": "`",
      "&#x3D;": "=",
    };

    return data.replace(
      /(&quot;|&amp;|&lt;|&gt;|&#39;|&#x2F;|&#x60;|&#x3D;)/g,
      (c) => htmlEntities[c],
    );
  };

  const escape_xml = (data: string): string => {
    const xmlEntities: { [key: string]: string } = {
      '"': "&quot;",
      "'": "&apos;",
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
    };

    return data.replace(/["'&<>]/g, (c) => xmlEntities[c]);
  };

  const unescape_xml = (data: string): string => {
    const xmlEntities: { [key: string]: string } = {
      "&quot;": '"',
      "&apos;": "'",
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
    };

    return data.replace(
      /(&quot;|&apos;|&amp;|&lt;|&gt;)/g,
      (c) => xmlEntities[c],
    );
  };

  // Switch Case
  const camel_case = (data: string): string =>
    data
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, c: string) => c.toUpperCase());

  const snake_case = (data: string): string =>
    data
      .replace(/([a-z])([A-Z])/g, "$1_$2")
      .replace(/(\s+|-|_)+/g, "_")
      .toLowerCase();

  const screaming_snake_case = (data: string): string =>
    data
      .replace(/([a-z])([A-Z])/g, "$1_$2")
      .replace(/(\s+|-|_)+/g, "_")
      .toUpperCase();

  const capitalized_snake_case = (data: string): string =>
    data
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/[\s\-]+|_+/g, "_")
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("_");

  const kebab_case = (data: string): string =>
    data
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .replace(/-+/g, "-")
      .toLowerCase();

  const pascal_case = (data: string): string =>
    data.replace(/(^\w|-\w|_\w|\s\w)/g, (match) =>
      match.toUpperCase().replace(/-|_|\s/g, ""),
    );

  const capitalize = (data: string): string =>
    data.replace(/(^|\. *)([a-z])/g, (match) => match.toUpperCase());

  const lowercase = (data: string): string => data.toLowerCase();

  const uppercase = (data: string): string => data.toUpperCase();

  // Sort
  const str_sort = (data: string): string => data.split("").sort().join("");

  const str_reverse = (data: string): string =>
    data.split("").sort().reverse().join("");

  const str_shuffle = (data: string): string =>
    data
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

  const words_sort = (data: string): string =>
    data
      .split(" ")
      .map((word) => word.split("").sort().join(""))
      .join(" ");

  const words_reverse = (data: string): string =>
    data
      .split(" ")
      .map((word) => word.split("").sort().reverse().join(""))
      .join(" ");

  const words_shuffle = (data: string): string =>
    data
      .split(" ")
      .map((word) =>
        word
          .split("")
          .sort(() => Math.random() - 0.5)
          .join(""),
      )
      .join(" ");

  const lines_sort = (data: string): string =>
    data.split("\n").sort().join("\n");

  const lines_reverse = (data: string): string =>
    data.split("\n").sort().reverse().join("\n");

  const lines_shuffle = (data: string): string =>
    data
      .split("\n")
      .sort(() => Math.random() - 0.5)
      .join("\n");

  //Blank Space
  const trim_start = (data: string): string => data.replace(/^\s+/g, "");

  const trim_end = (data: string): string => data.replace(/\s+$/g, "");

  const normalize_blank_space = (data: string): string =>
    data.replace(/\s+/g, " ");

  const trim_lines = (data: string): string => data.replace(/\n+/g, "\n");

  // Extract

  const strip_html = (data: string): string => data.replace(/<[^>]+>/g, "");

  const extract_url = (data: string): string =>
    data.match(/(https?:\/\/\S+)/g)?.[0] || "";

  const extract_email = (data: string): string =>
    data.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)?.[0] ||
    "";

  const onSelectionChange = (value: any): void => {
    setData({
      ...data,
      options: value,
      output:
        value !== undefined &&
        data?.content !== undefined &&
        data?.content !== ""
          ? (value as string[])
              ?.map((el: string) => el[1])
              ?.reduce(
                (acc, funcName) => functions(funcName, acc),
                data?.content,
              )
          : undefined,
    });
  };

  const onChangeContent = ({ target: { value } }: any): void => {
    setData({
      ...data,
      content: value,
      output:
        value !== undefined && value !== "" && data?.options !== undefined
          ? data?.options
              ?.map((el) => el[1])
              ?.reduce((acc, funcName) => functions(funcName, acc), value)
          : undefined,
    });
  };

  return (
    <Row gutter={[12, 12]} align="middle">
      <Col xs={24}>
        <Cascader
          placeholder="Chain conversions"
          style={{ width: "100%" }}
          options={conversionOptions}
          value={data?.options}
          showSearch={{ filter }}
          onChange={onSelectionChange}
          multiple
          expandTrigger="hover"
          maxTagCount="responsive"
        />
      </Col>
      <Col xs={24} sm={12}>
        <TextArea
          rows={4}
          autoSize={{ minRows: 3, maxRows: 30 }}
          value={data?.content}
          onChange={onChangeContent}
          allowClear
        />
      </Col>
      {data?.output && (
        <Col xs={24} sm={12}>
          <TextArea
            rows={4}
            autoSize={{ minRows: 3, maxRows: 30 }}
            value={data?.output}
            readOnly
          />
        </Col>
      )}
    </Row>
  );
};
