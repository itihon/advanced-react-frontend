import { DecoratorFunction } from "storybook/internal/csf";
import './LayoutDecorator.scss';

const LayoutDecorator: DecoratorFunction = (Story, context) => {
  return (
    <div className={context.parameters.layout || 'default'}>
      <Story />
    </div>
  );
};

export default LayoutDecorator;