import { useState } from "react";
import type { Mood } from "../types";





export default function CheckInForm() {

    const [name, setName] = useState<string>("");
    const [mood, setMood] = useState<Mood>("okay");

    const moodOptions: Mood[] = ["great", "good", "okay", "tired", "stressed"];


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = {
            name,
            mood,
        };

        console.log(payload);
    };

    return (
        <form
            onSubmit={handleSubmit}>
            <label>Name</label>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
            />
            <div>
                <p>Choose mood:</p>

                {moodOptions.map((m) => (
                    <button
                        key={m}
                        type="button"
                        onClick={() => setMood(m)}
                    >
                        {m}
                    </button>
                ))}
            </div>

            <button type="submit">Save check-in</button>
        </form>
    );
}