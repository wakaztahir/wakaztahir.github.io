const ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/wakaztahir/wakaztahir.github.io.git",
  },
  () => {
    console.log("Github Pages has been deployed !")
  }
)
