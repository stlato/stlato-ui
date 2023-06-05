type Str =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";
type Num = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export const convertToNumRecord = (
  colorSchema: Record<Str, string>
): Record<Num, string> => {
  const keys = Object.keys(colorSchema) as Str[];
  const converted = keys.reduce((prev, current) => {
    const key = parseInt(current, 10);

    return { ...prev, [key]: colorSchema[current] };
  }, {});

  return converted as Record<Num, string>;
};
