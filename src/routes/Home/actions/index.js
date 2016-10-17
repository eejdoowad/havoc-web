// ------------------------------------
// Constants
// ------------------------------------
export const CHANGE_VIEW = 'CHANGE_VIEW'

// ------------------------------------
// Actions
// ------------------------------------
export const changeView = (view) => {
  return {
    type: CHANGE_VIEW,
    view
  }
}
