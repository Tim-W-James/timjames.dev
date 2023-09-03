type ConditionalWrapperProps = {
  /**
   * Inner component to be wrapped.
   */
  children: React.ReactElement;
  /**
   * Condition to be met for the wrapper to be applied.
   */
  condition: boolean;
  /**
   * Wrapper component to be rendered depending on the condition.
   */
  wrapper: (children: React.ReactElement) => JSX.Element;
};

/**
 * Conditionally wraps children in a wrapper component.
 *
 * @example
 * <ConditionalWrapper
 *  condition={condition}
 *  wrapper={(children) => <Wrapper>{children}</Wrapper>}
 * >
 *  <Children />
 * </ConditionalWrapper>
 */
export const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({
  condition,
  wrapper,
  children,
}) => (condition ? wrapper(children) : children);
