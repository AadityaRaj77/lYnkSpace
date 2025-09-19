import { db } from "@/lib/db";

//fetch all links
export async function GET() {
    try {
        const [rows] = await db.query("SELECT * FROM links ORDER BY created_at DESC");
        return Response.json(rows);
    }
    catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}

//insert new link
export async function POST(req) {
    try {
        const body = await req.json();
        const { username, link_name, link_url, photo_url } = body;

        if (!username || !link_name || !link_url) {
            return new Response(JSON.stringify({ error: "Missing fields!" }), { status: 400 });
        }

        await db.query(
            "INSERT INTO links (username, link_name, link_url, photo_url) VALUES (?, ?, ?, ?)",
            [username, link_name, link_url, photo_url]
        );

        return Response.json({ message: "Add ho gya!" });
    }
    catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
