// Adapted from: https://kimmo.blog/posts/6-advanced-typescript-the-ultimate-tailwind-typings

import classnames from "classnames";
import ClassName from "./cssClasses";

// Wrapper for 'classnames' module with strict typing.
// We need to curry to allow an explicit type for scoped class names but still
// have inferred params
const cn =
  <ScopedClassNames>() =>
  // Multiple type parameters are so that TS is able to inference each parameter
  // individually
  <S1, S2, S3, S4, S5>(
    c1?: TailwindClassParameterValue<S1, ScopedClassNames>,
    c2?: TailwindClassParameterValue<S2, ScopedClassNames>,
    c3?: TailwindClassParameterValue<S3, ScopedClassNames>,
    c4?: TailwindClassParameterValue<S4, ScopedClassNames>,
    c5?: TailwindClassParameterValue<S5, ScopedClassNames>
  ): string =>
    classnames(c1, c2, c3, c4, c5);

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
  ScopedClassNames
> = T extends `${ScopedClassNamePrefix}${infer _Tail}`
  ? T extends ScopedClassNames
    ? ScopedClassNames extends string
      ? T
      : Err<`'${T}' is scoped, and no ScopedClassNames type is specified`>
    : Err<`'${T}' is scoped, and is not included in the ScopedClassNames type`>
  : // Make sure each item is a valid `ClassName`
  SplitToTailwindClassNames<T> extends ClassName[]
  ? // If yes, success and return `T`
    T
  : // If no, raise an error
    GetFirstError<SplitToTailwindClassNames<T>>;

type SplitToTailwindClassNamesInner<T extends string> =
  T extends `${ClassName}${infer Tail}`
    ? T extends `${infer C}${Tail}`
      ? [C, ...SplitToTailwindClassNames<Trim<Tail>>]
      : Err<"Should not happen">
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
type ClassNamesObject = { [key: string]: boolean };

// See https://stackoverflow.com/questions/65737948/how-to-type-check-if-object-keys-conform-a-conditional-recursive-template-type
export type TailwindClassNamesObject<
  T extends ClassNamesObject,
  ScopedClassNames
> = {
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
export type TailwindClassParameterValue<S, ScopedClassNames> = S extends string
  ? IsValidString<S, ScopedClassNames>
  : // eslint-disable-next-line @typescript-eslint/no-explicit-any
  S extends any[]
  ? TailwindClassNamesArray<S, ScopedClassNames>
  : S extends ClassNamesObject
  ? TailwindClassNamesObject<S, ScopedClassNames>
  : // Format not supported
    never;

export default cn;
