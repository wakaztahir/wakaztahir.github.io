import MyApp from "../components/commons/MyApp"
import SEO from "../components/commons/SEO"

export default function Notfound() {
    return (
        <MyApp>
            <SEO
                title={"Not Found"}
                description={"Couldn't not find the page you were looking for"}
            />
            <main style={{ margin: "16px" }}>
                <div>
                    <h1>404 Not found</h1>
                    <p>
                        Couldn't find the page you were looking for , Here are the easy links
                        to main pages of this site
                    </p>
                    <a href="/">
                        <button>Home</button>
                    </a>
                    <a href="/posts">
                        <button>Posts</button>
                    </a>
                </div>
            </main>
        </MyApp>
    )
}
