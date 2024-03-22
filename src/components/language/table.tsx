import { Space, Table } from "antd";
import { ReactElement } from "react";
import CodeBlock from "@theme/CodeBlock";

type Metadata = {
  name: string;
  url: string;
  logo: string;
};

type Code = {
  name: string;
  description: string;
  code: string;
};

type Syntax = {
  examples: Code[];
  comments: Code[];
  namespaces: Code[];
  imports: Code[];
  variables: Code[];
  functions: Code[];
  flowControls: Code[];
  structures: Code[];
  errorHandling: Code[];
  concurrency: Code[];
};

type Data = {
  key: string;
  metadata: Metadata;
  dataTypes: Code[];
  keywords: string[];
  syntax: Syntax;
};

export default ({ data }: { data: Data[] }): ReactElement => {
  return (
    <Table
      size="small"
      className="vertical_top"
      dataSource={data}
      columns={[
        {
          title: "Language",
          dataIndex: "key",
          key: "key",
          width: 90,
          fixed: "left",
          render: (_: string, record: Data) => (
            <Space style={{ width: "100%", justifyContent: "center" }}>
              <a href={record.metadata.url} target="_blank" rel="noreferrer">
                <div className={"code_lang s " + record.key} />
              </a>
            </Space>
          ),
        },
        {
          title: "Example",
          dataIndex: "key",
          key: "key",
          width: 300,
          render: (_: string, record: Data) => (
            <>
              {record.syntax.examples.map((code: Code) => (
                <CodeBlock
                  key={code.name}
                  language={record.metadata.name}
                  title={code.description}
                >
                  {code.code}
                </CodeBlock>
              ))}
            </>
          ),
        },
        {
          title: "Comments",
          dataIndex: "key",
          key: "key",
          width: 300,
          render: (_: string, record: Data) => (
            <>
              {record.syntax.comments.map((code: Code) => (
                <CodeBlock
                  key={code.name}
                  language={record.metadata.name}
                  title={code.description}
                >
                  {code.code}
                </CodeBlock>
              ))}
            </>
          ),
        },
        {
          title: "Data Types",
          dataIndex: "key",
          key: "key",
          width: 300,
          render: (_: string, record: Data) => (
            <>
              {record.dataTypes.map((code: Code) => (
                <CodeBlock
                  key={code.name}
                  language={record.metadata.name}
                  title={code.description}
                >
                  {code.code}
                </CodeBlock>
              ))}
            </>
          ),
        },
        {
          title: "Namespaces",
          dataIndex: "key",
          key: "key",
          width: 300,
          render: (_: string, record: Data) => (
            <>
              {record.syntax.namespaces.map((code: Code) => (
                <CodeBlock
                  key={code.name}
                  language={record.metadata.name}
                  title={code.description}
                >
                  {code.code}
                </CodeBlock>
              ))}
            </>
          ),
        },
        {
          title: "Imports",
          dataIndex: "key",
          key: "key",
          width: 300,
          render: (_: string, record: Data) => (
            <>
              {record.syntax.imports.map((code: Code) => (
                <CodeBlock
                  key={code.name}
                  language={record.metadata.name}
                  title={code.description}
                >
                  {code.code}
                </CodeBlock>
              ))}
            </>
          ),
        },
        {
          title: "Variables",
          dataIndex: "key",
          key: "key",
          width: 300,
          render: (_: string, record: Data) => (
            <>
              {record.syntax.variables.map((code: Code) => (
                <CodeBlock
                  key={code.name}
                  language={record.metadata.name}
                  title={code.description}
                >
                  {code.code}
                </CodeBlock>
              ))}
            </>
          ),
        },
        {
          title: "Functions",
          dataIndex: "key",
          key: "key",
          width: 300,
          render: (_: string, record: Data) => (
            <>
              {record.syntax.functions.map((code: Code) => (
                <CodeBlock
                  key={code.name}
                  language={record.metadata.name}
                  title={code.description}
                >
                  {code.code}
                </CodeBlock>
              ))}
            </>
          ),
        },
        {
          title: "Flow Controls",
          dataIndex: "key",
          key: "key",
          width: 300,
          render: (_: string, record: Data) => (
            <>
              {record.syntax.flowControls.map((code: Code) => (
                <CodeBlock
                  key={code.name}
                  language={record.metadata.name}
                  title={code.description}
                >
                  {code.code}
                </CodeBlock>
              ))}
            </>
          ),
        },
        {
          title: "Structures",
          dataIndex: "key",
          key: "key",
          width: 300,
          render: (_: string, record: Data) => (
            <>
              {record.syntax.structures.map((code: Code) => (
                <CodeBlock
                  key={code.name}
                  language={record.metadata.name}
                  title={code.description}
                >
                  {code.code}
                </CodeBlock>
              ))}
            </>
          ),
        },
        {
          title: "Error Handling",
          dataIndex: "key",
          key: "key",
          width: 300,
          render: (_: string, record: Data) => (
            <>
              {record.syntax.errorHandling.map((code: Code) => (
                <CodeBlock
                  key={code.name}
                  language={record.metadata.name}
                  title={code.description}
                >
                  {code.code}
                </CodeBlock>
              ))}
            </>
          ),
        },
        {
          title: "Concurrency",
          dataIndex: "key",
          key: "key",
          width: 300,
          render: (_: string, record: Data) => (
            <>
              {record.syntax.concurrency.map((code: Code) => (
                <CodeBlock
                  key={code.name}
                  language={record.metadata.name}
                  title={code.description}
                >
                  {code.code}
                </CodeBlock>
              ))}
            </>
          ),
        },
      ]}
      pagination={false}
      scroll={{ x: "max-content" }}
      bordered
      virtual
    />
  );
};
