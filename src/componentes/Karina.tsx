

const Karina = () => {
//DATOS PERSONALES 
    const name:string = "Karina"
    const age:number = 45
    const jobs:string[] = ["graphic designer", "architect", "maintenance engineer", "English teacher"]
    const hobbies:string[] = ["crossfit", "caminar en la montaña"]
    const info:string = "Im a English teacher and an aspiring web-app developer"

    return (
        <>
        <div>{name}</div>
        <div>{age}</div>
        <div>{jobs}</div>
        <div>{hobbies}</div>
        <div>{info}</div>
        <img src="{reactSVG}" alt="mi fotito" />
        </>



        
    )

}
export default Karina