import { ReactElement } from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
import { List } from "antd";

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
  bitwiseOperators: Code[];
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
  reservedKeywords: string[];
  syntax: Syntax;
};

export default ({ data }: { data: Data[] }): ReactElement => {
  return (
    <>
      <Tabs>
        {data.map((content: Data) => (
          <TabItem
            key={content.key}
            value={content.key}
            label=""
            attributes={{
              title: "Go Lang",
              className: "code_lang m " + content.key,
            }}
          >
            <Tabs queryString="type">
              <TabItem value="Syntax" label="Syntax">
                <Tabs queryString="syntax">
                  <TabItem
                    value="Examples"
                    label="Examples"
                    attributes={{ className: "tabs__vertical" }}
                  >
                    {content.syntax?.examples?.map((code: Code) => (
                      <CodeBlock
                        key={code.name}
                        language={content.key}
                        title={code.description}
                      >
                        {code.code}
                      </CodeBlock>
                    ))}
                  </TabItem>
                  <TabItem value="Comments" label="Comments">
                    {content.syntax?.comments?.map((code: Code) => (
                      <CodeBlock
                        key={code.name}
                        language={content.key}
                        title={code.description}
                      >
                        {code.code}
                      </CodeBlock>
                    ))}
                  </TabItem>
                  <TabItem value="Namespaces" label="Namespaces">
                    {content.syntax?.namespaces?.map((code: Code) => (
                      <CodeBlock
                        key={code.name}
                        language={content.key}
                        title={code.description}
                      >
                        {code.code}
                      </CodeBlock>
                    ))}
                  </TabItem>
                  <TabItem value="Imports" label="Imports">
                    {content.syntax?.imports?.map((code: Code) => (
                      <CodeBlock
                        key={code.name}
                        language={content.key}
                        title={code.description}
                      >
                        {code.code}
                      </CodeBlock>
                    ))}
                  </TabItem>
                  <TabItem value="Variables" label="Variables">
                    {content.syntax?.variables?.map((code: Code) => (
                      <CodeBlock
                        key={code.name}
                        language={content.key}
                        title={code.description}
                      >
                        {code.code}
                      </CodeBlock>
                    ))}
                  </TabItem>
                  <TabItem value="bitwiseOperators" label="Bitwise Operators">
                    {content.syntax?.bitwiseOperators?.map((code: Code) => (
                      <CodeBlock
                        key={code.name}
                        language={content.key}
                        title={code.description}
                      >
                        {code.code}
                      </CodeBlock>
                    ))}
                  </TabItem>
                  <TabItem value="Functions" label="Functions">
                    {content.syntax?.functions?.map((code: Code) => (
                      <CodeBlock
                        key={code.name}
                        language={content.key}
                        title={code.description}
                      >
                        {code.code}
                      </CodeBlock>
                    ))}
                  </TabItem>
                  <TabItem value="Flow Controls" label="Flow Controls">
                    {content.syntax?.flowControls?.map((code: Code) => (
                      <CodeBlock
                        key={code.name}
                        language={content.key}
                        title={code.description}
                      >
                        {code.code}
                      </CodeBlock>
                    ))}
                  </TabItem>
                  <TabItem value="Structures" label="Structures">
                    {content.syntax?.structures?.map((code: Code) => (
                      <CodeBlock
                        key={code.name}
                        language={content.key}
                        title={code.description}
                      >
                        {code.code}
                      </CodeBlock>
                    ))}
                  </TabItem>
                  <TabItem value="Error Handling" label="Error Handling">
                    {content.syntax?.errorHandling?.map((code: Code) => (
                      <CodeBlock
                        key={code.name}
                        language={content.key}
                        title={code.description}
                      >
                        {code.code}
                      </CodeBlock>
                    ))}
                  </TabItem>
                  <TabItem value="Concurrency" label="Concurrency">
                    {content.syntax?.concurrency?.map((code: Code) => (
                      <CodeBlock
                        key={code.name}
                        language={content.key}
                        title={code.description}
                      >
                        {code.code}
                      </CodeBlock>
                    ))}
                  </TabItem>
                </Tabs>
              </TabItem>
              <TabItem value="Data Types" label="Data Types">
                {content?.dataTypes?.map((code: Code) => (
                  <CodeBlock
                    key={code.name}
                    language={content.key}
                    title={`${code.name} - ${code.description}`}
                  >
                    {code.code}
                  </CodeBlock>
                ))}
              </TabItem>
              <TabItem value="Keywords" label="Reserved Keywords">
                <List
                  size="small"
                  bordered
                  dataSource={content.reservedKeywords || []}
                  renderItem={(item: string) => <List.Item>{item}</List.Item>}
                />
              </TabItem>
            </Tabs>
          </TabItem>
        ))}
      </Tabs>
    </>
  );
};
