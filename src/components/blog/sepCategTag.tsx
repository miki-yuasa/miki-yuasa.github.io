export function sepCategTag(categTag: string) {
  const strArray: string[] = categTag.split("/");
  const category: string = strArray[0];
  const tag: string = strArray.slice(-1)[0];

  return { category, tag };
}
