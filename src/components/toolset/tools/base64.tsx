import {
  Cascader,
  CascaderProps,
  Col,
  GetProp,
  message,
  Row,
  Switch,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { ReactElement, useState } from "react";

function strToArrayBuffer(str: string): ArrayBuffer {
  if (!str) return new ArrayBuffer(0);

  const arr = new Uint8Array(str.length);
  let i = str.length;

  while (i--) {
    arr[i] = str.charCodeAt(i);
    if (str.charCodeAt(i) > 255) return new TextEncoder().encode(str).buffer;
  }

  return arr.buffer;
}

function ord(c: string): number {
  if (c.length === 2) {
    const high = c.charCodeAt(0);
    const low = c.charCodeAt(1);
    if (high >= 0xd800 && high < 0xdc00 && low >= 0xdc00 && low < 0xe000) {
      return (high - 0xd800) * 0x400 + low - 0xdc00 + 0x10000;
    }
  }

  return c.charCodeAt(0);
}

function chr(o: number): string {
  if (o > 0xffff) {
    o -= 0x10000;
    const high = String.fromCharCode(((o >>> 10) & 0x3ff) | 0xd800);
    o = 0xdc00 | (o & 0x3ff);
    return high + String.fromCharCode(o);
  }

  return String.fromCharCode(o);
}

function expandRange(str: string): string[] {
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    if (i < str.length - 2 && str[i + 1] === "-" && str[i] !== "\\") {
      const start = ord(str[i]),
        end = ord(str[i + 2]);

      for (let j = start; j <= end; j++) {
        arr.push(chr(j));
      }
      i += 2;
    } else if (i < str.length - 2 && str[i] === "\\" && str[i + 1] === "-") {
      arr.push("-");
      i++;
    } else {
      arr.push(str[i]);
    }
  }
  return arr;
}

function toBase64(data: any, alphabet: string = "A-Za-z0-9+/="): string {
  if (!data) return "";
  if (typeof data == "string") {
    data = strToArrayBuffer(data);
  }
  if (data instanceof ArrayBuffer) {
    data = new Uint8Array(data);
  }

  alphabet = expandRange(alphabet).join("");
  if (alphabet.length !== 64 && alphabet.length !== 65) {
    throw new Error("Invalid Base64 alphabet length");
  }

  let output = "",
    chr1,
    chr2,
    chr3,
    enc1,
    enc2,
    enc3,
    enc4,
    i = 0;

  while (i < data.length) {
    chr1 = data[i++];
    chr2 = data[i++];
    chr3 = data[i++];

    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;

    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }

    output +=
      alphabet.charAt(enc1) +
      alphabet.charAt(enc2) +
      alphabet.charAt(enc3) +
      alphabet.charAt(enc4);
  }

  return output;
}

function byteArrayToChars(byteArray: Uint8Array): string {
  if (!byteArray || !byteArray.length) return "";
  let str = "";
  for (let i = 0; i < byteArray.length; i += 20000) {
    str += String.fromCharCode(...byteArray.slice(i, i + 20000));
  }
  return str;
}

function byteArrayToUtf8(byteArray: Uint8Array): string {
  if (!byteArray || !byteArray.length) return "";
  if (!(byteArray instanceof Uint8Array)) byteArray = new Uint8Array(byteArray);

  try {
    return new TextDecoder().decode(byteArray);
  } catch (err) {
    return byteArrayToChars(byteArray);
  }
}

function fromBase64(
  data: string,
  alphabet: string = "A-Za-z0-9+/=",
  returnType: string = "string",
  removeNonAlphChars: boolean = true,
  strictMode: boolean = false,
): Uint8Array | string {
  if (!data) {
    return returnType === "string" ? "" : new Uint8Array();
  }

  alphabet = alphabet || "A-Za-z0-9+/=";
  alphabet = expandRange(alphabet).join("");

  if (alphabet.length !== 64 && alphabet.length !== 65) {
    throw new Error("Invalid Base64 alphabet length");
  }

  if (removeNonAlphChars) {
    const re = new RegExp(
      "[^" + alphabet.replace(/[[\]\\\-^$]/g, "\\$&") + "]",
      "g",
    );
    data = data.replace(re, "");
  }

  if (strictMode) {
    if (data.length % 4 === 1) {
      throw new Error("Invalid Base64 input length");
    }

    if (alphabet.length === 65) {
      const pad = alphabet.charAt(64);
      const padPos = data.indexOf(pad);
      if (padPos >= 0) {
        if (padPos < data.length - 2 || data.charAt(data.length - 1) !== pad) {
          throw new Error("Base64 padding character misplaced");
        }

        if (data.length % 4 !== 0) {
          throw new Error("Base64 not padded to a multiple of 4");
        }
      }
    }
  }

  const output = [];
  let chr1,
    chr2,
    chr3,
    enc1,
    enc2,
    enc3,
    enc4,
    i = 0;

  while (i < data.length) {
    enc1 = alphabet.indexOf(data.charAt(i++));
    enc2 = alphabet.indexOf(data.charAt(i++));
    enc3 = alphabet.indexOf(data.charAt(i++));
    enc4 = alphabet.indexOf(data.charAt(i++));

    if (strictMode && (enc1 < 0 || enc2 < 0 || enc3 < 0 || enc4 < 0)) {
      throw new Error("Base64 input contains non-alphabet char(s)");
    }

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    if (chr1 >= 0 && chr1 < 256) {
      output.push(chr1);
    }
    if (chr2 >= 0 && chr2 < 256 && enc3 !== 64) {
      output.push(chr2);
    }
    if (chr3 >= 0 && chr3 < 256 && enc4 !== 64) {
      output.push(chr3);
    }
  }
  const result = new Uint8Array(output);

  return returnType === "string" ? byteArrayToUtf8(result) : result;
}

const formatTypes: Record<string, string> = {
  "Standard (RFC 4648)": "A-Za-z0-9+/=",
  "URL safe (RFC 4648 \u00A75)": "A-Za-z0-9-_",
  "Filename safe": "A-Za-z0-9+\\-=",
  itoa64: "./0-9A-Za-z=",
  XML: "A-Za-z0-9_.",
  y64: "A-Za-z0-9._-",
  z64: "0-9a-zA-Z+/=",
  "Radix-64 (RFC 4880)": "0-9A-Za-z+/=",
  Uuencoding: " -_",
  Xxencoding: "+\\-0-9A-Za-z",
  BinHex: "!-,-0-689@A-NP-VX-Z[`a-fh-mp-r",
  ROT13: "N-ZA-Mn-za-m0-9+/=",
  "UNIX crypt": "./0-9A-Za-z",
  Atom128: "/128GhIoPQROSTeUbADfgHijKLM+n0pFWXY456xyzB7=39VaqrstJklmNuZvwcdEC",
  Megan35: "3GHIJKLMNOPQRSTUb=cdefghijklmnopWXYZ/12+406789VaqrstuvwxyzABCDEF5",
  Zong22: "ZKj9n+yf0wDVX1s/5YbdxSo=ILaUpPBCHg8uvNO4klm6iJGhQ7eFrWczAMEq3RTt2",
  Hazz15: "HNO4klm6ij9n+J2hyf0gzA8uvwDEq3X1Q7ZKeFrWcVTts/MRGYbdxSo=ILaUpPBC5",
};

type DefaultOptionType = GetProp<CascaderProps, "options">[number];

const filter = (inputValue: string, path: DefaultOptionType[]) =>
  path.some((option) =>
    (option.label as string).toLowerCase().includes(inputValue.toLowerCase()),
  );

export default function Tool(): ReactElement {
  const [content, setContent] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const [convertType, setConvertType] = useState<boolean>(true);
  const [formatType, setFormatType] = useState<string>("");

  const [inputStatus, setInputStatus] = useState<boolean>(false);

  const convert = (
    content: string,
    convertType: boolean,
    formatType: string,
  ): Uint8Array | string => {
    try {
      setInputStatus(false);
      return convertType
        ? toBase64(content, formatType)
        : fromBase64(content, formatType);
    } catch (err) {
      setInputStatus(true);
      return output;
    }
  };

  const onChangeConvertType = (checked: boolean): void => {
    setConvertType(checked);
    setContent(output);
    setOutput(convert(output, checked, formatTypes[formatType]) as string);
  };
  const onChangeFormatType = (value: any): void => {
    const selected = value[value.length - 1];
    setFormatType(selected);
    setOutput(convert(content, convertType, formatTypes[selected]) as string);
  };

  const onChangeContent = ({ target: { value } }: any): void => {
    setContent(value);
    setOutput(convert(value, convertType, formatTypes[formatType]) as string);
  };

  const onCopy = () => {
    if (content === "") return;
    message.success("Copied");
    navigator.clipboard.writeText(output);
  };

  return (
    <>
      <Row gutter={[12, 12]} align="middle">
        <Col xs={24} sm={{ span: 4 }} md={{ span: 3 }}>
          <Switch
            checkedChildren="toBase64"
            unCheckedChildren="fromBase64"
            onChange={onChangeConvertType}
            defaultChecked
          />
        </Col>
        <Col xs={24} sm={{ span: 19, offset: 1 }} md={{ span: 20, offset: 1 }}>
          <Cascader
            defaultValue={["Standard (RFC 4648)"]}
            style={{ width: "100%" }}
            expandTrigger="hover"
            options={Object.keys(formatTypes).map((v) => ({
              value: v,
              label: v,
            }))}
            showSearch={{ filter }}
            onChange={onChangeFormatType}
          />
        </Col>
      </Row>
      <br />
      <Row gutter={[12, 12]}>
        <Col xs={24} sm={12}>
          <TextArea
            rows={4}
            autoSize={{ minRows: 3, maxRows: 15 }}
            value={content}
            onChange={onChangeContent}
            allowClear
            status={inputStatus ? "error" : undefined}
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
            onClick={onCopy}
            className="copy"
            readOnly
          />
        </Col>
      </Row>
    </>
  );
}
