import { useState } from "react";
import { supabase } from "./supabaseClient";

function OperatorLogin() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

async function handleLogin(event) {
event.preventDefault();

const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
    });

if (error) {
    console.error("Login failed:", error.message);
    return;
    }

    console.log("Operator signed in:", data.user.email);
}

async function handleLogout () {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error("Sign out failed:", error.message);
        return;
    }
    console.log("Operator signed out");
}

return (
    <form onSubmit={(handleLogin)}>
        <h2>Unity Nexus Operator Login</h2>

        <label htmlFor="operator-email">Email</label>
        <input
        id="operator-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="operator-password">Password</label>
        <input
        id="operator-password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Sign In</button>
        <button type="button" onClick={handleLogout}> Sign Out</button>
    </form>
    );
}

export default OperatorLogin;