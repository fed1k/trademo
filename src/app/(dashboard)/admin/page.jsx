"use client"

import { useAuth } from "@/components/AuthProvider"

const AdminPage = () => {
    const { user } = useAuth();
    const isAdmin = user?.isAdmin;

    if (!isAdmin) return <h2>Unauthorized page</h2>

    return (
        <h1>Admin page</h1>
    )
}

export default AdminPage