/**
 * Created by zhentianwan on 29/10/2016.
 */

export function confirmPasswords(passwords, confirm) {
  const valid = passwords.password&& passwords.password === confirm.value;
  return valid ? null : {
    confirmPassword: {
      valid: false,
      message: "Two passwrods are not the same"
    }
  };
}
