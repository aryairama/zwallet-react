export { default as InputTextIcon } from './Input/InputTextIcon';
export { default as InputPasswordIcon } from './Input/InputPasswordIcon';
export { default as Button } from './Button/Button';
export { default as PinContainer } from './Pin/PinContainer';
export { default as PinInput } from './Pin/PinInput';
export { default as InputCheck } from './Input/InputCheck';
export const buttonItemRender = (current, type, element) => {
  if (type === 'prev') {
    return <button type="button" className="btn btn-sm btn-outline-orange" title="prev"></button>;
  }
  if (type === 'next') {
    return <button type="button" className="btn btn-sm btn-outline-orange" title="next"></button>;
  }
  return element;
};
