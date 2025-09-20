import { db } from "@/lib/db";

export default async function UserPage({ params }) {
    const raw = String(params?.username || "");
    const username = raw.trim().toLowerCase();

    try {
        const [rows] = await db.query(
            "SELECT link_name, link_url, photo_url FROM links WHERE LOWER(TRIM(username)) = ? ORDER BY created_at DESC",
            [username]
        );

        if (!rows || rows.length === 0) {
            return (
                <div className="text-center text-white mt-24">
                    <h2 className="text-2xl">Profile not found</h2>
                    <p className="text-sm mt-2">No user with handle `{raw}`</p>
                </div>
            );
        }

        const photo = rows[0]?.photo_url;

        return (
            <div className="flex flex-col items-center mt-12 space-y-6">
                {photo && (
                    <img
                        src={photo}
                        alt={raw}
                        className="w-32 h-32 rounded-full border-4 border-violet-500 object-cover"
                    />
                )}

                <h1 className="text-3xl font-bold text-white">@{raw}</h1>

                <div className="space-y-4 w-full max-w-sm">
                    {rows.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.link_url}
                            target="_blank"
                            rel="noreferrer"
                            className="block bg-violet-600 text-white py-3 rounded-xl text-center hover:bg-violet-800 transition"
                        >
                            {link.link_name}
                        </a>
                    ))}
                </div>
            </div>
        );
    } catch (err) {
        console.error("UserPage error:", err);
        return (
            <div className="text-center text-white mt-24">
                <h2 className="text-2xl">Something went wrong</h2>
                <p className="text-sm mt-2">{err.message}</p>
            </div>
        );
    }
}
