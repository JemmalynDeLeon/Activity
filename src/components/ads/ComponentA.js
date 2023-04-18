export default function ComponentA({name , information }){
    return (
        <div style={{ color: "blue", fontWeight: "bold" }}>
        <p>Your Name: {name}</p>
        <p>Give some Info: {information}</p>
        </div>
    )
}

