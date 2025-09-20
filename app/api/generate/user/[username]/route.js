import { db } from "@/lib/db";

export async function GET(req, { params }) {
    try {
        const { username } = params;
        console.log("API hit hua with username:", username);

        const [rows] = await db.query(
            "SELECT link_name, link_url, photo_url FROM links WHERE LOWER(username) = LOWER(?) ORDER BY created_at DESC",
            [username]
        );

        console.log("DB result:", rows);

        if (rows.length === 0) {
            return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
        }

        return Response.json(rows);
    } catch (err) {
        console.error("Error in API:", err.message);
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
