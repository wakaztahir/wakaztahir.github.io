public func main(argc : int, argv : **char) : int {

    // creating the base directory
    var path = std::string()
    if(argc < 2) {
        // lets use build dir instead
        const build_dir = intrinsics::get_build_dir();
        path.append_char_ptr(build_dir)
        path.append_char_ptr("/output")
        printf("outputting in the default directory at %s\n", path.data());
    } else {
        path.append_char_ptr(argv[1])
    }

    // TODO only make if not already exists
    printf("creating output directory\n");
    fs::mkdir(path.data());

    printf("creating page\n");

    var page = HtmlPage()
    MainPage(page)

    printf("writing to output directory\n");

    page.writeToDirectory(std::string_view(path.data(), path.size()), "index")

    const srcAssetsDir = std::string(intrinsics::get_module_dir())
    srcAssetsDir.append_char_ptr("/../assets")
    printf("the src assets directory is %s\n", srcAssetsDir.data());

    var outAssetsDir = std::string(intrinsics::get_build_dir());
    outAssetsDir.append_char_ptr("/output/assets")
    printf("the out assets directory is %s\n", outAssetsDir.data());

    printf("copying assets\n");
    fs::copy_directory(srcAssetsDir.data(), outAssetsDir.data(), fs::CopyOptions.Recursive)

    printf("complete page written to %s\n", path.data());

    return 0;
}