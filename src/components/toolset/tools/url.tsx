import { Col, message, Row, Switch, Table } from "antd";
import { ReactElement, useState } from "react";
import TextArea from "antd/es/input/TextArea";

type Output = {
  key: string;
  name: string;
  value: string;
};

type Data = {
  toggle: boolean;
  content: string;
  output: Output[];
  valid: boolean;
};

export default (): ReactElement => {
  const [data, setData] = useState<Data>({
    toggle: true,
    content: "",
    output: [],
    valid: true,
  });

  const onRowSelect = (record: Output): void => {
    message.success("Copied");
    navigator.clipboard.writeText(record.value.toString());
  };

  const convert = (toggle: boolean, content: string): Output[] => {
    try {
      setData({ ...data, valid: true });
      const uri = new URL(content);
      const parts = [
        {
          key: "protocol",
          name: "Protocol",
          value: uri.protocol.replace(/:$/, ""),
        },
        {
          key: "origin",
          name: "Origin",
          value: uri.origin,
        },
        {
          key: "hostname",
          name: "Hostname",
          value: uri.hostname,
        },
        {
          key: "port",
          name: "Port",
          value: uri.port,
        },
        {
          key: "pathname",
          name: "Pathname",
          value: uri.pathname,
        },
        {
          key: "search",
          name: "Search",
          value: uri.search.replace(/^\?/, ""),
        },
        {
          key: "searchParams",
          name: "Search Params",
          value: Array.from(uri.searchParams.entries())
            .map((el) => `${el[0]}=${el[1]}`)
            .join("\n"),
        },
        {
          key: "hash",
          name: "Hash",
          value: uri.hash.replace(/^#/, ""),
        },
      ].filter((el) => el.value !== "");

      if (toggle) {
        return [
          {
            key: "Decoded URL",
            name: "Decoded URL",
            value: decodeURIComponent(content.replace(/\+/g, " ")),
          },
          ...parts,
        ];
      } else {
        return [
          {
            key: "Encoded URL",
            name: "Encoded URL",
            value: encodeURIComponent(content),
          },
          ...parts,
        ];
      }
    } catch (error) {
      setData({ ...data, valid: false });
      return [];
    }
  };

  const onToggleChange = (checked: boolean): void => {
    setData({
      ...data,
      toggle: checked,
      output: convert(checked, data.content),
    });
  };

  const onChangeContent = ({ target: { value } }: any): void => {
    setData({ ...data, content: value, output: convert(data.toggle, value) });
  };

  return (
    <Row gutter={[12, 12]}>
      <Col xs={24}>
        <Switch
          checkedChildren="decode"
          unCheckedChildren="encode"
          value={data.toggle}
          onChange={onToggleChange}
          defaultChecked
        />
      </Col>
      <Col xs={24}>
        <TextArea
          rows={4}
          autoSize={{ minRows: 3, maxRows: 15 }}
          value={data.content}
          onChange={onChangeContent}
          allowClear
          status={data.valid ? undefined : "error"}
        />
      </Col>
      <Col xs={24}>
        {data?.output?.length > 0 && (
          <Table
            style={{ whiteSpace: "pre" }}
            size="small"
            dataSource={data.output}
            columns={[
              {
                dataIndex: "name",
              },
              {
                dataIndex: "value",
              },
            ]}
            showHeader={false}
            pagination={false}
            scroll={{ y: 240 }}
            virtual
            onRow={(record) => ({
              onClick: () => onRowSelect(record),
            })}
          />
        )}
      </Col>
    </Row>
  );
};
