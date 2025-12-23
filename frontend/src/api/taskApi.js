const API_BASE = "http://localhost:3000/api/user/task";

export const addTaskAPI = async(task)=>{
    const token = localStorage.getItem("token");
    console.log(token);
    const res = await fetch(`${API_BASE}/addtask`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Beareer ${token}`,
        },
        body: JSON.stringify(task)
    });
    return res.json();
}

export const getTaskAPI = async()=>{
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_BASE}/gettasklist`,{
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Beareer ${token}`,
        }
    });
    return res.json();
}