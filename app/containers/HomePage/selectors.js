import { createSelector } from 'reselect';

/**
 * Direct selector to the homepage state domain
 */
const selectHomePageDomain = (state) => state.get('homepage');

/**
 * Other specific selectors
 */

const makeSelectHomePage = () => createSelector(
   selectHomePageDomain,
   (substate) => substate.toJS()
 );

const makeSelectActivePage = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.get('activePage')
);

export default makeSelectHomePage;
export {
  selectHomePageDomain,
  makeSelectActivePage,
};
