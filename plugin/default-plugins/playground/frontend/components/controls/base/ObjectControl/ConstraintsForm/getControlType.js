import has from 'lodash/has';

const getControlType = (constraints, parsedMetadata, propKey) => {
  // expects either a custom control type or a parsed type name
  if (has(constraints, ['props', propKey, 'controlType'])) {
    return constraints.props[propKey].controlType;
  }

  // no need to check if it exists since the propKey must be in one of both
  return parsedMetadata.value[propKey].name;
};

export default getControlType;
