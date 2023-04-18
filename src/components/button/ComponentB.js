export default function ComponentB({age , address }){
    return (
        <div style={{ color: "green", fontWeight: "bold" }}>
        <p>Your Age: {age}</p>
        <p>Your complete address: {address}</p>
        </div>
    )
    
}