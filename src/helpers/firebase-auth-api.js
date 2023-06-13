// import {getAuth} from "firebase/auth";
//
// {"ActionCodeOperation":
//     {
//         "EMAIL_SIGNIN": "EMAIL_SIGNIN",
//         "PASSWORD_RESET": "PASSWORD_RESET",
//         "RECOVER_EMAIL": "RECOVER_EMAIL",
//         "REVERT_SECOND_FACTOR_ADDITION": "REVERT_SECOND_FACTOR_ADDITION",
//         "VERIFY_AND_CHANGE_EMAIL": "VERIFY_AND_CHANGE_EMAIL",
//         "VERIFY_EMAIL": "VERIFY_EMAIL"
//     },
//     "ActionCodeURL": "[Function ActionCodeURL]",
//     "AuthCredential": "[Function AuthCredential]",
//     "AuthErrorCodes":
//     {
//         "ADMIN_ONLY_OPERATION": "auth/admin-restricted-operation",
//         "ALREADY_INITIALIZED": "auth/already-initialized",
//         "APP_NOT_AUTHORIZED": "auth/app-not-authorized",
//         "APP_NOT_INSTALLED": "auth/app-not-installed",
//         "ARGUMENT_ERROR": "auth/argument-error",
//         "CAPTCHA_CHECK_FAILED": "auth/captcha-check-failed",
//         "CODE_EXPIRED": "auth/code-expired",
//         "CORDOVA_NOT_READY": "auth/cordova-not-ready",
//         "CORS_UNSUPPORTED": "auth/cors-unsupported",
//         "CREDENTIAL_ALREADY_IN_USE": "auth/credential-already-in-use",
//         "CREDENTIAL_MISMATCH": "auth/custom-token-mismatch",
//         "CREDENTIAL_TOO_OLD_LOGIN_AGAIN": "auth/requires-recent-login",
//         "DEPENDENT_SDK_INIT_BEFORE_AUTH": "auth/dependent-sdk-initialized-before-auth",
//         "DYNAMIC_LINK_NOT_ACTIVATED": "auth/dynamic-link-not-activated",
//         "EMAIL_CHANGE_NEEDS_VERIFICATION": "auth/email-change-needs-verification",
//         "EMAIL_EXISTS": "auth/email-already-in-use",
//         "EMULATOR_CONFIG_FAILED": "auth/emulator-config-failed",
//         "EXPIRED_OOB_CODE": "auth/expired-action-code",
//         "EXPIRED_POPUP_REQUEST": "auth/cancelled-popup-request",
//         "INTERNAL_ERROR": "auth/internal-error",
//         "INVALID_API_KEY": "auth/invalid-api-key",
//         "INVALID_APP_CREDENTIAL": "auth/invalid-app-credential",
//         "INVALID_APP_ID": "auth/invalid-app-id",
//         "INVALID_AUTH": "auth/invalid-user-token",
//         "INVALID_AUTH_EVENT": "auth/invalid-auth-event",
//         "INVALID_CERT_HASH": "auth/invalid-cert-hash",
//         "INVALID_CODE": "auth/invalid-verification-code",
//         "INVALID_CONTINUE_URI": "auth/invalid-continue-uri",
//         "INVALID_CORDOVA_CONFIGURATION": "auth/invalid-cordova-configuration",
//         "INVALID_CUSTOM_TOKEN": "auth/invalid-custom-token",
//         "INVALID_DYNAMIC_LINK_DOMAIN": "auth/invalid-dynamic-link-domain",
//         "INVALID_EMAIL": "auth/invalid-email",
//         "INVALID_EMULATOR_SCHEME": "auth/invalid-emulator-scheme",
//         "INVALID_IDP_RESPONSE": "auth/invalid-credential",
//         "INVALID_MESSAGE_PAYLOAD": "auth/invalid-message-payload",
//         "INVALID_MFA_SESSION": "auth/invalid-multi-factor-session",
//         "INVALID_OAUTH_CLIENT_ID": "auth/invalid-oauth-client-id",
//         "INVALID_OAUTH_PROVIDER": "auth/invalid-oauth-provider",
//         "INVALID_OOB_CODE": "auth/invalid-action-code",
//         "INVALID_ORIGIN": "auth/unauthorized-domain",
//         "INVALID_PASSWORD": "auth/wrong-password",
//         "INVALID_PERSISTENCE": "auth/invalid-persistence-type",
//         "INVALID_PHONE_NUMBER": "auth/invalid-phone-number",
//         "INVALID_PROVIDER_ID": "auth/invalid-provider-id",
//         "INVALID_RECAPTCHA_ACTION": "auth/invalid-recaptcha-action",
//         "INVALID_RECAPTCHA_TOKEN": "auth/invalid-recaptcha-token",
//         "INVALID_RECAPTCHA_VERSION": "auth/invalid-recaptcha-version",
//         "INVALID_RECIPIENT_EMAIL": "auth/invalid-recipient-email",
//         "INVALID_REQ_TYPE": "auth/invalid-req-type",
//         "INVALID_SENDER": "auth/invalid-sender",
//         "INVALID_SESSION_INFO": "auth/invalid-verification-id",
//         "INVALID_TENANT_ID": "auth/invalid-tenant-id",
//         "MFA_INFO_NOT_FOUND": "auth/multi-factor-info-not-found",
//         "MFA_REQUIRED": "auth/multi-factor-auth-required",
//         "MISSING_ANDROID_PACKAGE_NAME": "auth/missing-android-pkg-name",
//         "MISSING_APP_CREDENTIAL": "auth/missing-app-credential",
//         "MISSING_AUTH_DOMAIN": "auth/auth-domain-config-required",
//         "MISSING_CLIENT_TYPE": "auth/missing-client-type",
//         "MISSING_CODE": "auth/missing-verification-code",
//         "MISSING_CONTINUE_URI": "auth/missing-continue-uri",
//         "MISSING_IFRAME_START": "auth/missing-iframe-start",
//         "MISSING_IOS_BUNDLE_ID": "auth/missing-ios-bundle-id",
//         "MISSING_MFA_INFO": "auth/missing-multi-factor-info",
//         "MISSING_MFA_SESSION": "auth/missing-multi-factor-session",
//         "MISSING_OR_INVALID_NONCE": "auth/missing-or-invalid-nonce",
//         "MISSING_PHONE_NUMBER": "auth/missing-phone-number",
//         "MISSING_RECAPTCHA_TOKEN": "auth/missing-recaptcha-token",
//         "MISSING_RECAPTCHA_VERSION": "auth/missing-recaptcha-version",
//         "MISSING_SESSION_INFO": "auth/missing-verification-id",
//         "MODULE_DESTROYED": "auth/app-deleted",
//         "NEED_CONFIRMATION": "auth/account-exists-with-different-credential",
//         "NETWORK_REQUEST_FAILED": "auth/network-request-failed",
//         "NO_AUTH_EVENT": "auth/no-auth-event",
//         "NO_SUCH_PROVIDER": "auth/no-such-provider",
//         "NULL_USER": "auth/null-user", "OPERATION_NOT_ALLOWED": "auth/operation-not-allowed", "OPERATION_NOT_SUPPORTED": "auth/operation-not-supported-in-this-environment", "POPUP_BLOCKED": "auth/popup-blocked", "POPUP_CLOSED_BY_USER": "auth/popup-closed-by-user", "PROVIDER_ALREADY_LINKED": "auth/provider-already-linked", "QUOTA_EXCEEDED": "auth/quota-exceeded", "RECAPTCHA_NOT_ENABLED": "auth/recaptcha-not-enabled", "REDIRECT_CANCELLED_BY_USER": "auth/redirect-cancelled-by-user", "REDIRECT_OPERATION_PENDING": "auth/redirect-operation-pending", "REJECTED_CREDENTIAL": "auth/rejected-credential", "SECOND_FACTOR_ALREADY_ENROLLED": "auth/second-factor-already-in-use", "SECOND_FACTOR_LIMIT_EXCEEDED": "auth/maximum-second-factor-count-exceeded", "TENANT_ID_MISMATCH": "auth/tenant-id-mismatch", "TIMEOUT": "auth/timeout", "TOKEN_EXPIRED": "auth/user-token-expired", "TOO_MANY_ATTEMPTS_TRY_LATER": "auth/too-many-requests", "UNAUTHORIZED_DOMAIN": "auth/unauthorized-continue-uri", "UNSUPPORTED_FIRST_FACTOR": "auth/unsupported-first-factor", "UNSUPPORTED_PERSISTENCE": "auth/unsupported-persistence-type", "UNSUPPORTED_TENANT_OPERATION": "auth/unsupported-tenant-operation", "UNVERIFIED_EMAIL": "auth/unverified-email", "USER_CANCELLED": "auth/user-cancelled", "USER_DELETED": "auth/user-not-found", "USER_DISABLED": "auth/user-disabled", "USER_MISMATCH": "auth/user-mismatch", "USER_SIGNED_OUT": "auth/user-signed-out", "WEAK_PASSWORD": "auth/weak-password", "WEB_STORAGE_UNSUPPORTED": "auth/web-storage-unsupported"},
//     "EmailAuthCredential": "[Function EmailAuthCredential]",
//     "EmailAuthProvider": "[Function EmailAuthProvider]",
//     "FacebookAuthProvider": "[Function FacebookAuthProvider]",
//     "FactorId": {"PHONE": "phone", "TOTP": "totp"},
//     "GithubAuthProvider": "[Function GithubAuthProvider]",
//     "GoogleAuthProvider": "[Function GoogleAuthProvider]",
//     "OAuthCredential": "[Function OAuthCredential]",
//     "OAuthProvider": "[Function OAuthProvider]",
//     "OperationType": {"LINK": "link", "REAUTHENTICATE": "reauthenticate", "SIGN_IN": "signIn"},
//     "PhoneAuthCredential": "[Function PhoneAuthCredential]",
//     "PhoneAuthProvider": "[Function PhoneAuthProvider]",
//     "PhoneMultiFactorGenerator": "[Function PhoneMultiFactorGenerator]",
//     "ProviderId": {"FACEBOOK": "facebook.com", "GITHUB": "github.com", "GOOGLE": "google.com", "PASSWORD": "password", "PHONE": "phone", "TWITTER": "twitter.com"},
//     "SAMLAuthProvider": "[Function SAMLAuthProvider]",
//     "SignInMethod": {"EMAIL_LINK": "emailLink",
//     "EMAIL_PASSWORD": "password", "FACEBOOK": "facebook.com", "GITHUB": "github.com",
//     "GOOGLE": "google.com", "PHONE": "phone", "TWITTER": "twitter.com"},
//     "TwitterAuthProvider": "[Function TwitterAuthProvider]",
//     "applyActionCode": "[Function applyActionCode]",
//     "beforeAuthStateChanged":" [Function beforeAuthStateChanged]",
//     "checkActionCode": "[Function checkActionCode]",
//     "confirmPasswordReset": "[Function confirmPasswordReset]",
//     "connectAuthEmulator": "[Function connectAuthEmulator]",
//     "createUserWithEmailAndPassword": "[Function createUserWithEmailAndPassword]",
//     "debugErrorMap": [Function _debugErrorMap],
//     "deleteUser": [Function deleteUser],
//     "fetchSignInMethodsForEmail": [Function fetchSignInMethodsForEmail],
//     "getAdditionalUserInfo": [Function getAdditionalUserInfo],
//     "getAuth": [Function getAuth],
//     "getIdToken": [Function getIdToken],
//     "getIdTokenResult": [Function getIdTokenResult],
//     "getMultiFactorResolver": [Function getMultiFactorResolver],
//     "getReactNativePersistence": [Function getReactNativePersistence],
//     "inMemoryPersistence": [Function InMemoryPersistence],
//     "initializeAuth": [Function initializeAuth],
//     "initializeRecaptchaConfig": [Function initializeRecaptchaConfig],
//     "isSignInWithEmailLink": [Function isSignInWithEmailLink],
//     "linkWithCredential": [Function linkWithCredential],
//     "linkWithPhoneNumber": [Function linkWithPhoneNumber],
//     "multiFactor": [Function multiFactor],
//     "onAuthStateChanged": [Function onAuthStateChanged],
//     "onIdTokenChanged": [Function onIdTokenChanged],
//     "parseActionCodeURL": [Function parseActionCodeURL],
//     "prodErrorMap": [Function _prodErrorMap],
//     "reactNativeLocalPersistence": [Function class_1],
//     "reauthenticateWithCredential": [Function reauthenticateWithCredential],
//     "reauthenticateWithPhoneNumber": [Function reauthenticateWithPhoneNumber],
//     "reload": [Function reload],
//     "sendEmailVerification": [Function sendEmailVerification],
//     "sendPasswordResetEmail": [Function sendPasswordResetEmail],
//     "sendSignInLinkToEmail": [Function sendSignInLinkToEmail],
//     "setPersistence": [Function setPersistence],
//     "signInAnonymously": [Function signInAnonymously],
//     "signInWithCredential": [Function signInWithCredential],
//     "signInWithCustomToken": [Function signInWithCustomToken],
//     "signInWithEmailAndPassword": [Function signInWithEmailAndPassword],
//     "signInWithEmailLink": [Function signInWithEmailLink],
//     "signInWithPhoneNumber": [Function signInWithPhoneNumber],
//     "signOut": [Function signOut],
//     "unlink": [Function unlink],
//     "updateCurrentUser": [Function updateCurrentUser],
//     "updateEmail": [Function updateEmail],
//     "updatePassword": [Function updatePassword],
//     "updatePhoneNumber": [Function updatePhoneNumber],
//     "updateProfile": [Function updateProfile],
//     "useDeviceLanguage": [Function useDeviceLanguage],
//     "verifyBeforeUpdateEmail": [Function verifyBeforeUpdateEmail],
//     "verifyPasswordResetCode": [Function verifyPasswordResetCode]}