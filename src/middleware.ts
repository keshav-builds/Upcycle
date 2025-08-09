import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublicPath = ["/login", "/register", "/verify-register", "/forgot-password", "/verify-forget-password"].includes(path);
    const token = request.cookies.get("token")?.value || "";

    // If the path is public or the user is authenticated, allow access
    if (isPublicPath || token) {
        return NextResponse.next();
    } else {
        // Redirect to the login page if the path is private and the user is not authenticated
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
}

export const config = {
    matcher: ["/", "/login", "/register", "/profile", "/edit-profile", "/verify-register", "/forgot-password", "/verify-forget-password"],
};
