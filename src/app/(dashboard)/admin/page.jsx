"use client"

import { useAuth } from "@/components/AuthProvider"
import { inter } from "../bank-profiles/page";
import AdminTabs from "@/components/AdminTabs";

const AdminPage = () => {
    const { user } = useAuth();
    const isAdmin = user?.isAdmin;

    if (!isAdmin) return <h2>Unauthorized page</h2>

    return (
        <div>
            <AdminTabs />
        </div>
    )
}

export default AdminPage