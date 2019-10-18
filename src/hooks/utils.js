/**
 * For when you need a callback but don't want it to do anything
 */
const noop = () => {};

/**
 * For when you need a callback but explicitly need a null value
 */
const getNull = () => null;

/**
 * Renders element based on a Promise's current status
 *
 * @param {Object} state - component's local state with Promise status
 */

const renderAsync = state => match =>
  // prettier-ignore
  state.initial ? match.initial()
    : state.pending ? match.pending()
    : state.error   ? match.error(state.error)
    : state.data    ? match.data(state.data)
    : getNull();

export { noop, getNull, renderAsync };
