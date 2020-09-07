import json from "./yensaodatquang.json";
const spacing = [0, 5, 8, 13, 21, 34, 55];
export const page = json.page;
export const theme = { ...json.theme, spacing: (n) => spacing[n] };
