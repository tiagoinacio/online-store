import { PaginationReducer } from '../src/pagination';

describe('PaginationReducer', () => {
    describe('without any previous action', () => {
        it('should return the initial state', () => {
            expect(PaginationReducer(undefined, {})).toEqual(
                {
                    selectedPage: 1
                }
            )
        });
    });

    describe('on NEXT_PAGE action', () => {
        it('should should incremment the selected page', () => {
            expect(PaginationReducer(
                {
                    selectedPage: 7
                },
                {
                    type: 'NEXT_PAGE'
                }
            )).toEqual({
                selectedPage: 8
            });
        });
    });

    describe('on PREVIOUS_PAGE action', () => {
        it('should should incremment the selected page', () => {
            expect(PaginationReducer(
                {
                    selectedPage: 7
                },
                {
                    type: 'PREVIOUS_PAGE'
                }
            )).toEqual({
                selectedPage: 6
            });
        });
    });

    describe('on GO_TO_PAGE action', () => {
        it('should should set the selected page', () => {
            expect(PaginationReducer(
                {
                    selectedPage: 7
                },
                {
                    type: 'GO_TO_PAGE',
                    payload: 12
                }
            )).toEqual({
                selectedPage: 12
            });
        });
    });
});