import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button Component test', () => {
    it('Test render', () => {
        render(<Button theme={ButtonTheme.RED}>Text</Button>);
        expect(screen.getByText('Text')).toBeInTheDocument();
    });
    it('test button class', () => {
        render(<Button theme={ButtonTheme.RED}>Text</Button>);
        expect(screen.getByText('Text')).toHaveClass('red');
        screen.debug();
    });
});
