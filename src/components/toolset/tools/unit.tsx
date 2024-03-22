import {
  Cascader,
  CascaderProps,
  Col,
  GetProp,
  InputNumber,
  message,
  Row,
  Space,
  Switch,
  Table,
} from "antd";
import { ReactElement, useState } from "react";
import Measures from "./assets/units.json";

type DefaultOptionType = GetProp<CascaderProps, "options">[number];

type Option = {
  value: string;
  label: string;
  children?: Option[];
  disabled?: boolean;
};

type Measure = {
  measureType: string;
  metric: string;
};

type Unit = {
  key: string;
  name: string;
  value: number;
};

type Data = {
  toggle: boolean;
  measure: Measure;
  metric: string;
  content: number;
  output: Unit[];
  valid: boolean;
};

export default (): ReactElement => {
  const filter = (inputValue: string, path: DefaultOptionType[]) =>
    path.some((option) =>
      (option.label as string).toLowerCase().includes(inputValue.toLowerCase()),
    );

  const fromOptions = (measureType?: string): Option[] | undefined =>
    Measures.find((e: { value: string }) => e.value === measureType)?.children;

  const units: { [key: string]: number } = {
    // Area
    square_km: 1e-6,
    square_m: 1,
    square_mi: Math.pow(2.59, 6),
    square_yd: 0.836127,
    square_ft: 0.092903,
    square_in: 0.00064516,
    hectare: 10000,
    acre: 4046.86,
    // Data Transfer Rate
    bps: 1,
    kbps: 1e-3,
    kBps: 1e-3 * 8,
    kibps: 1024,
    mbps: 1e-6,
    mBps: 1e-6 * 8,
    Mibps: 1048576,
    Gbps: 1e-9,
    GBps: 1e-9 * 8,
    Gibps: 1073741824,
    Tbps: 1e-12,
    TBps: 1e-12 * 8,
    Tibps: 1099511627776,
    // Digital Storage
    bit: 1,
    kilobit: 1e-3,
    kibibit: 1024,
    megabit: 1e-6,
    mebibit: 1048576,
    gigabit: 1e-9,
    gibibit: 1073741824,
    terabit: 1e-12,
    tebibit: 1099511627776,
    petabit: 1e-15,
    pebibit: 1125899906842624,
    byte: 8,
    kilobyte: 1e-3 * 8,
    kibibyte: 1024 * 8,
    megabyte: 1e-6 * 8,
    mebibyte: 1048576 * 8,
    gigabyte: 1e-9 * 8,
    gibibyte: 1073741824 * 8,
    terabyte: 1e-12 * 8,
    tebibyte: 1099511627776 * 8,
    petabyte: 1e-15 * 8,
    // Energy
    joule: 1,
    kilojoule: 1000,
    gram_calorie: 4.184,
    kilocalorie: 4184,
    watt_hour: 3600,
    kilowatt_hour: 3.6 * 1e-6,
    electronvolt: 1.602176634 * 1e-19,
    british_thermal_unit: 1055.06,
    us_therm: 1.05506 * 1e-8,
    foot_pound: 1.35581794833,
    // Frequency
    hertz: 1,
    kilohertz: 1e-3,
    megahertz: 1e-6,
    gigahertz: 1e-9,
    // Fuel Consumption
    mile_per_us_gallon: 1,
    mile_per_gallon: 1.20095,
    kilometer_per_liter: 0.425144,
    // Length
    kilometre: 1000,
    metre: 1,
    centimetre: 0.01,
    millimetre: 0.001,
    micrometre: 1e-6,
    nanometre: 1e-9,
    mile: 1609.34,
    yard: 0.9144,
    foot: 0.3048,
    inch: 0.0254,
    nautical_mile: 1852,
    // Mass
    tonne: 1000,
    kilogram: 1,
    gram: 0.001,
    milligram: 1e-6,
    microgram: 1e-9,
    imperial_ton: 1016.05,
    us_ton: 907.185,
    stone: 6.35029,
    pound: 0.453592,
    ounce: 0.0283495,
    // Plain Angle
    arcsecond: 1 / 3600,
    degree: 1,
    gradian: 1.11111,
    milliradian: 0.0572958,
    minute_of_arc: 1 / 60,
    radian: 0.0174533,
    // Pressure
    bar: 100000,
    pascal: 1,
    pound_per_square_inch: 6894.76,
    standard_atmosphere: 101325,
    torr: 133.322,
    // Speed
    miles_per_hour: 0.44704,
    foot_per_second: 0.3048,
    meter_per_second: 1,
    kilometer_per_hour: 0.277778,
    knot: 0.514444,
    // Time
    nanosecond: 1e-9,
    microsecond: 1e-6,
    millisecond: 1e-3,
    second: 1,
    minute: 60,
    hour: 3600,
    day: 86400,
    week: 604800,
    month: 2628000,
    calendar_year: 31536000,
    decade: 315360000,
    century: 3153600000,
    // Volume
    us_liquid_gallon: 3.78541,
    us_liquid_quart: 0.946353,
    us_liquid_pint: 0.473176,
    us_legal_cup: 0.24,
    us_fluid_ounce: 0.0295735,
    us_tablespoon: 0.0147868,
    us_teaspoon: 0.00492892,
    cubic_meter: 1000,
    liter: 1,
    milliliter: 0.001,
    imperial_gallon: 4.54609,
    imperial_quart: 1.13652,
    imperial_pint: 0.568261,
    imperial_cup: 0.284131,
    imperial_fluid_ounce: 0.0284131,
    imperial_tablespoon: 0.0177582,
    imperial_teaspoon: 0.00591939,
    cubic_foot: 28.3168,
    cubic_inch: 0.0163871,
  };

  const temperature = (value: number, from: string, to: string): number => {
    const temperatureMetric: {
      [key: string]: { [key: string]: (value: number) => number };
    } = {
      celsius: {
        celsius: (value) => value,
        fahrenheit: (value) => value * 1.8 + 32,
        kelvin: (value) => value + 273.15,
      },
      fahrenheit: {
        celsius: (value) => (value - 32) / 1.8,
        fahrenheit: (value) => value,
        kelvin: (value) => (value + 459.67) / 1.8,
      },
      kelvin: {
        celsius: (value) => value - 273.15,
        fahrenheit: (value) => value * 1.8 - 459.67,
        kelvin: (value) => value,
      },
    };

    return temperatureMetric[from][to](value);
  };

  const isTemperature = (value: string): boolean => "temperature" === value;

  const convert = (
    isSingle?: boolean,
    content?: number,
    measure?: Measure,
    metric?: string,
  ): Unit[] => {
    if (
      content === undefined ||
      measure?.measureType === "" ||
      measure?.metric === ""
    )
      return [];

    const metrics = fromOptions(measure?.measureType)!!;

    if (isSingle) {
      if (metric === undefined || metric === "") return [];
      const toUnit = metrics.find((el) => el.value === metric.toString())!!;
      return [
        {
          key: toUnit.value,
          name: toUnit.label,
          value: isTemperature(measure?.measureType ?? "")
            ? temperature(content, measure?.metric!!, metric)
            : (content * units[measure?.metric!!]!!) / units[metric],
        },
      ];
    } else {
      return metrics.map((metric) => ({
        key: metric.value,
        name: metric.label,
        value: isTemperature(measure?.measureType ?? "")
          ? temperature(content, measure?.metric!!, metric.value)
          : (content * units[measure?.metric!!]!!) / units[metric.value],
      }));
    }
  };

  const onToggleChange = (checked: boolean): void => {
    setData({
      ...data,
      toggle: checked,
      output: convert(
        checked,
        data.content,
        data.measure,
        checked ? data.metric : undefined,
      ),
    });
  };

  const onChangeMeasureType = (value: any): void => {
    if (value?.length !== 2) {
      setData({
        ...data,
        measure: { measureType: "", metric: "" },
        metric: "",
        output: [],
      });
      return;
    }

    const measure = { measureType: value[0], metric: value[1] };
    const metric =
      data.measure?.measureType === measure.measureType ? data.metric : "";

    setData({
      ...data,
      measure: measure,
      metric: metric,
      output: convert(data.toggle, data.content, measure, metric),
    });
  };

  const onChangeMetricType = (value: any): void => {
    setData({
      ...data,
      metric: value,
      output: convert(data.toggle, data.content, data.measure, value),
    });
  };

  const onChangeContent = (value: any): void => {
    setData({
      ...data,
      content: value,
      output: convert(data.toggle, value, data.measure, data.metric),
    });
  };

  const onRowSelect = (record: Unit): void => {
    message.success("Copied");
    navigator.clipboard.writeText(record.value.toString());
  };

  const [data, setData] = useState<Data>({
    toggle: true,
    measure: { measureType: "", metric: "" },
    metric: "",
    content: 0,
    output: [],
    valid: true,
  });

  return (
    <Row gutter={[12, 12]}>
      <Col xs={24}>
        <Switch
          checkedChildren="one"
          unCheckedChildren="all"
          value={data.toggle}
          onChange={onToggleChange}
          defaultChecked
        />
      </Col>
      <Col xs={24}>
        <Space.Compact style={{ width: "100%" }}>
          <Cascader
            expandTrigger="hover"
            placeholder="From"
            style={{ flexGrow: 1 }}
            options={Measures}
            showSearch={{ filter }}
            onChange={onChangeMeasureType}
          />
          {data.toggle && (
            <Cascader
              expandTrigger="hover"
              placeholder="To"
              style={{ flexGrow: 1 }}
              value={data.metric as any}
              options={fromOptions(data.measure?.measureType)}
              showSearch={{ filter }}
              onChange={onChangeMetricType}
            />
          )}
        </Space.Compact>
      </Col>
      <Col xs={24}>
        <InputNumber
          min={
            isTemperature(data?.measure?.measureType)
              ? Number.MIN_SAFE_INTEGER
              : 0
          }
          style={{ minWidth: "100px", width: "100%" }}
          value={data.content === 0 ? undefined : data.content}
          status={data.valid ? undefined : "error"}
          onChange={onChangeContent}
        />
      </Col>
      <Col xs={24}>
        <Table
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
      </Col>
    </Row>
  );
};
