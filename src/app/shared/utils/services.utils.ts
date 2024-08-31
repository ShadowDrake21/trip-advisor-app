import { HttpParams } from '@angular/common/http';

export const formParamsEntity = (
  params: HttpParams,
  options: Record<string, any>
): HttpParams => {
  Object.keys(options).forEach((key: string) => {
    const value = options[key];
    console.log('value', value);
    if (value !== undefined) {
      params = params.set(key, value);
    }
  });
  return params;
};
