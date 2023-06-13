export const loginErrorsHandler = error => {
  switch (error.code) {
    case 'auth/invalid-email':
      return 'Invalid email address format.';

    case 'auth/user-not-found':
      return 'User not found.';

    case 'auth/wrong-password':
      return 'Wrong password entered.';

    default:
      return 'Authentication Failed. Try again later.';
  }
};
