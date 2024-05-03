chrome.runtime.sendMessage({ action: "makeTransparent" });

document.addEventListener("click", (event) => {
  const clientX = event.clientX;
  const clientY = event.clientY;

  //   border width 설정 1300
  const borderWidth = 10; // 테두리의 너비를 픽셀 단위로 지정

  if (
    clientX < borderWidth ||
    clientX > window.innerWidth - borderWidth ||
    clientY < borderWidth ||
    clientY > window.innerHeight - borderWidth
  ) {
    event.stopPropagation();
    event.preventDefault();
  }
});
