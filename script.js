function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // egar a tag img
  const img = document.querySelector("profile img")

  //substituir a imagem
  if (html.classList.add.contains("light")) {
    // se tiver light mode, adicionar a imagem
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    text.setAtribute("alt", "Ardalto observando fixamente para frente")
  } else {
    img.setAtribute("ssrc", "./assets/assets/Avatar.png")
  }
}
