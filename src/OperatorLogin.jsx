import { useState } from "react";
import { supabase } from "./supabaseClient";

function OperatorLogin() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isSigningUp , setIsSigningUp] = useState(false);  
const [authMessage, setAuthMessage] = useState("");

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

    console.log("Operator signed in:", data.user?.email);
    setEmail("");
    setPassword("");
    setAuthMessage("Access Granted. Welcome to the Unity Nexus!")
}

async function handleLogout () {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error("Sign out failed:", error.message);
        return;
    }
        console.log("Operator signed out");

    }
    

    async function handleSignUp(event) {
    event.preventDefault();

const { data, error } = await supabase.auth.signUp({
    email,
    password, });

if (error) {
    console.error("Sign-up failed:", error.message);
    setAuthMessage(error.message);
    return;
}

console.log("Citizen account created:", data.user?.id);
setAuthMessage("Citizen account created successfully! Welcome to Unity Nexus,");
setEmail("");
setPassword("");
setIsSigningUp("");
}

return (
    <form onSubmit={isSigningUp ? handleSignUp : handleLogin}>
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

        <button type="submit">
            {isSigningUp ? "Create Account" : "Sign In"}
        </button>
        <button type="button" onClick={handleLogout}> Sign Out</button>
        
        <button
            type="button"
        onClick={() => {
            setIsSigningUp(!isSigningUp);
            setAuthMessage("");
        }}
        >
        {isSigningUp
            ? "Already registered? Sign In"
            : "New Citizen? Create Account"}
        </button>
        {authMessage && (
            <p className="auth-message">{authMessage}</p>
        )}
    </form>
    );
}

export default OperatorLogin;