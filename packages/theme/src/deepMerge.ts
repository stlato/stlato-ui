/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Inspired by @mui/utils
 *
 * Copyright (c) 2014 The MIT License (MIT)
 * Released under the MIT license
 * https://github.com/mui/material-ui/blob/master/LICENSE
 */
const isPlainObject = (item: unknown): item is Record<keyof any, unknown> => {
  return item !== null && typeof item === 'object' && item.constructor === Object;
};

interface DeepMergeOptions {
  clone?: boolean;
}

const deepClone = <T>(source: T): T | Record<keyof any, unknown> => {
  if (!isPlainObject(source)) {
    return source;
  }

  const output: Record<keyof any, unknown> = {};

  Object.keys(source).forEach((key) => {
    output[key] = deepClone(source[key]);
  });

  return output;
};

export const deepMerge = <T extends Record<string, any>>(
  target: T,
  source: unknown,
  options: DeepMergeOptions = { clone: true }
): T => {
  const hasOption = options?.clone ?? false;
  const output = hasOption ? { ...target } : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      if (key === '__proto__') {
        return;
      }

      if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
        (output as Record<keyof any, unknown>)[key] = deepMerge(target[key], source[key], options);
      } else if (options.clone !== undefined) {
        (output as Record<keyof any, unknown>)[key] = isPlainObject(source[key])
          ? deepClone(source[key])
          : source[key];
      } else {
        (output as Record<keyof any, unknown>)[key] = source[key];
      }
    });
  }

  return output;
};
