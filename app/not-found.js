import style from "./page.module.scss"
import Link from "next/link";

const NotFound = () => {
    return (
        <div class="container-fluid d-flex flex-column justify-content-center align-items-center min-vh-100">
            <h1 class="display-4">404 Not Found</h1>
            <p class="lead">The page you're looking for does not exist.</p>
            <Link href="/" class="btn btn-primary">Go Back to Homepage</Link>
        </div>
    );
}

export default NotFound;