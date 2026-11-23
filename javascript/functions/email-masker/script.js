function maskEmail(email) {
  const pivot = email.indexOf("@");
  const username = email.slice(0, pivot);
  const domain = email.slice(pivot);
  
  if (username.length <= 2) {
    return "*".repeat(username.length) + domain;
  }

  return username[0] + "*".repeat(username.length - 2) + username[username.length - 1] + domain;
}

let email = "youcantseethis@gmail.com";

console.log(maskEmail(email));