export function isLogin() {
     let item = localStorage.getItem("isLogin");
     return item !== null ? item : null;
};
export function login(keys: string) {
     localStorage.setItem("isLogin", keys);
}
export function logout(keys: string) {
     localStorage.removeItem("isLogin");
}

