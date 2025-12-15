import { DecoratorFunction } from "storybook/internal/csf";
import 'app/styles/index.scss';
import './LayoutDecorator.scss';

const LayoutDecorator: DecoratorFunction = (Story, context) => {
  document.body.classList.remove('sb-main-padded');

  return (
    <div className={context.parameters.layout || 'default'}>
      <Story />
    </div>
  );
};

export default LayoutDecorator;