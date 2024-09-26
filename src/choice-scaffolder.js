export default function (choices, choice, options) {
  const type = choices[choice];

  if (type) return type.scaffold(options);

  return {};
}
