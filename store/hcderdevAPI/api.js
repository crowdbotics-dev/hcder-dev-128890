import axios from "axios"
const hcderdevAPI = axios.create({
  baseURL: "https://hcder-dev-128890.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return hcderdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return hcderdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return hcderdevAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_xcvsb_list(payload) {
  return hcderdevAPI.get(`/api/v1/xcvsb/`)
}
function api_v1_xcvsb_create(payload) {
  return hcderdevAPI.post(`/api/v1/xcvsb/`, payload)
}
function api_v1_xcvsb_retrieve(payload) {
  return hcderdevAPI.get(`/api/v1/xcvsb/${payload.id}/`)
}
function api_v1_xcvsb_update(payload) {
  return hcderdevAPI.put(`/api/v1/xcvsb/${payload.id}/`, payload)
}
function api_v1_xcvsb_partial_update(payload) {
  return hcderdevAPI.patch(`/api/v1/xcvsb/${payload.id}/`, payload)
}
function api_v1_xcvsb_destroy(payload) {
  return hcderdevAPI.delete(`/api/v1/xcvsb/${payload.id}/`)
}
function modules_two_factor_authentication_enable_2fa_retrieve(payload) {
  return hcderdevAPI.get(`/modules/two-factor-authentication/enable/2fa`)
}
function modules_two_factor_authentication_enable_2fa_create(payload) {
  return hcderdevAPI.post(`/modules/two-factor-authentication/enable/2fa`)
}
function modules_two_factor_authentication_enable_2fa_destroy(payload) {
  return hcderdevAPI.delete(`/modules/two-factor-authentication/enable/2fa`)
}
function modules_two_factor_authentication_google_authenticator_qr_retrieve(
  payload
) {
  return hcderdevAPI.get(
    `/modules/two-factor-authentication/google/authenticator/qr`
  )
}
function modules_two_factor_authentication_send_otp_create(payload) {
  return hcderdevAPI.post(`/modules/two-factor-authentication/send/otp`)
}
function modules_two_factor_authentication_verify_otp_create(payload) {
  return hcderdevAPI.post(`/modules/two-factor-authentication/verify/otp`)
}
function modules_two_factor_authentication_verify_otp_create_2(payload) {
  return hcderdevAPI.post(
    `/modules/two-factor-authentication/verify/otp/${payload.enable}`
  )
}
function rest_auth_login_create(payload) {
  return hcderdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return hcderdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return hcderdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return hcderdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return hcderdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return hcderdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return hcderdevAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return hcderdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return hcderdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return hcderdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return hcderdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_xcvsb_list,
  api_v1_xcvsb_create,
  api_v1_xcvsb_retrieve,
  api_v1_xcvsb_update,
  api_v1_xcvsb_partial_update,
  api_v1_xcvsb_destroy,
  modules_two_factor_authentication_enable_2fa_retrieve,
  modules_two_factor_authentication_enable_2fa_create,
  modules_two_factor_authentication_enable_2fa_destroy,
  modules_two_factor_authentication_google_authenticator_qr_retrieve,
  modules_two_factor_authentication_send_otp_create,
  modules_two_factor_authentication_verify_otp_create,
  modules_two_factor_authentication_verify_otp_create_2,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
