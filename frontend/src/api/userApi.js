const API_BASE = "http://localhost:300/api/user";

export const signupAPI = async(username,password)=>{
    const res = await fetch(`${API_BASE}/signup`,{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username,password})
    });
    return res.json();
};

export const loginAPI = async(username,password)=>{
    const res = await fetch(`${API_BASE}/login`,{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username,password})
    });
    return res.json();
}