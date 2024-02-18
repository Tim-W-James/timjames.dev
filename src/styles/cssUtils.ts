// Adapted from: https://kimmo.blog/posts/6-advanced-typescript-the-ultimate-tailwind-typings

import clsx from "clsx";

import ClassName from "./cssClasses";

// eslint-disable-next-line jsdoc/require-param
/**
 * Wrapper for 'classnames' module with strict typing.
 */
const cn = <S1, S2, S3, S4, S5, S6, S7, S8, S9, S10>(
  // Multiple type parameters are so that TS is able to inference each parameter
  // individually
  c1?: TailwindClassParameterValue<S1, null>,
  c2?: TailwindClassParameterValue<S2, null>,
  c3?: TailwindClassParameterValue<S3, null>,
  c4?: TailwindClassParameterValue<S4, null>,
  c5?: TailwindClassParameterValue<S5, null>,
  c6?: TailwindClassParameterValue<S6, null>,
  c7?: TailwindClassParameterValue<S7, null>,
  c8?: TailwindClassParameterValue<S8, null>,
  c9?: TailwindClassParameterValue<S9, null>,
  c10?: TailwindClassParameterValue<S10, null>
): string => clsx(c1, c2, c3, c4, c5, c6, c7, c8, c9, c10);

/**
 * Type checking for Tailwind Classes and infers scoped class names from a
 * record of strings. Is curried to allow the params to be inferred
 *
 * @param scopedClassNames - auto generated record of all scoped classes
 */
export const cnScoped = (scopedClassNames: Record<string, string>) => {
  type ScopedClassNames =
    (typeof scopedClassNames)[keyof typeof scopedClassNames];
  return <S1, S2, S3, S4, S5, S6, S7, S8, S9, S10>(
    c1?: TailwindClassParameterValue<S1, ScopedClassNames>,
    c2?: TailwindClassParameterValue<S2, ScopedClassNames>,
    c3?: TailwindClassParameterValue<S3, ScopedClassNames>,
    c4?: TailwindClassParameterValue<S4, ScopedClassNames>,
    c5?: TailwindClassParameterValue<S5, ScopedClassNames>,
    c6?: TailwindClassParameterValue<S6, ScopedClassNames>,
    c7?: TailwindClassParameterValue<S7, ScopedClassNames>,
    c8?: TailwindClassParameterValue<S8, ScopedClassNames>,
    c9?: TailwindClassParameterValue<S9, ScopedClassNames>,
    c10?: TailwindClassParameterValue<S10, ScopedClassNames>
  ): string => clsx(c1, c2, c3, c4, c5, c6, c7, c8, c9, c10);
};

/**
 * Type checking for Tailwind Classes and allows an explicit type for scoped
 * class names to be specified. Is curried to allow the params to be inferred
 */
export const cnScopedUnion =
  <ScopedClassNames>() =>
  <S1, S2, S3, S4, S5, S6, S7, S8, S9, S10>(
    c1?: TailwindClassParameterValue<S1, ScopedClassNames>,
    c2?: TailwindClassParameterValue<S2, ScopedClassNames>,
    c3?: TailwindClassParameterValue<S3, ScopedClassNames>,
    c4?: TailwindClassParameterValue<S4, ScopedClassNames>,
    c5?: TailwindClassParameterValue<S5, ScopedClassNames>,
    c6?: TailwindClassParameterValue<S6, ScopedClassNames>,
    c7?: TailwindClassParameterValue<S7, ScopedClassNames>,
    c8?: TailwindClassParameterValue<S8, ScopedClassNames>,
    c9?: TailwindClassParameterValue<S9, ScopedClassNames>,
    c10?: TailwindClassParameterValue<S10, ScopedClassNames>
  ): string =>
    clsx(c1, c2, c3, c4, c5, c6, c7, c8, c9, c10);

type InstantiationDepthReducingWhitespace = "   " | "  " | " " | "\n";

type TrimStart<T extends string> =
  T extends `${InstantiationDepthReducingWhitespace}${infer Tail}`
    ? TrimStart<Tail>
    : T;

type TrimEnd<T extends string> =
  T extends `${infer Prefix}${InstantiationDepthReducingWhitespace}`
    ? TrimEnd<Prefix>
    : T;

type Trim<T extends string> = TrimEnd<TrimStart<T>>;

type Err<Message extends string> = `Error: ${Message}`;

type SplitToTailwindClassNames<T extends string> =
  SplitToTailwindClassNamesInner<Trim<T>>;

type ScopedClassNamePrefix = "_";

// Narrow the type to exclude scoped classes
type IsValidClass<
  T extends string,
  ScopedClassNames,
> = T extends `${ScopedClassNamePrefix}${infer _Tail}`
  ? T extends ScopedClassNames
    ? ScopedClassNames extends string
      ? T
      : Err<`'${T}' is scoped, and no ScopedClassNames type is specified`>
    : Err<`'${T}' is scoped, and is not included in the ScopedClassNames type`>
  : // Make sure each item is a valid `ClassName`
    SplitToTailwindClassNames<T> extends ClassName[]
    ? // If valid, success and return `T`
      T
    : // Cover an edge case where, e.g., flex-col is invalid because the
      // flex class exists
      T extends ClassName
      ? T
      : // If still invalid, raise an error
        GetFirstError<SplitToTailwindClassNames<T>>;

type SplitToTailwindClassNamesInner<T extends string> =
  T extends `${ClassName}${infer Tail}`
    ? T extends `${infer C}${Tail}`
      ? [C, ...SplitToTailwindClassNames<Trim<Tail>>]
      : [Err<"Should not happen">]
    : // Handles cases where `T` does not match
      // ${ClassName}${Tail}. For example
      // 'block', '', '\n\n', 'invalid', or 'invalid  block'
      // Note: `Tail` has already been trimmed from whitespace
      T extends `${infer Tail}`
      ? Tail extends ClassName
        ? // `Tail` equals a valid Tailwind class.
          // End recursion successfully.
          [Tail]
        : Trim<Tail> extends ""
          ? // `Tail` has only whitespace left.
            // End recursion successfully.
            []
          : // Something else was found.
            // Raise an error
            [Err<`'${Tail}' is not a valid Tailwind or scoped class`>]
      : // Should never happen as `T` is a string.
        [Err<"Should not happen">];

// Gets the first string of an array that starts with 'Error: '
// Must be used only when `T` actually includes an error item
type GetFirstError<T extends unknown[]> = T extends [infer Head, ...infer Tail]
  ? Head extends `Error: ${infer _Message}`
    ? // Match found, return
      Head
    : // Continue searching for an error string
      GetFirstError<Tail>
  : never;

type IsValidString<T extends string, ScopedClassNames> = string extends T
  ? Err<"Unexpected generic string">
  : IsValidClass<T, ScopedClassNames>;

// The object format for 'classnames' module
type ClassNamesObject = Record<string, boolean>;

// See https://stackoverflow.com/questions/65737948/how-to-type-check-if-object-keys-conform-a-conditional-recursive-template-type
type TailwindClassNamesObject<T extends ClassNamesObject, ScopedClassNames> = {
  // `& string` explained at https://github.com/microsoft/TypeScript/pull/40336#issuecomment-717319022
  [K in keyof T & string]: K extends IsValidString<K, ScopedClassNames>
    ? T[K]
    : // If invalid class found, return the error
      IsValidString<K, ScopedClassNames>;
};

type TailwindClassNamesArray<T, ScopedClassNames> = {
  [K in keyof T]: K extends IsValidString<T[K] & string, ScopedClassNames>
    ? T[K]
    : // If invalid class found, return the error
      IsValidString<T[K] & string, ScopedClassNames>;
};

// Parameter can be a string, array or object format
type TailwindClassParameterValue<S, ScopedClassNames> = S extends string
  ? IsValidString<S, ScopedClassNames>
  : // eslint-disable-next-line @typescript-eslint/no-explicit-any
    S extends any[]
    ? TailwindClassNamesArray<S, ScopedClassNames>
    : S extends ClassNamesObject
      ? TailwindClassNamesObject<S, ScopedClassNames>
      : // Format not supported
        never;

export default cn;
