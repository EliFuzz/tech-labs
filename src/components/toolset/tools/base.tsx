import { Col, InputNumber, message, Row, Space } from "antd";
import { ReactElement, useState } from "react";
import TextArea from "antd/es/input/TextArea";

export default (): ReactElement => {
  const [fromBase, setFromBase] = useState<number>(10);
  const [toBase, setToBase] = useState<number>(10);

  const [content, setContent] = useState<string | number>("");
  const [output, setOutput] = useState<string | number>("");

  const [valid, setValid] = useState<boolean>(true);

  const convert = (value: string, fromBase: number, toBase: number): string => {
    try {
      setValid(true);

      const is10OnlyNumbers = fromBase <= 10 && isNaN(parseInt(value));
      const isEachBaseValid =
        fromBase <=
        Math.max(
          ...value
            .toUpperCase()
            .split("")
            .map((char) => char.charCodeAt(0)),
        ) -
          55;
      if (is10OnlyNumbers || isEachBaseValid) {
        setValid(value === "");
        return "";
      }

      const charMap =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/";
      const val =
        fromBase >= 10 && fromBase <= 36 ? value.toUpperCase() : value;

      let base10Number = BigInt(0);
      if (fromBase !== 10) {
        for (let i = 0; i < val.length; i++) {
          base10Number =
            base10Number * BigInt(fromBase) + BigInt(charMap.indexOf(val[i]));
        }
      } else {
        base10Number = BigInt(val);
      }

      let convertedNumber = "";
      let quotient = base10Number;

      while (quotient > 0) {
        const remainder = quotient % BigInt(toBase);
        convertedNumber = charMap[Number(remainder)] + convertedNumber;
        quotient /= BigInt(toBase);
      }

      return convertedNumber;
    } catch (e) {
      setValid(value === "");
      return "";
    }
  };

  const onChangeFromBase = (value: any): void => {
    setFromBase(value);
    setOutput(convert(content.toString(), value, toBase));
  };

  const onChangeToBase = (value: any): void => {
    setToBase(value);
    setOutput(convert(content.toString(), fromBase, value));
  };

  const onChangeContent = ({ target: { value } }: any): void => {
    setContent(value);
    setOutput(convert(value, fromBase, toBase));
  };

  const onCopy = () => {
    if (content === "") return;
    message.success("Copied");
    navigator.clipboard.writeText(output.toString());
  };

  return (
    <>
      <Space.Compact>
        <InputNumber
          prefix="From:"
          style={{ minWidth: "100px" }}
          min={2}
          max={64}
          value={fromBase}
          onChange={onChangeFromBase}
        />
        <InputNumber
          prefix="To:"
          style={{ minWidth: "100px" }}
          min={2}
          max={64}
          value={toBase}
          onChange={onChangeToBase}
        />
      </Space.Compact>

      <br />
      <br />

      <Row gutter={[12, 12]}>
        <Col xs={24} sm={12}>
          <TextArea
            rows={4}
            autoSize={{ minRows: 3, maxRows: 15 }}
            value={content}
            onChange={onChangeContent}
            allowClear
            status={valid ? undefined : "error"}
          />
        </Col>
        <Col
          xs={24}
          sm={12}
          style={{ visibility: content === "" ? "hidden" : "visible" }}
        >
          <TextArea
            rows={4}
            autoSize={{ minRows: 3, maxRows: 15 }}
            value={output}
            className="copy"
            onClick={onCopy}
            readOnly
          />
        </Col>
      </Row>
    </>
  );
};
