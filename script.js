function selectItem(anchor) {
  const title = anchor.getAttribute("data-title");
  const price = anchor.getAttribute("data-price");
  const image = anchor.querySelector("img").getAttribute("src");

  const item = { title, price, image };
  localStorage.setItem("selectedItem", JSON.stringify(item));
}
