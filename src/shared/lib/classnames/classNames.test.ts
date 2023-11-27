import { classNames } from './classNames';

describe('classNames', () => {
    it('with only one param', () => {
        const expected = 'someClass';
        expect(classNames('someClass')).toBe(expected);
    });
    it('with additionals', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
            expected,
        );
    });
    it('with mods', () => {
        const expected = 'someClass hovered selected';
        expect(classNames('someClass', { hovered: true, selected: true })).toBe(
            expected,
        );
    });
    it('with mods2', () => {
        const expected = 'someClass hovered';
        expect(
            classNames('someClass', { hovered: true, selected: undefined }),
        ).toBe(expected);
    });
    it('with mods and additionals', () => {
        const expected = 'someClass class1 class2 hovered selected';
        expect(
            classNames('someClass', { hovered: true, selected: true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });
});
