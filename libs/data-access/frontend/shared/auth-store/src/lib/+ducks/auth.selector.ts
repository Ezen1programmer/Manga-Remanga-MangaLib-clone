import { createSelector } from '@reduxjs/toolkit';
import { IAuthState } from '../interfaces/auth-state.interface';
import { IAuthFeatureState } from '../interfaces/auth-feature-state.interface';


const authFeatureSelector = (state: IAuthFeatureState) => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (auth: IAuthState): boolean => auth?.isSubmitting
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (auth: IAuthState): boolean | null => auth?.isLoggedIn
);

export const validationErrorsInSelector = createSelector(
  authFeatureSelector,
  (auth: IAuthState): string | null => auth?.validationErrors
);
