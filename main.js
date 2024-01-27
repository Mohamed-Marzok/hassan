let select = document.querySelector("select");
let msgNo = document.querySelector(".msg-no");
let msgYes = document.querySelector(".msg-yes");
select.addEventListener("change", function () {
  if (select.value === "yasmeen") {
    msgNo.style.display = "none";
    msgYes.style.display = "flex";
  } else {
    msgYes.style.display = "none";
    msgNo.style.display = "flex";
    console.log(select.value);
  }
});
