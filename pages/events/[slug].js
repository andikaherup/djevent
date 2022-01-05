import { useRouter } from "next/router"
import Layout from "../../components/Layout"
export default function MyEvent() {
    const router = useRouter()
    console.log(router)
    return (
        <Layout>
            <h1>my event with slug</h1>
        </Layout>
    )
}
