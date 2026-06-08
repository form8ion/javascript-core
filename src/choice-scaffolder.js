export default function scaffoldChoice(choices, choice, options) {
  const type = choices[choice];

  if (type) return type.scaffold(options);

  return {};
}
