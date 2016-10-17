// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_FIELD = 'UPDATE_FIELD'

// ------------------------------------
// Actions
// ------------------------------------
export const updateField = (key, value) => {
  return {
    type: UPDATE_FIELD,
    key,
    value
  }
}
