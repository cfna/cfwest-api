import beautify from 'json-beautify';

export function prettifyObject(obj?: any): string | undefined {
  try {
    const prettified = beautify(obj, null, 2, 100);
    if (prettified) {
      return prettified;
    }
  } catch (error) {
    // handle error
  }
  return undefined;
}
