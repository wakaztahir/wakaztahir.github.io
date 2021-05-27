const ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    branch: "public",
    repo: "https://github.com/wakaztahir/wakaztahir.github.io.git",
  },
  () => {
    console.log("Github Pages has been deployed !")
  }
)
